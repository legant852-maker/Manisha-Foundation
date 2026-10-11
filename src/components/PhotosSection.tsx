import React, { useState, useEffect } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  Maximize2,
} from 'lucide-react';
import { PhotoItem } from '../types/foundation';

interface PhotosSectionProps {
  photos: PhotoItem[];
}

export const PhotosSection: React.FC<PhotosSectionProps> = ({ photos }) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    'ALL',
    'School Programs',
    'Community Work',
    'Social Activities',
    'Events',
    'Awareness Programs',
    'Volunteers',
    'Foundation Activities',
  ];

  const filteredPhotos =
    activeCategory === 'ALL'
      ? photos
      : photos.filter((p) => p.category === activeCategory);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredPhotos.length]);

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : filteredPhotos.length - 1));
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! < filteredPhotos.length - 1 ? prev! + 1 : 0));
  };

  const currentPhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  return (
    <section id="photos-section" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 px-3.5 py-1.5 rounded-md border border-red-200">
            छायाचित्रे व आठवणी (Photo Gallery)
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            संस्थेच्या सेवाकार्याची क्षणचित्रे
          </h2>
          <div className="mt-3 w-16 h-1 bg-red-600 mx-auto rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            शालेय साहित्य वाटप, आरोग्य शिबिरे, महिला मेळावे आणि वृक्षारोपण मोहिमांची प्रत्यक्षातील छायाचित्रे.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-slate-100 rounded-xl max-w-4xl mx-auto mb-12 border border-slate-200">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setLightboxIndex(null);
              }}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-all ${
                activeCategory === cat
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              {cat === 'ALL'
                ? 'सर्व छायाचित्रे (All)'
                : cat === 'School Programs'
                ? 'शालेय उपक्रम (School Programs)'
                : cat === 'Community Work'
                ? 'समाजकार्य'
                : cat === 'Social Activities'
                ? 'सामाजिक उपक्रम'
                : cat === 'Events'
                ? 'कार्यक्रम'
                : cat === 'Awareness Programs'
                ? 'जनजागृती शिबिरे'
                : cat === 'Volunteers'
                ? 'कार्यकर्ते व स्वयंसेवक'
                : 'संस्था उपक्रम'}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => setLightboxIndex(idx)}
              className="group relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer aspect-4/3"
            >
              <img
                src={photo.url}
                alt={photo.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
              <div className="absolute top-3 right-3 p-2 rounded-xl bg-black/40 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>
              <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                <div className="flex items-center gap-2 text-[11px] text-amber-400 font-mono">
                  <span>{photo.date}</span>
                </div>
                <h3 className="text-base font-bold text-white mt-1 leading-snug group-hover:text-amber-300 transition-colors">
                  {photo.title}
                </h3>
                <div className="flex items-center gap-1 text-xs text-slate-300 mt-1.5">
                  <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                  <span className="truncate">{photo.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-md p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxIndex(null)}
        >
          <div className="absolute top-4 inset-x-4 sm:inset-x-6 flex items-center justify-between text-white z-10">
            <div className="text-xs font-mono text-slate-300">
              फोटो {lightboxIndex! + 1} / {filteredPhotos.length}
            </div>
            <button
              onClick={() => setLightboxIndex(null)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-10"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors z-10"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentPhoto.url}
              alt={currentPhoto.title}
              className="max-h-[65vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
            />
            <div className="mt-4 text-center max-w-2xl px-4">
              <div className="flex items-center justify-center gap-2 text-xs text-amber-400 font-mono mb-1">
                <span>{currentPhoto.date}</span>
                <span>·</span>
                <span>{currentPhoto.location}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {currentPhoto.title}
              </h3>
              <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                {currentPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
