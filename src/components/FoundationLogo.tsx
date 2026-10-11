import React, { useState } from 'react';
import { Maximize2, X, ShieldCheck } from 'lucide-react';
import officialLogoImg from '../assets/images/regenerated_image_1791550852906.jpg';

interface FoundationLogoProps {
  className?: string;
  alt?: string;
  bordered?: boolean;
  variant?: 'emblem' | 'seal' | 'natural' | string;
  allowZoom?: boolean;
}

/**
 * Official Foundation Seal & Logo component for:
 * कै.सौ. मनिषा सामाजिक व शैक्षणिक संस्था, नाशिक.
 * Reg No: F-0021881 (NSK) · नोंदणी क्र.नाशिक/००००२३९/२०२२
 * "The Goal is the Social and Educational Development of the last man in the society."
 * "तमसो मा ज्योतिर्गमय"
 */
export const FoundationLogo: React.FC<FoundationLogoProps> = ({
  className = 'w-12 h-12',
  alt = 'कै.सौ. मनिषा सामाजिक व शैक्षणिक संस्था, नाशिक - Official Logo',
  bordered = true,
  allowZoom = false,
}) => {
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  return (
    <>
      <div
        onClick={allowZoom ? () => setIsZoomOpen(true) : undefined}
        className={`relative inline-flex items-center justify-center shrink-0 rounded-full select-none overflow-hidden bg-white ${
          bordered ? 'ring-2 ring-amber-300 shadow-sm' : ''
        } ${allowZoom ? 'cursor-pointer hover:ring-2 hover:ring-red-500 transition-all group' : ''} ${className}`}
        style={{ aspectRatio: '1 / 1' }}
        title={allowZoom ? 'Click to inspect high-resolution official logo' : alt}
      >
        <img
          src={officialLogoImg}
          alt={alt}
          className="w-full h-full object-contain p-0.5 select-none transition-transform duration-300 group-hover:scale-105"
          loading="eager"
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src !== '/official-logo.jpg') {
              target.src = '/official-logo.jpg';
            }
          }}
        />

        {allowZoom && (
          <span className="absolute bottom-1 right-1 p-1 bg-white/95 rounded-full shadow-xs text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">
            <Maximize2 className="w-3 h-3 text-red-600" />
          </span>
        )}
      </div>

      {/* High-Resolution Seal Modal */}
      {isZoomOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md"
          onClick={() => setIsZoomOpen(false)}
        >
          <div
            className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-200 relative text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsZoomOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-red-600 uppercase tracking-wider mb-3">
              <ShieldCheck className="w-4 h-4 text-red-600" />
              <span>अधिकृत संस्था मुद्रा (Official Foundation Seal)</span>
            </div>
            
            <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto rounded-full p-2 bg-white border-4 border-amber-300 shadow-xl mb-4 flex items-center justify-center">
              <img
                src={officialLogoImg}
                alt={alt}
                className="w-full h-full object-contain"
              />
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-red-600">
              कै.सौ. मनिषा सामाजिक व शैक्षणिक संस्था, नाशिक.
            </h3>
            <p className="text-xs text-slate-700 font-bold mt-1">
              तमसो मा ज्योतिर्गमय
            </p>
            <p className="text-xs text-sky-800 italic font-semibold mt-2">
              “The Goal is the Social and Educational Development of the last man in the society.”
            </p>
            <div className="mt-4 pt-3 border-t border-slate-200 flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-slate-700">
              <span className="font-bold">Reg No: F-0021881 (NSK)</span>
              <span>·</span>
              <span className="font-bold">नोंदणी क्र.नाशिक/००००२३९/२०२२</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
