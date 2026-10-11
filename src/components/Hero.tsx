import React from 'react';
import { Heart, ArrowRight, ShieldCheck, Users, Sparkles, Award } from 'lucide-react';
import { FoundationInfo } from '../types/foundation';
import { FoundationLogo } from './FoundationLogo';

interface HeroProps {
  foundationInfo: FoundationInfo;
  onExploreWork: () => void;
  onDonateNow: () => void;
  onOpenAbout: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  foundationInfo,
  onExploreWork,
  onDonateNow,
}) => {
  return (
    <section className="relative w-full bg-white border-b border-slate-200 overflow-hidden text-slate-900 py-12 lg:py-20">
      {/* Subtle Warm Background Ambient Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-50/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-50/60 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Registration Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-bold tracking-wide uppercase mb-6 shadow-2xs">
          <Sparkles className="w-4 h-4 text-red-600" />
          <span>Public Trust Registered · Reg No: F-0021881 (NSK) · नोंदणी क्र. नाशिक/००००२३९/२०२२</span>
        </div>

        {/* Center Logo Seal */}
        <div className="mb-6 group">
          <div className="p-2 bg-white rounded-full shadow-md border-2 border-amber-300 inline-block transform hover:scale-105 transition-transform duration-300">
            <FoundationLogo className="w-32 h-32 sm:w-40 sm:h-40 drop-shadow-md" allowZoom={true} />
          </div>
        </div>

        {/* Main Header in English with Marathi Subheading */}
        <div className="space-y-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Manisha Foundation
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-red-700 tracking-tight">
            कै.सौ. मनिषा सामाजिक व शैक्षणिक संस्था, नाशिक.
          </h2>
        </div>

        {/* Sanskrit Inscription & English Motto */}
        <div className="mt-4 max-w-3xl space-y-2">
          <div className="text-base sm:text-lg font-bold text-amber-800 font-serif italic">
            “तमसो मा ज्योतिर्गमय”
          </div>
          <p className="text-base sm:text-lg md:text-xl font-semibold text-sky-800 italic leading-relaxed">
            “The Goal is the Social and Educational Development of the last man in the society.”
          </p>
        </div>

        {/* Founder President Inscription Badge */}
        <div className="mt-5 inline-block bg-amber-50 border border-amber-300/80 px-4 py-1.5 rounded-xl shadow-xs">
          <span className="text-xs sm:text-sm font-bold text-slate-600 uppercase tracking-wider block sm:inline mr-2">
            Founder President (संस्थापक अध्यक्ष) :
          </span>
          <span className="text-sm sm:text-base font-extrabold text-amber-900">
            Shri Sandip Madhukarrao Bhalerao (श्री. संदिप मधुकरराव भालेराव)
          </span>
          <span className="text-xs font-bold text-slate-700 ml-2 hidden sm:inline font-mono">
            (Mob: 7798100216)
          </span>
        </div>

        {/* Short Mission Intro (English + Marathi) */}
        <p className="mt-5 text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl leading-relaxed">
          Dedicated to grassroots social and educational upliftment of the underprivileged up to the last man in society through inclusive education support, healthcare assistance, women empowerment, and social welfare across Nashik and Maharashtra state.
          <span className="block mt-2 text-slate-700 font-medium">
            (समाजातील शेवटच्या घटकातील नागरिकांच्या सर्वांगीण प्रगतीसाठी अविरत कार्यमग्न.)
          </span>
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          <button
            onClick={onDonateNow}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-red-600 hover:bg-red-700 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-md shadow-red-600/20"
          >
            <Heart className="w-4 h-4 fill-white" />
            <span>Donate Now · देणगी द्या</span>
          </button>
          <button
            onClick={onExploreWork}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 transition-all shadow-xs"
          >
            <span>Explore Our Work (आमचे कार्य)</span>
            <ArrowRight className="w-4 h-4 text-red-600" />
          </button>
        </div>

        {/* Trust Credentials Grid */}
        <div className="mt-14 pt-8 border-t border-slate-200 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-red-600 shrink-0" />
            <div className="text-xs">
              <strong className="text-slate-900 block font-bold">Public Trust</strong>
              F-0021881 (NSK)
            </div>
          </div>
          <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs flex items-center gap-3">
            <Award className="w-5 h-5 text-amber-600 shrink-0" />
            <div className="text-xs">
              <strong className="text-slate-900 block font-bold">80G Tax Exemption</strong>
              ८०जी कर सवलत
            </div>
          </div>
          <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs flex items-center gap-3">
            <Users className="w-5 h-5 text-blue-600 shrink-0" />
            <div className="text-xs">
              <strong className="text-slate-900 block font-bold">Active Volunteers</strong>
              १५०+ कार्यकर्ते
            </div>
          </div>
          <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs flex items-center gap-3">
            <Heart className="w-5 h-5 text-rose-600 shrink-0" />
            <div className="text-xs">
              <strong className="text-slate-900 block font-bold">100% Impact</strong>
              पारदर्शक समाजसेवा
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
