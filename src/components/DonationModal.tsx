import React, { useState } from 'react';
import {
  X,
  Copy,
  Check,
  Share2,
  Heart,
  ShieldCheck,
  Building2,
  CreditCard,
  Send,
  MessageCircle,
  FileCheck2,
  Info,
} from 'lucide-react';
import { FoundationInfo } from '../types/foundation';
import { FoundationLogo } from './FoundationLogo';
import { OFFICIAL_LETTERHEAD_INFO } from '../data/foundationData';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  foundationInfo: FoundationInfo;
  onShowToast: (message: string) => void;
}

export const DonationModal: React.FC<DonationModalProps> = ({
  isOpen,
  onClose,
  foundationInfo,
  onShowToast,
}) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  if (!isOpen) return null;

  const accountNumber = '10116854493';
  const accountHolder = foundationInfo.donation.accountHolder || OFFICIAL_LETTERHEAD_INFO.trustNameEnglish;
  const bankName = foundationInfo.donation.bankName || 'State Bank of India';
  const accountType = foundationInfo.donation.accountType || 'Public Trust Current Account';
  const panNumber = OFFICIAL_LETTERHEAD_INFO.panNumber;
  const approval80G = OFFICIAL_LETTERHEAD_INFO.approval80G_URN;
  const phone = foundationInfo.phone || '7798100216';

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    onShowToast(`${label} copied to clipboard!`);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  const copyAllDetails = () => {
    const fullDetails = `🏛️ MANISHA FOUNDATION (कै.सौ. मनिषा संस्था, नाशिक)
Official Donation Bank Account Details:
----------------------------------------
• Account Number: ${accountNumber}
• Account Holder: ${accountHolder}
• Bank: ${bankName}
• Account Type: ${accountType}
• Trust Reg. No: Reg No: F-0021881 (NSK) / नाशिक/००००२३९/२०२२
• PAN Number: ${panNumber}
• 80G Approval URN: ${approval80G}
• Contact / WhatsApp: +91 ${phone}
• Email: manishafoundation26@gmail.com
----------------------------------------
(All donations are eligible for tax deduction under Section 80G)`;

    navigator.clipboard.writeText(fullDetails);
    setCopiedField('all');
    onShowToast('All bank account details copied to clipboard!');
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  const handleShare = async () => {
    const shareText = `Donate to Manisha Foundation (कै.सौ. मनिषा संस्था, नाशिक)\nAccount Number: ${accountNumber}\nAccount Name: ${accountHolder}\nBank: ${bankName}\nTrust Reg: F-0021881 (NSK)\nPAN: ${panNumber}\nWhatsApp: ${phone}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Manisha Foundation Donation Account Details',
          text: shareText,
          url: window.location.href,
        });
        onShowToast('Bank details shared successfully!');
      } catch {
        // User cancelled share
      }
    } else {
      navigator.clipboard.writeText(shareText);
      onShowToast('Donation details copied to clipboard!');
    }
  };

  const whatsappReceiptUrl = `https://wa.me/91${phone}?text=${encodeURIComponent(
    `नमस्ते, मी मनिषा फाउंडेशनच्या बँक खात्यावर (Account: ${accountNumber}) देणगी जमा केली आहे. कृपया देणगी पावती पाठवावी.`
  )}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="donation-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6 transition-all transform animate-modal-popup max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Card */}
        <div className="bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white p-5 sm:p-6 relative text-center shrink-0">
          <button
            onClick={onClose}
            aria-label="Close donation modal"
            className="absolute top-3.5 right-3.5 p-2 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-white"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-2xl shadow-lg p-2 mb-2.5">
            <FoundationLogo className="w-full h-full object-contain" />
          </div>

          <div className="flex items-center justify-center gap-1.5 text-red-100 text-xs font-bold tracking-wider uppercase mb-1">
            <Heart className="w-3.5 h-3.5 fill-red-200 text-red-200 animate-pulse" />
            <span>Support Our Cause · देणगी बँक खाते</span>
          </div>

          <h2
            id="donation-modal-title"
            className="text-xl sm:text-2xl font-black tracking-tight text-white leading-tight"
          >
            Manisha Foundation
          </h2>
          <p className="text-xs text-red-100 font-bold mt-0.5">
            {foundationInfo.marathiName}
          </p>
          <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-white/15 backdrop-blur-xs rounded-full text-[11px] text-white font-medium border border-white/20">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
            <span>Reg. No: F-0021881 (NSK) · नोंदणी क्र. नाशिक/००००२३९/२०२२</span>
          </div>
        </div>

        {/* Modal Main Body: Scrollable Bank Account Information */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4">
          {/* Main Account Number Hero Card */}
          <div className="relative p-5 rounded-2xl bg-gradient-to-br from-red-50 via-amber-50/40 to-slate-50 border-2 border-red-500/70 shadow-md">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-red-700">
                <CreditCard className="w-4 h-4 text-red-600" />
                <span>Foundation Account Number (खाते क्रमांक)</span>
              </span>
              <span className="text-[11px] font-bold px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full border border-emerald-200">
                Active & Verified
              </span>
            </div>

            {/* Account Number in Big Bold Readable Font */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1 pb-2">
              <div>
                <p className="text-xs text-slate-500 font-semibold mb-0.5">
                  संस्थेचा अधिकृत देणगी बँक खाते क्रमांक:
                </p>
                <p className="font-mono text-2xl sm:text-3xl font-black text-slate-900 tracking-wider select-all">
                  {accountNumber}
                </p>
              </div>

              <button
                onClick={() => copyToClipboard(accountNumber, 'Account Number')}
                className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all shadow-sm active:scale-95 ${
                  copiedField === 'Account Number'
                    ? 'bg-emerald-600 text-white'
                    : 'bg-red-600 hover:bg-red-700 text-white hover:shadow-md'
                }`}
              >
                {copiedField === 'Account Number' ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Copied! (कॉपी झाले)</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Account No.</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Detailed Bank Account Details Grid */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 space-y-3">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-red-600" />
              <span>Official Account Details (सविस्तर बँक तपशील)</span>
            </h3>

            {/* Account Holder Name */}
            <div className="flex items-start justify-between gap-2 p-2.5 bg-white rounded-xl border border-slate-200">
              <div className="min-w-0">
                <p className="text-[11px] font-bold text-slate-500 uppercase">
                  Account Name / खातेदाराचे नाव
                </p>
                <p className="text-xs sm:text-sm font-black text-slate-900 break-words">
                  {accountHolder}
                </p>
                <p className="text-[11px] font-semibold text-red-700 mt-0.5">
                  कै. सौ. मनिषा सामाजिक व शैक्षणिक संस्था
                </p>
              </div>
              <button
                onClick={() => copyToClipboard(accountHolder, 'Account Holder Name')}
                title="Copy Account Name"
                className="p-1.5 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors shrink-0"
              >
                {copiedField === 'Account Holder Name' ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Bank Name & Account Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                <p className="text-[11px] font-bold text-slate-500 uppercase">
                  Bank Name / बँक
                </p>
                <p className="text-xs sm:text-sm font-bold text-slate-900">
                  {bankName}
                </p>
                <p className="text-[11px] text-slate-500">Nashik Branch, Maharashtra</p>
              </div>

              <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                <p className="text-[11px] font-bold text-slate-500 uppercase">
                  Account Type / प्रकार
                </p>
                <p className="text-xs sm:text-sm font-bold text-slate-900">
                  {accountType}
                </p>
                <p className="text-[11px] text-slate-500">सार्वजनिक धर्मादाय ट्रस्ट खाते</p>
              </div>
            </div>

            {/* Trust PAN Card & 80G Approval */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-slate-200">
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase">
                    Trust PAN / पॅन क्रमांक
                  </p>
                  <p className="font-mono text-xs sm:text-sm font-black text-slate-900">
                    {panNumber}
                  </p>
                </div>
                <button
                  onClick={() => copyToClipboard(panNumber, 'PAN Number')}
                  title="Copy PAN"
                  className="p-1.5 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  {copiedField === 'PAN Number' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between p-2.5 bg-white rounded-xl border border-slate-200">
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase">
                    80G Approval URN
                  </p>
                  <p className="font-mono text-xs sm:text-sm font-black text-slate-900">
                    {approval80G}
                  </p>
                </div>
                <button
                  onClick={() => copyToClipboard(approval80G, '80G Approval URN')}
                  title="Copy 80G URN"
                  className="p-1.5 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  {copiedField === '80G Approval URN' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* How to Transfer Instruction */}
          <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 space-y-2">
            <div className="flex items-center gap-1.5 font-black text-amber-950">
              <Info className="w-4 h-4 text-amber-700 shrink-0" />
              <span>देणगी कशी पाठवावी? (How to Transfer):</span>
            </div>
            <ul className="space-y-1.5 text-[11px] leading-relaxed text-amber-900 pl-5 list-disc">
              <li>
                <strong>Net Banking / Mobile Banking:</strong> NEFT, RTGS किंवा IMPS द्वारे खात्यावर थेट देणगी पाठवू शकता. (Account: <span className="font-mono font-bold select-all">{accountNumber}</span>)
              </li>
              <li>
                <strong>UPI Apps (GPay, PhonePe, Paytm, BHIM, Cred):</strong> कोणत्याही UPI अ‍ॅपमध्ये <em>"To Bank Account / Transfer to Bank A/C"</em> पर्याय निवडून Account No. <strong>{accountNumber}</strong> टाकून थेट पेमेंट करू शकता.
              </li>
            </ul>
          </div>

          {/* 80G Tax Exemption Note & WhatsApp Receipt Action */}
          <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-start gap-2.5">
              <FileCheck2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-black text-emerald-900">
                  ८०जी कर सवलत पावती (80G Donation Receipt)
                </p>
                <p className="text-[11px] text-emerald-800 mt-0.5">
                  देणगी जमा केल्यानंतर स्क्रीनशॉट किंवा ट्रान्झॅक्शन आयडी व्हॉट्सअ‍ॅपवर पाठवून अधिकृत पावती मिळवा.
                </p>
              </div>
            </div>

            <a
              href={whatsappReceiptUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-xs shrink-0 text-center"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp करा</span>
            </a>
          </div>

          {/* Action Buttons: Copy All & Share */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              onClick={copyAllDetails}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-slate-300 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all active:scale-95 shadow-xs"
            >
              {copiedField === 'all' ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>सर्व तपशील कॉपी झाले!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-red-600" />
                  <span>Copy All Details</span>
                </>
              )}
            </button>

            <button
              onClick={handleShare}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-slate-300 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all active:scale-95 shadow-xs"
            >
              <Share2 className="w-4 h-4 text-red-600" />
              <span>Share Account Details</span>
            </button>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-5 py-3.5 border-t border-slate-200 flex items-center justify-between shrink-0">
          <span className="text-[11px] text-slate-600 font-medium">
            मनिषा फाउंडेशनला सहकार्य केल्याबद्दल धन्यवाद
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-xs active:scale-95"
          >
            Done · बंद करा
          </button>
        </div>
      </div>
    </div>
  );
};
