import React from 'react';
import { FoundationInfo } from '../types/foundation';
import { FoundationLogo } from './FoundationLogo';

interface OfficialHeaderBannerProps {
  foundationInfo: FoundationInfo;
}

export const OfficialHeaderBanner: React.FC<OfficialHeaderBannerProps> = ({
  foundationInfo,
}) => {
  return (
    <section className="w-full bg-white border-b border-slate-200 py-5 sm:py-6 px-4 sm:px-6 shadow-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
        {/* Left Circular Seal Logo */}
        <div className="shrink-0 hidden md:block">
          <FoundationLogo className="w-24 h-24 lg:w-32 lg:h-32 drop-shadow-sm" allowZoom={true} />
        </div>

        {/* Center Authentic Letterhead Typography */}
        <div className="flex-1 text-center space-y-1.5">
          {/* Mobile Logo row */}
          <div className="flex md:hidden justify-center mb-2">
            <FoundationLogo className="w-24 h-24 drop-shadow-sm" allowZoom={true} />
          </div>

          {/* Red Marathi Main Header */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-red-700 tracking-tight leading-tight">
            कै.सौ. मनिषा सामाजिक व शैक्षणिक संस्था, नाशिक.
          </h1>

          {/* Subtitle Red */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-amber-700 tracking-wide font-serif italic">
            “तमसो मा ज्योतिर्गमय”
          </h2>

          {/* Registration Details */}
          <div className="text-xs sm:text-sm md:text-base font-bold text-slate-900 pt-1 space-y-0.5">
            <p className="font-bold text-slate-900 tracking-wide font-mono">
              Reg No: F-0021881 (NSK) · नोंदणी क्र.नाशिक/००००२३९/२०२२
            </p>
            <p className="font-semibold text-slate-600">
              सार्वजनिक न्यास नोंदणीकृत (Public Trust Registered)
            </p>
          </div>

          {/* English Motto in Blue */}
          <p className="text-xs sm:text-sm md:text-base font-semibold text-sky-800 italic pt-0.5">
            (The Goal is the Social and Educational Development of the last man in the society.)
          </p>

          {/* Founder President in Orange / Amber */}
          <div className="pt-1.5">
            <span className="text-sm sm:text-base md:text-lg font-black text-amber-800 tracking-wide inline-block bg-amber-50 px-3 py-1 rounded-md border border-amber-200">
              संस्थापक अध्यक्ष : श्री. संदिप मधुकरराव भालेराव
            </span>
          </div>

          {/* Mobile & Email Contact Coordinates */}
          <div className="pt-1.5 flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-xs sm:text-sm font-bold text-slate-900">
            <a
              href="tel:7798100216"
              className="flex items-center gap-1.5 hover:text-red-700 transition-colors"
            >
              <span className="text-slate-600 font-semibold">Mob.:</span>
              <span className="text-red-700 font-extrabold font-mono text-sm sm:text-base">
                7798100216
              </span>
            </a>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <a
              href="mailto:manishafoundation26@gmail.com"
              className="flex items-center gap-1.5 text-blue-900 hover:text-red-700 transition-colors font-mono"
            >
              <span className="text-slate-600 font-semibold font-sans">Email ID :</span>
              <span>manishafoundation26@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Right Circular Seal Logo */}
        <div className="shrink-0 hidden md:block">
          <FoundationLogo className="w-24 h-24 lg:w-32 lg:h-32 drop-shadow-sm" allowZoom={true} />
        </div>
      </div>
    </section>
  );
};
