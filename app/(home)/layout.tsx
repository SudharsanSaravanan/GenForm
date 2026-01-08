import { DarkMode } from "@/components/DarkMode";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription, SheetClose } from "@/components/ui/sheet";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const user = await currentUser();

  return (
    <div>
      <header className="border-b dark:border-slate-800 sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
        {/* Navbar  */}
        <nav className="flex items-center justify-between max-w-7xl mx-auto py-2 px-4">
          <Logo />

          {/* Center Navigation Links */}
          <div className="hidden md:flex items-center gap-1 mx-auto bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 backdrop-blur-md rounded-full px-1 py-1">
            <Link href="#home" className="text-sm font-medium px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
              Home
            </Link>
            <Link href="#features" className="text-sm font-medium px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
              Features
            </Link>
            <Link href="#testimonials" className="text-sm font-medium px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
              Testimonials
            </Link>
            <Link href="#faqs" className="text-sm font-medium px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
              FAQs
            </Link>
            <Link href="#pricing" className="text-sm font-medium px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
              Pricing
            </Link>
          </div>

          {/* Desktop Nav - Right Side CTAs */}
          <div className="hidden md:flex items-center gap-2">
            <DarkMode />
            {user ? (
              <>
                <Link href="/dashboard/analytics">
                  <Button variant="link">Dashboard</Button>
                </Link>
                <UserButton afterSignOutUrl="/" />
              </>
            ) : (
              <>
                <Link href="/sign-in">
                  <Button variant="ghost">Sign In</Button>
                </Link>
                <Link href="/sign-up">
                  <Button className="bg-green-500 hover:bg-green-600 text-white">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Nav */}
          <div className="md:hidden flex items-center gap-2">
            <DarkMode />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                 <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col gap-4 mt-8">

                  {/* Mobile Nav - Common Links */}
                  <div className="flex flex-col gap-2 border-b pb-4">
                    <SheetClose asChild>
                      <Link href="#home" className="text-sm font-medium px-4 py-2 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
                        Home
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="#features" className="text-sm font-medium px-4 py-2 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
                        Features
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="#testimonials" className="text-sm font-medium px-4 py-2 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
                        Testimonials
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="#faqs" className="text-sm font-medium px-4 py-2 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
                        FAQs
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="#pricing" className="text-sm font-medium px-4 py-2 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
                        Pricing
                      </Link>
                    </SheetClose>
                  </div>

                  {user ? (
                    <>
                      <Link href={"/dashboard/analytics"}>
                        <Button variant={"ghost"} className="w-full justify-start">Dashboard</Button>
                      </Link>
                      <div className="flex items-center justify-between pt-4 border-t">
                        <span className="text-sm font-medium">Account</span>
                        <UserButton afterSignOutUrl="/" />
                      </div>
                    </>
                  ) : (
                    <>
                      <Link href={"/sign-in"}>
                        <Button variant={"ghost"} className="w-full justify-start">Sign In</Button>
                      </Link>
                      <Link href="/sign-up">
                        <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                          Get Started
                        </Button>
                      </Link>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default layout;
