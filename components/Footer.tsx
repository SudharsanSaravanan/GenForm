import React from "react";
import Link from "next/link";
import { Heart, Sparkles, Zap, Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 dark:from-gray-950 dark:via-blue-950/30 dark:to-green-950/30">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-green-400 to-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-400 to-cyan-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-green-300 to-emerald-400 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          
          {/* Brand Section - Larger on desktop */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start gap-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 via-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative flex items-center gap-3 bg-white dark:bg-gray-900 px-6 py-4 rounded-2xl">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl blur-md opacity-50"></div>
                  <div className="relative w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-2xl">G</span>
                  </div>
                </div>
                <h3 className="text-3xl font-black bg-gradient-to-r from-green-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  GenForm
                </h3>
              </div>
            </div>
            
            <p className="text-base text-gray-700 dark:text-gray-300 text-center lg:text-left max-w-md leading-relaxed">
              Transform ideas into beautiful forms with AI magic. Create, customize, and share professional forms in seconds.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-green-200 dark:border-green-800 shadow-sm">
                <Sparkles className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">AI Powered</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-blue-200 dark:border-blue-800 shadow-sm">
                <Zap className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">500+ Users</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start gap-5">
            <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-widest flex items-center gap-2">
              <div className="w-8 h-0.5 bg-gradient-to-r from-green-500 to-blue-500"></div>
              Navigate
            </h4>
            <ul className="space-y-3 text-center lg:text-left">
              <li>
                <Link 
                  href="/dashboard/forms" 
                  className="group inline-flex items-center gap-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-all hover:translate-x-2 cursor-pointer"
                >
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500 group-hover:shadow-lg group-hover:shadow-green-500/50 transition-all"></span>
                  Dashboard
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link 
                  href="/dashboard/analytics" 
                  className="group inline-flex items-center gap-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:translate-x-2 cursor-pointer"
                >
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all"></span>
                  Analytics
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link 
                  href="/dashboard/upgrade" 
                  className="group inline-flex items-center gap-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all hover:translate-x-2 cursor-pointer"
                >
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-green-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all"></span>
                  Pricing
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <a 
                  href="https://github.com/Amansingh0807/GenForm" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all hover:translate-x-2 cursor-pointer"
                >
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all"></span>
                  Repository
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start gap-5">
            <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-widest flex items-center gap-2">
              <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-green-500"></div>
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/Amansingh0807"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group relative"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-gray-600 to-gray-900 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative w-14 h-14 rounded-2xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center hover:border-gray-900 dark:hover:border-gray-500 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer">
                  <Github className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/amansingh08/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group relative"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative w-14 h-14 rounded-2xl bg-white dark:bg-gray-800 border-2 border-blue-200 dark:border-blue-900 flex items-center justify-center hover:border-[#0077b5] hover:bg-[#0077b5] hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 cursor-pointer">
                  <Linkedin className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
              </a>
              <a
                href="https://x.com/RealAman_Singh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="group relative"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-gray-600 to-black rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative w-14 h-14 rounded-2xl bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center hover:border-black hover:bg-black hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer">
                  <Twitter className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors" />
                </div>
              </a>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center lg:text-left">
              Follow for updates, tips & exclusive features
            </p>
          </div>
        </div>

        {/* Divider with gradient */}
        <div className="relative mb-8">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"></div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <span className="font-medium">© {currentYear}</span>
            <span className="text-gray-400 dark:text-gray-600">•</span>
            <span className="font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">GenForm</span>
            <span className="text-gray-400 dark:text-gray-600">•</span>
            <span>All rights reserved</span>
          </div>
          
          <div className="flex items-center gap-2 px-5 py-2.5 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 shadow-lg">
            <span className="text-sm text-gray-600 dark:text-gray-400">Crafted with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            <span className="text-sm text-gray-600 dark:text-gray-400">by</span>
            <a
              href="https://github.com/Amansingh0807"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-blue-600 to-cyan-600 hover:from-green-700 hover:via-blue-700 hover:to-cyan-700 transition-all cursor-pointer"
            >
              Aman Singh
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
