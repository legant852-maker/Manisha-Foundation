import React, { useState } from 'react';
import {
  FileText,
  Printer,
  Copy,
  Check,
  Maximize2,
  X,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Download,
  ExternalLink,
  ZoomIn,
  ZoomOut,
  RotateCcw,
} from 'lucide-react';
import { FoundationInfo } from '../types/foundation';
import { OFFICIAL_LETTERHEAD_INFO } from '../data/foundationData';
import kaiSauLetterheadImg from '../assets/images/kai_sau_letterhead_1791639028119.jpg';

interface OfficialLetterheadProps {
  foundationInfo?: FoundationInfo;
  className?: string;
}

export const OfficialLetterhead: React.FC<OfficialLetterheadProps> = ({
  className = '',
}) => {
  const [copied, setCopied] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleCopyCredentials = () => {
    const textToCopy = `
${OFFICIAL_LETTERHEAD_INFO.trustNameMarathi}
(${OFFICIAL_LETTERHEAD_INFO.trustNameEnglish})
नोंदणी क्र.: ${OFFICIAL_LETTERHEAD_INFO.regNo1}
Public Trust Reg: ${OFFICIAL_LETTERHEAD_INFO.regNo2}
पॅन क्र. (PAN): ${OFFICIAL_LETTERHEAD_INFO.panNumber}
80G URN: ${OFFICIAL_LETTERHEAD_INFO.approval80G_URN}
संस्थापक अध्यक्ष: श्री. ${OFFICIAL_LETTERHEAD_INFO.presidentName} (${OFFICIAL_LETTERHEAD_INFO.phone})
ई-मेल: ${OFFICIAL_LETTERHEAD_INFO.email}
कार्यालय: ${OFFICIAL_LETTERHEAD_INFO.fullAddress}
`.trim();

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={`space-y-4 ${className}`} id="official-letterhead-container">
      {/* Top Action Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-red-100 text-red-700 rounded-xl">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-sm sm:text-base font-extrabold text-slate-900">
                कै. सौ. अधिकृत लेटरहेड (kai.sau.pdf)
              </h4>
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider font-mono">
                Original Verified
              </span>
            </div>
            <p className="text-xs text-slate-600 mt-0.5">
              कै. सौ. मनिषाताई रमेशजी भालेराव बहुउद्देशीय सेवाभावी संस्था, नाशिक — अधिकृत मूळ लेटरहेड
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Download PDF button */}
          <a
            href="/kai.sau.pdf"
            download="kai.sau.pdf"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-red-700 hover:bg-red-800 text-white shadow-xs transition-all"
            title="Download original kai.sau.pdf document"
          >
            <Download className="w-3.5 h-3.5" />
            <span>kai.sau.pdf डाउनलोड</span>
          </a>

          {/* Download Image button */}
          <a
            href={kaiSauLetterheadImg}
            download="kai_sau_letterhead.jpg"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 transition-all"
            title="Download letterhead as image"
          >
            <Download className="w-3.5 h-3.5 text-slate-600" />
            <span>इमेज डाउनलोड</span>
          </a>

          {/* Copy credentials */}
          <button
            onClick={handleCopyCredentials}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 transition-all"
            title="Copy registration numbers and details"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">कॉपी झाले!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-500" />
                <span>तपशील कॉपी</span>
              </>
            )}
          </button>

          {/* Print */}
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 transition-all"
            title="Print this letterhead"
          >
            <Printer className="w-3.5 h-3.5 text-slate-500" />
            <span className="hidden sm:inline">प्रिंट</span>
          </button>

          {/* Fullscreen / Full view */}
          <button
            onClick={() => {
              setZoomLevel(1);
              setIsModalOpen(true);
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white shadow-xs transition-all"
            title="Open high resolution view"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>मोठ्या आकारात पहा</span>
          </button>
        </div>
      </div>

      {/* Main Authentic Letterhead Image Display ("as it is image") */}
      <div className="bg-slate-900/5 rounded-3xl border-2 border-red-800/30 p-3 sm:p-6 shadow-lg backdrop-blur-xs">
        <div className="relative group max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-slate-300 bg-white">
          <img
            src={kaiSauLetterheadImg}
            alt="कै. सौ. मनिषाताई रमेशजी भालेराव बहुउद्देशीय सेवाभावी संस्था अधिकृत लेटरहेड (kai.sau.pdf)"
            className="w-full h-auto object-contain cursor-zoom-in transition-transform duration-300 group-hover:scale-[1.01]"
            onClick={() => {
              setZoomLevel(1);
              setIsModalOpen(true);
            }}
          />

          {/* Floating Hover Badge */}
          <div className="absolute top-4 left-4 bg-red-700/90 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md backdrop-blur-xs flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-amber-300" />
            <span>अधिकृत लेटरहेड मूळ प्रत (kai.sau.pdf)</span>
          </div>

          {/* Bottom Overlay Hint */}
          <div
            onClick={() => {
              setZoomLevel(1);
              setIsModalOpen(true);
            }}
            className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-4 flex items-center justify-between text-white cursor-pointer opacity-90 group-hover:opacity-100 transition-opacity"
          >
            <div>
              <div className="text-xs sm:text-sm font-bold">
                कै. सौ. मनिषाताई रमेशजी भालेराव बहुउद्देशीय सेवाभावी संस्था, नाशिक
              </div>
              <div className="text-[11px] text-slate-300 font-mono">
                Trust Reg: F-0021881 (NSK) · Society Reg: Nashik/0000239/2022 · PAN: AAKAK3783F
              </div>
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-bold bg-white/20 hover:bg-white/30 px-3 py-1 rounded-lg backdrop-blur-xs">
              <Maximize2 className="w-3.5 h-3.5" />
              <span>विस्तारित पहा</span>
            </span>
          </div>
        </div>
      </div>

      {/* High-Resolution Fullscreen Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-slate-950/90 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-5xl my-auto animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between pb-3 text-white">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-amber-400" />
                <span className="font-bold text-sm sm:text-base">
                  कै. सौ. अधिकृत लेटरहेड मूळ प्रत (kai.sau.pdf)
                </span>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center gap-1 bg-white/10 rounded-lg p-1">
                  <button
                    onClick={() => setZoomLevel((z) => Math.min(z + 0.25, 2.5))}
                    className="p-1.5 hover:bg-white/20 rounded text-white"
                    title="Zoom in"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setZoomLevel((z) => Math.max(z - 0.25, 0.75))}
                    className="p-1.5 hover:bg-white/20 rounded text-white"
                    title="Zoom out"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setZoomLevel(1)}
                    className="p-1.5 hover:bg-white/20 rounded text-white"
                    title="Reset zoom"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>

                <a
                  href="/kai.sau.pdf"
                  download="kai.sau.pdf"
                  className="px-3 py-1.5 rounded-lg bg-red-700 hover:bg-red-800 text-white text-xs font-bold flex items-center gap-1.5 shadow"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>kai.sau.pdf</span>
                </a>

                <button
                  onClick={handlePrint}
                  className="px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white text-xs font-bold hidden sm:flex items-center gap-1.5"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>प्रिंट</span>
                </button>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1.5 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-colors"
                  title="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body with Zoomable Image */}
            <div className="bg-slate-900 rounded-2xl p-2 sm:p-4 overflow-auto max-h-[82vh] flex items-center justify-center border border-slate-700">
              <div
                style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top center' }}
                className="transition-transform duration-200"
              >
                <img
                  src={kaiSauLetterheadImg}
                  alt="कै. सौ. अधिकृत लेटरहेड (kai.sau.pdf)"
                  className="max-w-full h-auto rounded-lg shadow-2xl mx-auto"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-3 flex items-center justify-between text-xs text-slate-300">
              <span className="font-mono">
                Reg: F-0021881 · Nashik/0000239/2022 · PAN: AAKAK3783F · 80G Approved
              </span>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold"
              >
                बंद करा (Close)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
