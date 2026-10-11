import React, { useState } from 'react';
import {
  GraduationCap,
  Stethoscope,
  Flower2,
  TrendingUp,
  HelpingHand,
  Leaf,
  ArrowRight,
  X,
  CheckCircle2,
  Heart,
} from 'lucide-react';
import { WorkCategory } from '../types/foundation';

interface OurWorkSectionProps {
  workAreas: WorkCategory[];
  onOpenDonate: () => void;
}

export const OurWorkSection: React.FC<OurWorkSectionProps> = ({
  workAreas,
  onOpenDonate,
}) => {
  const [activeModalItem, setActiveModalItem] = useState<WorkCategory | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-red-600" />;
      case 'Stethoscope': return <Stethoscope className="w-6 h-6 text-red-600" />;
      case 'Flower2': return <Flower2 className="w-6 h-6 text-red-600" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-red-600" />;
      case 'HelpingHand': return <HelpingHand className="w-6 h-6 text-red-600" />;
      case 'Leaf': return <Leaf className="w-6 h-6 text-red-600" />;
      default: return <HelpingHand className="w-6 h-6 text-red-600" />;
    }
  };

  return (
    <section id="work-section" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 px-3.5 py-1.5 rounded-md border border-red-200">
            Our Initiatives · आमचे कार्य व प्रमुख उपक्रम
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Key Programs &amp; Community Causes
          </h2>
          <div className="mt-2 text-base font-bold text-red-700">
            गरजूंना थेट दिलासा देणारे शाश्वत सेवा प्रकल्प
          </div>
          <div className="mt-3 w-16 h-1 bg-red-600 mx-auto rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            From educational toolkits and free health screenings to women vocational workshops and environmental drives, our projects address systemic challenges for the last man in society.
          </p>
        </div>

        {/* Work Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workAreas.map((work) => (
            <div
              key={work.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-red-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Image */}
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute top-3 left-3 p-2.5 rounded-xl bg-white/95 backdrop-blur-md shadow-sm border border-slate-200">
                  {getIcon(work.icon)}
                </div>
                <div className="absolute bottom-2.5 right-3 text-xs font-semibold text-amber-300 font-mono">
                  {work.beneficiaries}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    {work.title}
                  </h3>
                  {work.marathiTitle && (
                    <p className="text-xs font-bold text-amber-700 mt-0.5">
                      {work.marathiTitle}
                    </p>
                  )}
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {work.shortDesc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setActiveModalItem(work)}
                    className="w-full inline-flex items-center justify-between text-xs font-bold text-slate-800 hover:text-red-600 transition-colors group/btn"
                  >
                    <span>Learn More (सविस्तर माहिती)</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover/btn:text-red-600 group-hover/btn:translate-x-1 transition-all" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Callout Banner */}
        <div className="mt-16 bg-gradient-to-r from-red-900 via-slate-900 to-slate-950 rounded-2xl p-8 sm:p-10 text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center lg:text-left">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
              Empower A Life Today · सहकार्याचा हात
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              Want to sponsor a student kit or coordinate a free medical camp?
            </h3>
            <p className="text-sm text-slate-300 max-w-2xl">
              Partner with Manisha Foundation to mobilize community volunteers, student supplies, and medical diagnosis camps.
              (आमच्यासोबत जोडून गरजूंपर्यंत थेट मदत पोहोचवा.)
            </p>
          </div>
          <button
            onClick={onOpenDonate}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-sm font-bold shadow-md transition-all transform hover:scale-105"
          >
            <Heart className="w-4 h-4 fill-slate-950" />
            <span>Support This Work (मदत करा)</span>
          </button>
        </div>
      </div>

      {/* Learn More Modal Dialog */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56 sm:h-64 bg-slate-100">
              <img
                src={activeModalItem.image}
                alt={activeModalItem.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/60 text-white hover:bg-slate-950 transition-colors"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-5 left-6 right-6 text-white">
                <span className="text-amber-400 text-xs font-bold uppercase tracking-wider block font-mono">
                  {activeModalItem.beneficiaries}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold mt-1">
                  {activeModalItem.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Program Scope &amp; Overview (प्रकल्पाचे स्वरूप)
                </h4>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {activeModalItem.fullDesc}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                  Key Action Highlights (प्रमुख वैशिष्ट्ये)
                </h4>
                <ul className="space-y-2.5">
                  {activeModalItem.highlights.map((point, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between gap-4">
              <button
                onClick={() => setActiveModalItem(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white border border-slate-300 rounded-lg"
              >
                Close (बंद करा)
              </button>
              <button
                onClick={() => {
                  setActiveModalItem(null);
                  onOpenDonate();
                }}
                className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-sm"
              >
                <Heart className="w-3.5 h-3.5 fill-white" />
                <span>Support This Cause · मदत करा</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
