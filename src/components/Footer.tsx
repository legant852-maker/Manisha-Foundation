import React from 'react';
import {
  Heart,
  Phone,
  Mail,
  Clock,
  ArrowUp,
  Globe,
  Share2,
  MessageSquare,
} from 'lucide-react';
import { ActiveTab, FoundationInfo } from '../types/foundation';
import { FoundationLogo } from './FoundationLogo';

interface FooterProps {
  foundationInfo: FoundationInfo;
  onSelectTab: (tab: ActiveTab) => void;
  onOpenDonate: () => void;
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  foundationInfo,
  onSelectTab,
  onOpenDonate,
  onScrollToTop,
}) => {
  const quickLinks: { id: ActiveTab; label: string; marathi: string }[] = [
    { id: 'home', label: 'Home', marathi: 'मुख्यपृष्ठ' },
    { id: 'about', label: 'About Us', marathi: 'आमच्याबद्दल' },
    { id: 'work', label: 'Our Work', marathi: 'कार्य व उपक्रम' },
    { id: 'photos', label: 'Photos', marathi: 'छायाचित्रे' },
    { id: 'gallery', label: 'Gallery', marathi: 'गॅलरी' },
    { id: 'videos', label: 'Videos', marathi: 'व्हिडिओ' },
    { id: 'events', label: 'Events', marathi: 'कार्यक्रम' },
    { id: 'contact', label: 'Contact', marathi: 'संपर्क' },
  ];

  return (
    <footer className="bg-slate-100 text-slate-700 border-t border-slate-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-slate-200">
          {/* Foundation Profile (Col 1: 5 spans) */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="flex items-center gap-3">
              <FoundationLogo className="w-14 h-14 drop-shadow-sm shrink-0" allowZoom={true} />
              <div>
                <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-tight">
                  Manisha Foundation
                </h3>
                <span className="text-xs text-red-700 font-extrabold block">
                  कै.सौ. मनिषा सामाजिक व शैक्षणिक संस्था, नाशिक.
                </span>
                <span className="text-[11px] text-slate-500 font-bold block uppercase tracking-wider font-serif italic">
                  “तमसो मा ज्योतिर्गमय”
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-sky-800 font-semibold italic leading-relaxed pt-1">
              “{foundationInfo.officialMotto}”
            </p>

            <div className="text-xs text-slate-700 bg-white p-3 rounded-xl border border-slate-200 shadow-xs space-y-1">
              <div className="font-extrabold text-amber-900">
                Founder President: Shri Sandip Madhukarrao Bhalerao (श्री. संदिप भालेराव)
              </div>
              <div className="font-bold text-slate-900">
                Reg No: F-0021881 (NSK) · नोंदणी क्र. नाशिक/००००२३९/२०२२
              </div>
              <div className="text-slate-500 text-[11px]">
                Public Trust Registered · Maharashtra State, India
              </div>
            </div>

            {/* Social Channels */}
            <div className="pt-1 flex items-center gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white hover:bg-red-600 hover:text-white text-slate-600 transition-colors border border-slate-200 shadow-2xs"
                aria-label="Facebook"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white hover:bg-red-600 hover:text-white text-slate-600 transition-colors border border-slate-200 shadow-2xs"
                aria-label="Twitter"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-white hover:bg-red-600 hover:text-white text-slate-600 transition-colors border border-slate-200 shadow-2xs"
                aria-label="Instagram"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (Col 2: 3 spans) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Quick Links · महत्त्वाच्या लिंक्स
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs font-medium">
              {quickLinks.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      onSelectTab(item.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-slate-600 hover:text-red-600 transition-colors flex items-center gap-1.5 py-1 text-left"
                  >
                    <span className="text-red-600 font-bold">›</span>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={onOpenDonate}
                  className="text-red-600 hover:text-red-700 font-bold transition-colors flex items-center gap-1.5 py-1 text-left"
                >
                  <Heart className="w-3 h-3 fill-red-600 text-red-600" />
                  <span>Donate (देणगी)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details (Col 3: 4 spans) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Contact Details · संपर्क
            </h4>
            <div className="space-y-2.5 text-xs text-slate-600 bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-red-600 shrink-0" />
                <a href="tel:7798100216" className="text-red-600 font-bold hover:underline font-mono text-sm">
                  7798100216
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-red-600 shrink-0" />
                <a href="mailto:manishafoundation26@gmail.com" className="hover:text-red-600 font-medium font-mono">
                  manishafoundation26@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-medium">
                  Nashik, Maharashtra (नाशिक)
                </span>
                <button
                  onClick={onOpenDonate}
                  className="px-2.5 py-1 bg-red-600 hover:bg-red-700 text-white font-bold rounded-md text-[11px] transition-colors"
                >
                  Donate
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 Manisha Foundation (कै.सौ. मनिषा सामाजिक व शैक्षणिक संस्था). All Rights Reserved.
          </div>
          <div className="flex items-center gap-1.5 text-slate-600 font-medium">
            <span>Designed with</span>
            <Heart className="w-3.5 h-3.5 text-red-600 fill-red-600" />
            <span>for Social &amp; Educational Impact</span>
          </div>
          <button
            onClick={onScrollToTop}
            className="flex items-center gap-1 text-slate-600 hover:text-red-600 transition-colors font-semibold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
