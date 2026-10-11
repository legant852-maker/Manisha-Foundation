import React from 'react';
import {
  Users,
  Sparkles,
  Calendar,
  HeartHandshake,
  ShieldCheck,
  Heart,
  Globe2,
  CheckCircle2,
} from 'lucide-react';
import { FoundationInfo, StatItem, ValueItem } from '../types/foundation';
import { FoundationLogo } from './FoundationLogo';
import { OFFICIAL_ABOUT_DETAILS } from '../data/foundationData';
import aboutImageSrc from '../assets/images/regenerated_image_1791551734649.jpg';

interface AboutSectionProps {
  foundationInfo: FoundationInfo;
  stats: StatItem[];
  values: ValueItem[];
  onOpenDonate: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  foundationInfo,
  stats,
  values,
  onOpenDonate,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users': return <Users className="w-6 h-6 text-red-600" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-red-600" />;
      case 'Calendar': return <Calendar className="w-6 h-6 text-red-600" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-red-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-red-600" />;
      case 'Heart': return <Heart className="w-5 h-5 text-red-600" />;
      case 'Globe2': return <Globe2 className="w-5 h-5 text-red-600" />;
      default: return <Users className="w-6 h-6 text-red-600" />;
    }
  };

  return (
    <section id="about-section" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ===================== SECTION KICKER ===================== */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 px-3.5 py-1.5 rounded-md border border-red-200">
            About Our Organization · संस्थेची ओळख व इतिहास
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Who We Are &amp; What Drives Us
          </h2>
          <div className="mt-2 text-lg sm:text-xl font-bold text-red-700">
            समाजातील शेवटच्या घटकासाठी निस्वार्थ सेवा
          </div>
          <div className="mt-3 w-16 h-1 bg-red-600 mx-auto rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {foundationInfo.name} ({foundationInfo.marathiName}) is established with an unwavering dedication to providing educational resources, healthcare assistance, and sustainable community empowerment across Nashik and Maharashtra state.
          </p>
        </div>

        {/* ===================== TWO-COLUMN STORY & EDITORIAL IMAGE ===================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
              Serving with Compassion, Leading with Accountability
              <span className="block text-xl font-extrabold text-red-700 mt-1">
                सेवा, शिक्षण आणि स्वावलंबनाची अखंड ज्ञानज्योती
              </span>
            </h3>
            <p className="text-slate-600 text-base leading-relaxed">
              We work tirelessly to empower marginalized families, children in need of foundational education, underprivileged women seeking livelihood skills, and neighborhoods lacking access to basic social amenities.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              Guided by the leadership of Founder President Shri Sandip Madhukarrao Bhalerao, our initiatives focus on tangible, measurable grassroots change — reaching out directly to the families who need support the most.
            </p>

            {/* Core Tenets Bullet Points (Bilingual) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                { en: 'Free School Bags & Stationery Drives', mr: 'मोफत शालेय साहित्य वाटप' },
                { en: 'Free Diagnostic Health & Eye Camps', mr: 'मोफत आरोग्य व नेत्र शिबिरे' },
                { en: 'Women Tailoring & Skill Training', mr: 'महिला शिवणकाम व स्वावलंबन' },
                { en: 'Winter Blanket & Food Ration Relief', mr: 'उबदार ब्लँकेट व अन्नधान्य मदत' },
                { en: 'Environmental Tree Plantation Drives', mr: 'पर्यावरण संवर्धन व वृक्षारोपण' },
                { en: 'Youth Career Guidance & Counseling', mr: 'युवा करिअर व स्पर्धा परीक्षा मार्गदर्शन' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block">{item.en}</span>
                    <span className="text-xs text-slate-500 font-medium">({item.mr})</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenDonate}
                className="px-6 py-3 rounded-xl bg-red-600 text-white hover:bg-red-700 text-sm font-bold shadow-sm transition-all"
              >
                Join Hands With Us (सहकार्य करा)
              </button>
              <div className="text-xs text-slate-500 font-mono">
                Reg No: {foundationInfo.registrationNo}
              </div>
            </div>
          </div>

          {/* Editorial Image Container */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-100">
              <img
                src={aboutImageSrc}
                alt="Community volunteers with smiling children"
                className="w-full h-[440px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-amber-400 font-mono text-xs uppercase tracking-wider block font-bold">
                  Field Mission Snapshot · सेवाकार्य क्षणचित्रे
                </span>
                <p className="text-sm font-medium mt-1 leading-snug">
                  “Every child deserves the dignity of books, guidance, and a hopeful future.”
                </p>
              </div>
            </div>
            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-4 sm:p-5 rounded-2xl shadow-xl border-2 border-white hidden sm:block">
              <span className="text-2xl sm:text-3xl font-extrabold block leading-none font-mono">
                {new Date().getFullYear() - foundationInfo.establishedYear}+ Years
              </span>
              <span className="text-xs font-bold tracking-wider uppercase">
                Active Ground Service (अविरत समाजसेवा)
              </span>
            </div>
          </div>
        </div>

        {/* ===================== OFFICIAL PAMPHLET 3-CARD SHOWCASE ===================== */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-3.5 py-1.5 rounded-md border border-red-200">
              Official Organization Creed · अधिकृत माहिती पत्रक
            </span>
            <h3 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Our Vision, Mission &amp; Core Objectives
            </h3>
          </div>

          {/* 3 Column Official Pamphlet Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-8">
            {/* CARD 1: प्रस्तावना (Blue Card) */}
            <div className="relative bg-white rounded-3xl border-2 border-blue-600 p-6 sm:p-7 pt-9 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="inline-block bg-blue-600 text-white font-extrabold text-sm sm:text-base px-6 py-1.5 rounded-full shadow-md whitespace-nowrap">
                  {OFFICIAL_ABOUT_DETAILS.introductionTitle}
                </span>
              </div>
              <div>
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed text-justify font-normal">
                  {OFFICIAL_ABOUT_DETAILS.introductionText}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-blue-100 flex items-center justify-between text-xs text-blue-700 font-bold">
                <span>Social Solidarity</span>
                <span>सर्वांगीण विकास</span>
              </div>
            </div>

            {/* CARD 2: उद्दिष्टे (Green Card) */}
            <div className="relative bg-white rounded-3xl border-2 border-emerald-600 p-6 sm:p-7 pt-9 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="inline-block bg-emerald-600 text-white font-extrabold text-sm sm:text-base px-6 py-1.5 rounded-full shadow-md whitespace-nowrap">
                  {OFFICIAL_ABOUT_DETAILS.goalsTitle}
                </span>
              </div>
              <div>
                <ul className="space-y-2.5 text-sm sm:text-base text-slate-800 leading-relaxed">
                  {OFFICIAL_ABOUT_DETAILS.goalsList.map((goal, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-emerald-600 font-black text-lg leading-none shrink-0 mt-0.5">✔</span>
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 pt-3 border-t border-emerald-100 text-xs text-emerald-700 font-bold text-center">
                Sustainable Progress · शाश्वत सामाजिक उन्नती
              </div>
            </div>

            {/* CARD 3: ध्येय (Amber Card) */}
            <div className="relative bg-white rounded-3xl border-2 border-amber-500 p-6 sm:p-7 pt-9 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-center">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="inline-block bg-amber-500 text-white font-extrabold text-sm sm:text-base px-6 py-1.5 rounded-full shadow-md whitespace-nowrap">
                  {OFFICIAL_ABOUT_DETAILS.visionTitle}
                </span>
              </div>
              <div className="my-auto py-4">
                <blockquote className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 leading-relaxed italic font-serif px-2">
                  {OFFICIAL_ABOUT_DETAILS.visionQuote}
                </blockquote>
              </div>
              <div className="mt-4 pt-3 border-t border-amber-100 text-xs text-amber-700 font-bold text-center">
                Lighting the Path of Hope · उज्वल भविष्य
              </div>
            </div>
          </div>

          {/* OFFICIAL SLOGAN RIBBON BANNER */}
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-950 p-4 sm:p-5 text-white shadow-lg border border-blue-700 text-center">
            <span className="text-base sm:text-xl md:text-2xl font-black tracking-wide text-white drop-shadow-sm">
              ★ Education (शिक्षण) ★ Healthcare (आरोग्य) ★ Social Welfare (समाजसेवा) ★
            </span>
          </div>
        </div>

        {/* ===================== SEAL & GUIDING PHILOSOPHY ===================== */}
        <div className="mb-24 bg-gradient-to-r from-amber-50 via-white to-red-50/40 rounded-3xl p-8 sm:p-10 border border-amber-200 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <div className="p-3 bg-white rounded-3xl shadow-xl border border-amber-300 transform hover:scale-105 transition-transform duration-300">
                <FoundationLogo className="w-48 h-48 sm:w-56 sm:h-56 drop-shadow-md" allowZoom={true} />
              </div>
            </div>
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-900 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-red-600" />
                <span>Official Foundation Seal &amp; Guiding Philosophy</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {foundationInfo.marathiName}
              </h3>
              <div className="p-4 bg-white/80 backdrop-blur-xs rounded-xl border border-amber-200 text-sm sm:text-base font-serif italic text-slate-800 font-semibold leading-relaxed shadow-xs">
                “{foundationInfo.officialMotto}”
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 pt-2 font-mono">
                <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                  <span className="text-slate-400 block text-[10px] uppercase font-sans font-bold">Registration Number</span>
                  <span className="font-bold text-slate-900">Reg No: F-0021881 (NSK)</span>
                </div>
                <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                  <span className="text-slate-400 block text-[10px] uppercase font-sans font-bold">Area of Operation</span>
                  <span className="font-bold text-slate-900">Nashik &amp; Maharashtra State (नाशिक व महाराष्ट्र)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== CORE VALUES ===================== */}
        <div className="mb-24">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold text-red-600 uppercase tracking-wider block">
              Ethical Foundation · आमची मूल्ये
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Our Core Guiding Values
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.id}
                className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-md hover:border-red-400 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-red-50 border border-red-200 flex items-center justify-center mb-4">
                  {getIcon(v.icon)}
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">{v.title}</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ===================== STATISTICS CARDS ===================== */}
        <div className="bg-gradient-to-r from-red-50/60 via-amber-50/40 to-slate-50 rounded-3xl p-8 sm:p-12 text-slate-900 border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold tracking-widest text-red-600 uppercase bg-red-100/70 px-3 py-1 rounded-md border border-red-200">
                Measuring Ground Realities · कार्य प्रगती
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-3">
                Our Impact at a Glance
              </h3>
              <p className="text-slate-600 text-sm mt-2">
                Every statistic reflects lives touched, smiles restored, and communities strengthened.
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="bg-white border border-slate-200 rounded-2xl p-6 text-center hover:border-red-400 hover:shadow-md transition-all shadow-xs"
                >
                  <div className="inline-flex p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 mb-3">
                    {getIcon(stat.icon)}
                  </div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-red-600 font-mono tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base font-bold text-slate-900 mt-2">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-600 mt-1 leading-snug">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
