import React from 'react';
import {
  Play,
  ExternalLink,
  Film,
  FolderOpen,
  Calendar,
  Sparkles,
  ShieldCheck,
  Video,
  ArrowRight,
  HardDrive,
  Eye,
} from 'lucide-react';
import {
  FOUNDATION_DRIVE_VIDEOS_URL,
  FOUNDATION_VIDEOS_LIST,
  VideoItemInfo,
} from '../data/foundationData';

interface VideosSectionProps {
  onOpenDonate?: () => void;
  isEmbedPreview?: boolean;
}

export const VideosSection: React.FC<VideosSectionProps> = ({
  onOpenDonate,
  isEmbedPreview = false,
}) => {
  const videos: VideoItemInfo[] = FOUNDATION_VIDEOS_LIST;

  const handleOpenDrive = (specificNote?: string) => {
    // Open the Google Drive folder in a new tab
    window.open(FOUNDATION_DRIVE_VIDEOS_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`w-full ${isEmbedPreview ? 'py-16' : 'py-12 sm:py-16'} bg-slate-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-100 text-red-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Film className="w-3.5 h-3.5" />
              <span>व्हिडिओ संकलन · Videos Collection</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Foundation Video Library
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              कै.सौ. मनिषा सामाजिक व शैक्षणिक संस्थेच्या प्रत्यक्ष उपक्रम, आरोग्य शिबिरे व समाजोपयोगी
              कामांचे अधिकृत व्हिडिओ. सर्व व्हिडिओ पाहण्यासाठी खालील लिंकवरून थेट गुगल ड्राइव्ह (Google Drive) वर पुनर्निर्देशित केले जाईल.
            </p>
          </div>

          {/* Master Google Drive Button */}
          <div className="shrink-0">
            <a
              href={FOUNDATION_DRIVE_VIDEOS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <FolderOpen className="w-4 h-4" />
              <span>गुगल ड्राइव्ह वर व्हिडिओ पहा (Google Drive)</span>
              <ExternalLink className="w-4 h-4 opacity-80" />
            </a>
          </div>
        </div>

        {/* Highlight Banner / Drive Access Callout */}
        <div className="mb-10 bg-linear-to-r from-red-700 via-rose-700 to-amber-700 rounded-2xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-8 translate-y-8">
            <Film className="w-64 h-64 text-white" />
          </div>

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-xs text-xs font-semibold mb-3">
              <HardDrive className="w-3.5 h-3.5 text-amber-300" />
              <span>Google Drive Cloud Folder Archive</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black mb-2">
              संस्थेच्या सर्व अधिकृत व्हिडिओंची मूळ प्रत (Full HD Drive Storage)
            </h3>
            <p className="text-sm text-red-50 leading-relaxed mb-5">
              संस्थेच्या विविध सेवाभावी मोहिमांचे संपूर्ण व्हिडिओ, भाषणे आणि कार्यक्रमांचे चित्रीकरण गुगल ड्राइव्हवर सुरक्षितपणे संग्रहित केलेले आहे. कोणत्याही व्हिडिओ कार्डवर क्लिक केल्यास थेट मूळ ड्राइव्ह फोल्डर उघडेल.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={FOUNDATION_DRIVE_VIDEOS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-red-700 hover:bg-red-50 font-bold text-xs sm:text-sm shadow-xs transition-colors"
              >
                <Play className="w-4 h-4 fill-red-700" />
                <span>ड्राइव्ह फोल्डर उघडा (Open Drive Folder)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <span className="text-xs text-white/80 font-mono flex items-center gap-1.5 px-3 py-2 bg-black/20 rounded-lg">
                <FolderOpen className="w-3.5 h-3.5 text-amber-300" />
                1nfiferKO9V41LbJF7V92NyiWz44FUTmD
              </span>
            </div>
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((vid, idx) => (
            <div
              key={vid.id}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Video Thumbnail Placeholder with Play Overlay */}
                <div className="relative aspect-video bg-gradient-to-br from-slate-900 via-slate-800 to-red-950 overflow-hidden flex items-center justify-center p-4">
                  {/* Backdrop Pattern */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

                  {/* Gradient Film Badge */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-black/70 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md border border-white/10">
                    <Video className="w-3 h-3 text-red-400" />
                    <span>{vid.badge}</span>
                  </div>

                  <div className="absolute top-3 right-3 z-10 bg-red-600 text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded shadow-xs font-mono">
                    VIDEO #{idx + 1}
                  </div>

                  {/* Center Interactive Play Button */}
                  <a
                    href={FOUNDATION_DRIVE_VIDEOS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 w-14 h-14 rounded-full bg-red-600/90 hover:bg-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200 ring-4 ring-white/20"
                    title="Watch video on Google Drive"
                    aria-label={`Play ${vid.title} on Google Drive`}
                  >
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </a>

                  {/* Bottom Meta */}
                  <div className="absolute bottom-2.5 left-3 right-3 z-10 flex items-center justify-between text-[11px] text-white/90">
                    <span className="truncate bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs font-medium">
                      {vid.category}
                    </span>
                    <span className="bg-red-700/80 px-2 py-0.5 rounded font-mono font-bold">
                      Google Drive
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5">
                  <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500 mb-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{vid.date}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-red-600 transition-colors line-clamp-1">
                    {vid.marathiTitle}
                  </h3>
                  <h4 className="text-xs font-semibold text-slate-600 line-clamp-1 mt-0.5">
                    {vid.title}
                  </h4>

                  <p className="text-xs text-slate-600 mt-2.5 line-clamp-3 leading-relaxed">
                    {vid.description}
                  </p>
                </div>
              </div>

              {/* Card Footer with Direct Drive Action */}
              <div className="p-5 pt-0">
                <a
                  href={FOUNDATION_DRIVE_VIDEOS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-red-600 text-slate-700 hover:text-white font-bold text-xs transition-colors border border-slate-200 hover:border-red-600 group-hover:shadow-xs"
                >
                  <FolderOpen className="w-3.5 h-3.5" />
                  <span>ड्राइव्हवर हा व्हिडिओ पहा (Watch Video)</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Support Info */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>अधिकृत व्हिडिओ व डिजिटल साहित्य (Official Drive Repository)</span>
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              सर्व व्हिडिओ गुगल ड्राइव्हवर सुरक्षितपणे संग्रहित असून कोणत्याही संगणक किंवा मोबाईलवर सहज पाहता येतात.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={FOUNDATION_DRIVE_VIDEOS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600 text-white font-bold text-xs hover:bg-red-700 shadow-xs transition-colors"
            >
              <span>सर्व व्हिडिओ पहा (Open Drive)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
