import React from "react";
import {
  Card,
  CardContent, 
  CardHeader,
  CardTitle,
} from "./ui/card"; 
import { 
  TrendingUp, 
  TrendingDown, 
  FileText, 
  Send, 
  CheckCircle, 
  BarChart3,
  Activity,
  Clock
} from "lucide-react";
import Link from "next/link";

type AnalyticsData = {
  totalForms: number;
  totalSubmissions: number;
  publishedForms: number;
  avgSubmissionsPerForm: number;
  submissionsByDay: Array<{ date: string; count: number }>;
  topForms: Array<{
    id: string;
    title: string;
    submissions: number;
    published: boolean;
    createdAt: Date;
  }>;
  recentActivity: Array<{
    id: number;
    formTitle: string;
    formId: string;
    createdAt: Date;
  }>;
  growthPercentage: number;
  recentSubmissionsCount: number;
};

type Props = {
  data: AnalyticsData | null;
}

const Analytics : React.FC<Props> = ({ data }) => {
  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500">No analytics data available</p>
      </div>
    );
  }

  const getTimeAgo = (date: Date) => {
    const seconds = Math.floor((new Date().getTime() - new Date(date).getTime()) / 1000);
    
    if (seconds < 60) return 'just now';
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
  };

  const maxSubmissions = Math.max(...data.submissionsByDay.map(d => d.count), 1);

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Analytics Dashboard
        </h1>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
          Track your form performance and engagement
        </p>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Total Forms */}
        <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-green-500">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Total Forms
            </CardTitle>
            <FileText className="w-5 h-5 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              {data.totalForms}
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {data.publishedForms} published
            </p>
          </CardContent>
        </Card>

        {/* Total Submissions */}
        <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-emerald-500">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Total Submissions
            </CardTitle>
            <Send className="w-5 h-5 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              {data.totalSubmissions}
            </div>
            <div className="flex items-center gap-1 mt-1">
              {data.growthPercentage >= 0 ? (
                <TrendingUp className="w-3 h-3 text-green-500" />
              ) : (
                <TrendingDown className="w-3 h-3 text-red-500" />
              )}
              <p className={`text-xs ${data.growthPercentage >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {Math.abs(data.growthPercentage)}% vs last week
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Published Forms */}
        <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-teal-500">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Published Forms
            </CardTitle>
            <CheckCircle className="w-5 h-5 text-teal-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              {data.publishedForms}
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {data.totalForms - data.publishedForms} drafts
            </p>
          </CardContent>
        </Card>

        {/* Average per Form */}
        <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-blue-500">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Avg per Form
            </CardTitle>
            <BarChart3 className="w-5 h-5 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              {data.avgSubmissionsPerForm}
            </div>
            <p className="text-xs text-gray-500 mt-1">
              submissions/form
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts and Tables Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Submissions Timeline */}
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
              <Activity className="w-5 h-5 text-green-500" />
              Last 7 Days Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {data.submissionsByDay.map((day, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="text-xs text-gray-500 w-12 sm:w-16">{day.date}</div>
                  <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-full h-6 sm:h-8 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-emerald-500 h-full rounded-full flex items-center justify-end pr-2 transition-all duration-500"
                      style={{ width: `${(day.count / maxSubmissions) * 100}%` }}
                    >
                      {day.count > 0 && (
                        <span className="text-xs font-semibold text-white">{day.count}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <p className="text-sm text-green-700 dark:text-green-400 font-medium">
                {data.recentSubmissionsCount} submissions this week
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Top Performing Forms */}
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
              <BarChart3 className="w-5 h-5 text-emerald-500" />
              Top Performing Forms
            </CardTitle>
          </CardHeader>
          <CardContent>
            {data.topForms.length > 0 ? (
              <div className="space-y-3">
                {data.topForms.map((form, index) => (
                  <Link 
                    key={form.id} 
                    href={`/dashboard/forms/${form.id}/submissions`}
                    className="block p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 font-bold text-sm flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm text-gray-900 dark:text-white truncate">
                            {form.title}
                          </p>
                          <p className="text-xs text-gray-500">
                            {form.published ? 'Published' : 'Draft'}
                          </p>
                        </div>
                      </div>
                      <div className="text-right ml-2">
                        <div className="text-lg font-bold text-green-500">
                          {form.submissions}
                        </div>
                        <div className="text-xs text-gray-500">responses</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <FileText className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p className="text-sm">No forms yet</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
            <Clock className="w-5 h-5 text-teal-500" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          {data.recentActivity.length > 0 ? (
            <div className="space-y-3">
              {data.recentActivity.map((activity) => (
                <Link
                  key={activity.id}
                  href={`/dashboard/forms/${activity.formId}/submissions`}
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        New submission to <span className="text-green-500">{activity.formTitle}</span>
                      </p>
                      <p className="text-xs text-gray-500">
                        {getTimeAgo(activity.createdAt)}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <Activity className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p className="text-sm">No recent activity</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;