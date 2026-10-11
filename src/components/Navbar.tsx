import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Heart,
  Phone,
  Mail,
  ShieldCheck,
  ChevronRight,
  Globe,
  CreditCard,
} from 'lucide-react';
import { ActiveTab, FoundationInfo } from '../types/foundation';
import { FoundationLogo } from './FoundationLogo';

interface NavbarProps {
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
  onOpenDonation: () => void;
  foundationInfo: FoundationInfo;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onSelectTab,
  onOpenDonation,
  foundationInfo,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: ActiveTab; label: string; marathiBadge?: string }[] = [
    { id: 'home', label: 'Home', marathiBadge: 'मुख्यपृष्ठ' },
    { id: 'about', label: 'About Us', marathiBadge: 'आमच्याबद्दल' },
    { id: 'work', label: 'Our Work', marathiBadge: 'कार्य' },
    { id: 'photos', label: 'Photos', marathiBadge: 'छायाचित्रे' },
    { id: 'gallery', label: 'Gallery', marathiBadge: 'गॅलरी' },
    { id: 'videos', label: 'Videos', marathiBadge: 'व्हिडिओ' },
    { id: 'events', label: 'Events', marathiBadge: 'कार्यक्रम' },
    { id: 'contact', label: 'Contact', marathiBadge: 'संपर्क' },
  ];

  const handleNavClick = (tabId: ActiveTab) => {
    onSelectTab(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Utility Announcement Ribbon (English + Marathi) */}
      <div className="bg-slate-100 text-slate-700 text-xs py-1.5 px-4 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3 sm:gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-red-700 font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-red-600 shrink-0" />
              <span>Reg No: F-0021881 (NSK) · नोंदणी क्र. नाशिक/००००२३९/२०२२</span>
            </span>
            <span className="hidden md:inline text-slate-300">|</span>
            <a
              href="tel:7798100216"
              className="hidden md:flex items-center gap-1.5 text-slate-700 hover:text-red-700 transition-colors font-medium font-mono"
            >
              <Phone className="w-3 h-3 text-red-600" />
              <span>7798100216</span>
            </a>
            <span className="hidden lg:inline text-slate-300">|</span>
            <a
              href="mailto:manishafoundation26@gmail.com"
              className="hidden lg:flex items-center gap-1.5 text-slate-700 hover:text-red-700 transition-colors font-medium font-mono"
            >
              <Mail className="w-3 h-3 text-red-600" />
              <span>manishafoundation26@gmail.com</span>
            </a>
          </div>

          <div className="flex items-center gap-3 text-[11px] ml-auto">
            <span className="text-slate-600 hidden sm:inline font-medium">
              Nashik, Maharashtra (नाशिक)
            </span>
            <button
              onClick={onOpenDonation}
              className="text-red-700 hover:text-red-800 font-bold flex items-center gap-1.5 transition-colors"
            >
              <CreditCard className="w-3.5 h-3.5" />
              <span>Donate · बँक खाते (देणगी)</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-200 border-b bg-white/95 backdrop-blur-md ${
          isScrolled
            ? 'border-slate-300 shadow-md py-2'
            : 'border-slate-200 shadow-xs py-2.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Foundation Logo / Brand with English & Marathi */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none focus:ring-2 focus:ring-red-500 rounded-lg p-1"
          >
            <div className="shrink-0">
              <FoundationLogo className="w-12 h-12 sm:w-14 sm:h-14 group-hover:scale-105 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-black text-red-700 tracking-tight leading-tight">
                Manisha Foundation
              </span>
              <span className="text-[11px] sm:text-xs text-slate-700 font-bold">
                कै.सौ. मनिषा संस्था, नाशिक
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 text-xs font-bold rounded-lg transition-all relative text-center ${
                    isActive
                      ? 'text-red-700 bg-red-50'
                      : 'text-slate-700 hover:text-red-700 hover:bg-slate-50'
                  }`}
                >
                  <span className="block">{item.label}</span>
                  <span className="block text-[10px] text-slate-400 font-normal mt-0.5">
                    {item.marathiBadge}
                  </span>
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-red-600 rounded-full" />
                  )}
                </button>
              );
            })}

            {/* Donate CTA Button (English + Marathi) */}
            <button
              onClick={onOpenDonation}
              className="ml-3 inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-sm transition-all transform hover:scale-[1.03] active:scale-[0.98] ring-2 ring-red-500/20"
            >
              <CreditCard className="w-4 h-4 text-white" />
              <span>Donate · देणगी</span>
            </button>
          </div>

          {/* Medium/Tablet Navigation */}
          <div className="hidden lg:flex xl:hidden items-center gap-1.5">
            <button
              onClick={() => handleNavClick('home')}
              className={`px-2.5 py-1.5 text-xs font-bold rounded-md ${
                activeTab === 'home' ? 'text-red-700 bg-red-50' : 'text-slate-700'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`px-2.5 py-1.5 text-xs font-bold rounded-md ${
                activeTab === 'about' ? 'text-red-700 bg-red-50' : 'text-slate-700'
              }`}
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('work')}
              className={`px-2.5 py-1.5 text-xs font-bold rounded-md ${
                activeTab === 'work' ? 'text-red-700 bg-red-50' : 'text-slate-700'
              }`}
            >
              Our Work
            </button>
            <button
              onClick={() => handleNavClick('events')}
              className={`px-2.5 py-1.5 text-xs font-bold rounded-md ${
                activeTab === 'events' ? 'text-red-700 bg-red-50' : 'text-slate-700'
              }`}
            >
              Events
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`px-2.5 py-1.5 text-xs font-bold rounded-md ${
                activeTab === 'contact' ? 'text-red-700 bg-red-50' : 'text-slate-700'
              }`}
            >
              Contact
            </button>
            <button
              onClick={onOpenDonation}
              className="ml-2 inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded-md shadow-xs"
            >
              <CreditCard className="w-3.5 h-3.5 text-white" />
              <span>Donate (देणगी)</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900"
              aria-label="More menu items"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Right Controls: Donate + Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenDonation}
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-xs"
            >
              <CreditCard className="w-3.5 h-3.5 text-white" />
              <span>Donate</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors text-left ${
                      isActive
                        ? 'bg-red-50 text-red-700 border-l-4 border-red-600'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <div>
                      <span>{item.label}</span>
                      <span className="text-xs text-slate-400 font-normal ml-2">
                        ({item.marathiBadge})
                      </span>
                    </div>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-red-700' : 'text-slate-400'}`} />
                  </button>
                );
              })}

              {/* Mobile Donate Button */}
              <div className="pt-3 mt-2 border-t border-slate-200">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDonation();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-md text-sm transition-all"
                >
                  <CreditCard className="w-4 h-4 text-white" />
                  <span>Donate to Foundation (देणगी बँक खाते)</span>
                </button>
              </div>

              {/* Mobile Contact Quick Actions */}
              <div className="pt-3 grid grid-cols-2 gap-2 text-xs">
                <a
                  href="tel:7798100216"
                  className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-slate-100 text-slate-800 hover:bg-slate-200 font-semibold font-mono"
                >
                  <Phone className="w-3.5 h-3.5 text-red-600" />
                  <span>Call 7798100216</span>
                </a>
                <a
                  href="mailto:manishafoundation26@gmail.com"
                  className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-slate-100 text-slate-800 hover:bg-slate-200 font-semibold"
                >
                  <Mail className="w-3.5 h-3.5 text-red-600" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
