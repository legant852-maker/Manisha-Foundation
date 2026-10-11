import React, { useState } from 'react';
import { Heart, Building2, CreditCard, ShieldCheck, Copy, Check } from 'lucide-react';
import { FoundationInfo } from '../types/foundation';

interface DonationCtaBannerProps {
  foundationInfo: FoundationInfo;
  onOpenDonation: () => void;
}

export const DonationCtaBanner: React.FC<DonationCtaBannerProps> = ({
  foundationInfo,
  onOpenDonation,
}) => {
  const [copied, setCopied] = useState(false);
  const accountNumber = '10116854493';

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-red-50/70 via-white to-amber-50/70 border-y border-red-200 text-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-red-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
          <Heart className="w-3.5 h-3.5 fill-red-600 text-red-600" />
          <span>Make a Difference · शेवटच्या घटकासाठी मदतीचा हात</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight max-w-3xl mx-auto">
          Every Single Contribution Brings Hope to the Last Man in Society
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          From educational aid and student kits to emergency medical support and winter relief, your contribution directly empowers needy families.
          <span className="block mt-1 text-slate-800 font-medium">
            (आपली छोटीशी मदत, एका गरजू कुटुंबाचा मोठा आधार ठरते.)
          </span>
        </p>

        {/* Foundation Bank Account Highlight Box */}
        <div className="mt-8 max-w-xl mx-auto bg-white/90 backdrop-blur-xs rounded-2xl border-2 border-red-500/50 p-4 sm:p-5 shadow-lg">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-red-700 uppercase tracking-wider">
                <Building2 className="w-4 h-4 text-red-600" />
                <span>Foundation Bank Account (देणगी बँक खाते)</span>
              </div>
              <p className="mt-1 font-mono text-2xl font-black text-slate-900 tracking-wider">
                {accountNumber}
              </p>
              <p className="text-[11px] text-slate-600 font-medium">
                {foundationInfo.donation.accountHolder} · SBI
              </p>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={handleCopy}
                className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-xs ${
                  copied
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300'
                }`}
                title="Copy Account Number"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy A/C No.</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={onOpenDonation}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-red-600 hover:bg-red-700 transition-all transform hover:scale-[1.02] shadow-md shadow-red-600/20 active:scale-95"
              >
                <CreditCard className="w-4 h-4 text-white" />
                <span>बँक तपशील पहा</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Public Trust Reg. F-0021881 (NSK)</span>
          </div>
          <span className="hidden sm:inline text-slate-300">•</span>
          <span>Official 80G tax deduction receipt issued for all contributions</span>
        </div>
      </div>
    </section>
  );
};
