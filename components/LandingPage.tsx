"use client";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, CheckCircle, Sparkles, Zap, Shield, Users, BarChart3, Clock, Star } from "lucide-react";
import Link from "next/link";
import PricingPage from "./PricingPage";

interface LandingPageProps {
  userId?: string | null;
}

const LandingPage = ({ userId }: LandingPageProps) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Pattern */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-green-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-80 h-80 rounded-full bg-gradient-to-r from-blue-400/20 to-green-400/20 blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-32 w-80 h-80 rounded-full bg-gradient-to-r from-green-400/20 to-cyan-400/20 blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-blue-400/10 to-teal-400/10 blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Main Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-900/30 dark:to-green-900/30 text-blue-600 dark:text-blue-400 mb-8">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">AI-Powered Form Builder</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Create Forms in
              <span className="bg-gradient-to-r from-blue-600 via-green-600 to-cyan-600 bg-clip-text text-transparent"> Seconds</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your ideas into beautiful, functional forms with the power of AI.
              No coding required.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link href={userId ? "/dashboard" : "/sign-up"}>
                <Button size="lg" className="bg-gradient-to-r from-blue-600 via-green-600 to-cyan-600 hover:from-blue-700 hover:via-green-700 hover:to-cyan-700 text-white px-8 py-6 text-lg shadow-lg shadow-blue-500/50">
                  {userId ? "Go to Dashboard" : "Start Creating Free"}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/dashboard/forms">
                <Button size="lg" variant="outline" className="px-8 py-6 text-lg border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20">
                  <Sparkles className="mr-2 w-5 h-5" />
                  See Examples
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center gap-8 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Safe and Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Freemium plans</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose GenForm?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Everything you need to create amazing forms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {/* Feature 1 */}
            <div className="p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/20 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                AI-Powered Generation
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Describe your form in plain English and watch AI create it instantly with smart field suggestions.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/20 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Secure & Reliable
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Enterprise-grade security with encrypted data storage. Your forms and submissions are always safe.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/20 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Easy Sharing
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Share your forms anywhere with one click. WhatsApp, Email, LinkedIn, and more platforms supported.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/20 hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-r from-teal-500 to-green-500 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Fully Customizable
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Edit, add, remove, and reorder fields with ease. Make your forms exactly how you want them.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/20 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Analytics Dashboard
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Track submissions, analyze responses, and gain insights with our comprehensive analytics tools.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/20 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Save Time
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Create forms in seconds, not hours. Our AI understands your needs and builds forms instantly.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-blue-600 via-green-600 to-cyan-600 rounded-3xl p-12 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">1k+</div>
                <div className="text-blue-100">Forms Created</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
                <div className="text-green-100">Happy Users</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">99.9%</div>
                <div className="text-cyan-100">Uptime</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">Max</div>
                <div className="text-blue-100">Support</div>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Loved by Teams Worldwide
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                See what our users have to say
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/20">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-blue-400 text-blue-400" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  &quot;GenForm has revolutionized how we create forms. The AI generation is incredibly accurate and saves us hours of work!&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                    JD
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">John Doe</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Product Manager</div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/20">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-green-400 text-green-400" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  &quot;The sharing features are amazing! I can share my forms on WhatsApp, LinkedIn, and more with just one click.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                    AS
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Alice Smith</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Marketing Director</div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/20">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-cyan-400 text-cyan-400" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  &quot;Best form builder I&apos;ve used. Clean interface, powerful features, and excellent analytics dashboard.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    MJ
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Mike Johnson</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Business Owner</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <PricingPage userId={userId ?? undefined} />
        </div>

        {/* CTA Section */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-gradient-to-r from-blue-600 via-green-600 to-cyan-600 rounded-3xl p-12 text-center shadow-2xl shadow-blue-500/20">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of users creating amazing forms with AI
            </p>
            <Link href="/sign-up">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold shadow-xl">
                Create Your First Form - It&apos;s Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 border-t border-gray-200 dark:border-gray-800 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-600 dark:text-gray-400">
              © 2025 GenForm. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
