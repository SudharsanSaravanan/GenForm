"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { publishForm } from "@/actions/publishForm";
import FormPublishDialog from "./FormPublishDialog";
import { Fields } from "@/types/form";
import toast from "react-hot-toast";
import { submitForm } from "../actions/submitForm";
import RichTextEditor from "./RichTextEditor";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

type Props = { form: any; isEditMode: boolean };

const AiGeneratedForm: React.FC<Props> = ({ form, isEditMode }) => {
  const [successDialogOpen, setSuccessDialogOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<any>({});
 
  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value}= e.target;
    setFormData({...formData, [name]:value});
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({...formData, [name]:value});
  }

  const handleCheckboxChange = (name: string, value: string, checked: boolean) => {
    const currentValues = formData[name] || [];
    if (checked) {
      setFormData({...formData, [name]: [...currentValues, value]});
    } else {
      setFormData({...formData, [name]: currentValues.filter((v: string) => v !== value)});
    }
  }
  const handlePublish = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditMode) {
      await publishForm(form.uuid);
      setSuccessDialogOpen(true);
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = await submitForm(form.uuid, formData);

    if(data?.success){
      toast.success(data.message);
      setFormData({});
    }
    if(!data?.success){
      toast.error(data?.message);
    }
    
  };
  const value = typeof form.content !== 'object' ? JSON.parse(form.content as any) : form.content;

  let data;

  if (typeof value === "object" && form !== null && !Array.isArray(value)) {
    data = value.formFields;
  } else {
    data = value[0].formFields;
  }

  return (
    <div>
      <form onSubmit={isEditMode ? handlePublish : handleSubmit}>
        {value.formDescription && (
          <div className="mb-6">
            <RichTextEditor
              value={value.formDescription}
              readOnly
            />
          </div>
        )}
        {data.map((item: Fields, index: number) => (
          <div key={index} className="mb-4">
            <Label>{item.label}</Label>
            
            {/* Text, Email, Number, Date inputs */}
            {(item.type === 'text' || item.type === 'email' || item.type === 'number' || item.type === 'date' || item.type === 'datetime-local') && (
              <Input
                type={item.type}
                name={item.name}
                placeholder={item.placeholder}
                required={!isEditMode && item.required}
                onChange={handleChange}
                value={formData[item.name || ''] || ''}
              />
            )}

            {/* Textarea */}
            {item.type === 'textarea' && (
              <Textarea
                name={item.name}
                placeholder={item.placeholder}
                required={!isEditMode && item.required}
                onChange={handleChange}
                value={formData[item.name || ''] || ''}
                rows={4}
              />
            )}

            {/* Select/Dropdown */}
            {item.type === 'select' && (
              <Select
                name={item.name}
                onValueChange={(value) => handleSelectChange(item.name || '', value)}
                disabled={isEditMode}
                required={!isEditMode && item.required}
              >
                <SelectTrigger>
                  <SelectValue placeholder={item.placeholder || 'Select an option'} />
                </SelectTrigger>
                <SelectContent>
                  {item.options?.map((option, idx) => (
                    <SelectItem key={idx} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}

            {/* Radio Buttons */}
            {item.type === 'radio' && (
              <RadioGroup
                name={item.name}
                onValueChange={(value) => handleSelectChange(item.name || '', value)}
                disabled={isEditMode}
                required={!isEditMode && item.required}
              >
                {item.options?.map((option, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <RadioGroupItem value={option} id={`${item.name}-${idx}`} />
                    <Label htmlFor={`${item.name}-${idx}`} className="font-normal cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            )}

            {/* Checkboxes */}
            {item.type === 'checkbox' && (
              <div className="space-y-2">
                {item.options?.map((option, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <Checkbox
                      id={`${item.name}-${idx}`}
                      disabled={isEditMode}
                      onCheckedChange={(checked) => handleCheckboxChange(item.name || '', option, checked as boolean)}
                    />
                    <Label htmlFor={`${item.name}-${idx}`} className="font-normal cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        <Button type="submit">{isEditMode ? "Publish" : "Submit"}</Button>
      </form>
      <FormPublishDialog
        formId={form.uuid}
        open={successDialogOpen}
        onOpenChange={setSuccessDialogOpen}
      />
    </div>
  );
};

export default AiGeneratedForm;