import React, { useState } from 'react';
import {
  Image as ImageIcon,
  Calendar,
  X,
  Maximize2,
  MapPin,
} from 'lucide-react';
import { PhotoItem, EventItem } from '../types/foundation';

interface GallerySectionProps {
  photos: PhotoItem[];
  events: EventItem[];
}

type GalleryFilter = 'ALL' | 'PHOTOS' | 'EVENTS';

interface UnifiedMediaItem {
  id: string;
  type: 'photo' | 'event';
  title: string;
  category: string;
  date: string;
  image: string;
  location?: string;
  description: string;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  photos,
  events,
}) => {
  const [filter, setFilter] = useState<GalleryFilter>('ALL');
  const [selectedItem, setSelectedItem] = useState<UnifiedMediaItem | null>(null);

  const unifiedItems: UnifiedMediaItem[] = [
    ...photos.map((p) => ({
      id: `p-${p.id}`,
      type: 'photo' as const,
      title: p.title,
      category: p.category,
      date: p.date,
      image: p.url,
      location: p.location,
      description: p.caption,
    })),
    ...events.map((e) => ({
      id: `e-${e.id}`,
      type: 'event' as const,
      title: e.title,
      category: e.category,
      date: e.date,
      image: e.image,
      location: e.venue,
      description: e.shortDesc,
    })),
  ];

  const filteredItems = unifiedItems.filter((item) => {
    if (filter === 'ALL') return true;
    if (filter === 'PHOTOS') return item.type === 'photo';
    if (filter === 'EVENTS') return item.type === 'event';
    return true;
  });

  return (
    <section id="gallery-section" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 px-3.5 py-1.5 rounded-md border border-red-200">
            माध्यम केंद्र (Photo &amp; Activity Gallery)
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            सर्वसमावेशक छायाचित्र गॅलरी
          </h2>
          <div className="mt-3 w-16 h-1 bg-red-600 mx-auto rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            संस्थेची प्रत्यक्ष समाजकार्य छायाचित्रे आणि सामाजिक उपक्रमांचे एकत्र दृश्य संकलन.
          </p>
        </div>

        {/* Filter Segmented Control */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-white rounded-xl max-w-md mx-auto mb-12 border border-slate-200 shadow-xs">
          {(['ALL', 'PHOTOS', 'EVENTS'] as GalleryFilter[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                filter === tab
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {tab === 'ALL'
                ? 'सर्व (All)'
                : tab === 'PHOTOS'
                ? 'छायाचित्रे (Photos)'
                : 'कार्यक्रम (Events)'}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-red-400 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold flex items-center gap-1.5 border border-white/10">
                  {item.type === 'photo' && <ImageIcon className="w-3.5 h-3.5 text-amber-400" />}
                  {item.type === 'event' && <Calendar className="w-3.5 h-3.5 text-amber-400" />}
                  <span className="capitalize">{item.type}</span>
                </div>
                {item.location && (
                  <div className="absolute bottom-2.5 left-3 text-[11px] text-slate-300 flex items-center gap-1 truncate max-w-[80%]">
                    <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </div>
                )}
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[11px] text-red-600 font-mono mb-1 font-semibold">
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-red-600 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-red-600">
                  <span>सविस्तर पहा</span>
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider block">
                  {selectedItem.date}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white truncate max-w-xl">
                  {selectedItem.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-black relative aspect-video flex items-center justify-center">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-5 sm:p-6 space-y-2 bg-white">
              {selectedItem.location && (
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-red-600" />
                  <span>{selectedItem.location}</span>
                </div>
              )}
              <p className="text-sm text-slate-700 leading-relaxed pt-1">
                {selectedItem.description}
              </p>
            </div>

            <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setSelectedItem(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100"
              >
                बंद करा
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
