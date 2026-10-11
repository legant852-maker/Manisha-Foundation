import React, { useState, useEffect } from 'react';
import {
  ArrowUp,
  ChevronRight,
  ArrowLeft,
  Calendar,
  Image as ImageIcon,
} from 'lucide-react';
import { ActiveTab, PhotoItem } from './types/foundation';
import {
  INITIAL_FOUNDATION_INFO,
  INITIAL_STATS,
  INITIAL_VALUES,
  INITIAL_WORK_AREAS,
  INITIAL_PHOTOS,
  INITIAL_EVENTS,
} from './data/foundationData';

// Components
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { OurWorkSection } from './components/OurWorkSection';
import { PhotosSection } from './components/PhotosSection';
import { GallerySection } from './components/GallerySection';
import { VideosSection } from './components/VideosSection';
import { EventsSection } from './components/EventsSection';
import { ContactSection } from './components/ContactSection';
import { DonationModal } from './components/DonationModal';
import { DonationCtaBanner } from './components/DonationCtaBanner';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';

export default function App() {
  const [foundationInfo] = useState(INITIAL_FOUNDATION_INFO);
  const [stats] = useState(INITIAL_STATS);
  const [values] = useState(INITIAL_VALUES);
  const [workAreas] = useState(INITIAL_WORK_AREAS);
  const [events] = useState(INITIAL_EVENTS);

  // Managed Photos state with localStorage persistence
  const [photos] = useState<PhotoItem[]>(INITIAL_PHOTOS);

  // Navigation State
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [isDonationOpen, setIsDonationOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTabChange = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-red-100 selection:text-red-900 font-sans">
      {/* 1. STICKY NAVIGATION BAR */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={handleTabChange}
        onOpenDonation={() => setIsDonationOpen(true)}
        foundationInfo={foundationInfo}
      />

      {/* DEDICATED VIEW SUB-HEADER */}
      {activeTab !== 'home' && (
        <div className="bg-slate-100 text-slate-900 py-8 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-1.5">
                <button
                  onClick={() => handleTabChange('home')}
                  className="hover:text-red-600 transition-colors font-semibold"
                >
                  Home (मुख्यपृष्ठ)
                </button>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-red-600 font-bold uppercase tracking-wider">
                  {activeTab === 'about' && 'About Us (आमच्याबद्दल)'}
                  {activeTab === 'work' && 'Our Work (कार्य व उपक्रम)'}
                  {activeTab === 'photos' && 'Photo Gallery (छायाचित्रे)'}
                  {activeTab === 'gallery' && 'Integrated Media Hub (गॅलरी)'}
                  {activeTab === 'events' && 'Events & Programs (कार्यक्रम)'}
                  {activeTab === 'contact' && 'Contact Us (संपर्क)'}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900">
                {activeTab === 'about' && 'About Manisha Foundation (आमच्याविषयी)'}
                {activeTab === 'work' && 'Our Key Initiatives & Programs (प्रमुख सेवा प्रकल्प)'}
                {activeTab === 'photos' && 'Field Photographs & Visual Archive (छायाचित्रे)'}
                {activeTab === 'gallery' && 'Complete Photo Gallery (एकात्मिक गॅलरी)'}
                {activeTab === 'events' && 'Events, Programs & Drives (आगामी व संपन्न कार्यक्रम)'}
                {activeTab === 'contact' && 'Contact & Office Information (कार्यालयीन संपर्क)'}
              </h1>
            </div>
            <button
              onClick={() => handleTabChange('home')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 rounded-lg self-start sm:self-center transition-colors border border-slate-300 shadow-2xs"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-red-600" />
              <span>मुख्यपृष्ठावर परत जा (Back to Home)</span>
            </button>
          </div>
        </div>
      )}

      {/* MAIN VIEW CONTENT AREA */}
      <main className="flex-1">
        {activeTab === 'home' ? (
          <>
            {/* HERO */}
            <Hero
              foundationInfo={foundationInfo}
              onExploreWork={() => {
                const el = document.getElementById('work-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onDonateNow={() => setIsDonationOpen(true)}
              onOpenAbout={() => {
                const el = document.getElementById('about-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* ABOUT US + MISSION / VISION + IMPACT STATS */}
            <AboutSection
              foundationInfo={foundationInfo}
              stats={stats}
              values={values}
              onOpenDonate={() => setIsDonationOpen(true)}
            />

            {/* OUR WORK */}
            <OurWorkSection
              workAreas={workAreas}
              onOpenDonate={() => setIsDonationOpen(true)}
            />

            {/* UPCOMING EVENTS PREVIEW ON HOMEPAGE */}
            <section className="py-20 bg-slate-100/70 border-y border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-100 px-3.5 py-1.5 rounded-md border border-red-200">
                      आगामी मेळावे व शिबिरे
                    </span>
                    <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                      Upcoming Events &amp; Programs
                    </h2>
                    <p className="mt-1 text-sm text-slate-600 max-w-xl">
                      शालेय साहित्य वाटप, मोफत आरोग्य शिबिरे आणि वृक्षारोपण मोहिमेत सहभागी व्हा.
                    </p>
                  </div>
                  <button
                    onClick={() => handleTabChange('events')}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shrink-0 self-start md:self-auto"
                  >
                    <span>सर्व कार्यक्रम पहा व नोंदणी करा</span>
                    <ChevronRight className="w-4 h-4 text-amber-400" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {events.slice(0, 3).map((ev) => (
                    <div
                      key={ev.id}
                      className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-lg transition-all group flex flex-col justify-between"
                    >
                      <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                        <img
                          src={ev.image}
                          alt={ev.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-red-600 text-white">
                            {ev.status === 'upcoming' ? 'आगामी' : 'संपन्न'}
                          </span>
                        </div>
                        <div className="absolute bottom-2.5 left-3 text-xs text-white font-mono flex items-center gap-1 bg-black/60 px-2 py-0.5 rounded-md backdrop-blur-xs">
                          <Calendar className="w-3 h-3 text-amber-400" />
                          <span>{ev.date}</span>
                        </div>
                      </div>
                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-base font-bold text-slate-900 group-hover:text-red-600 transition-colors line-clamp-1">
                            {ev.title}
                          </h3>
                          <p className="text-xs text-slate-500 font-medium mt-1 truncate">
                            {ev.venue}
                          </p>
                          <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                            {ev.shortDesc}
                          </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                          <button
                            onClick={() => handleTabChange('events')}
                            className="text-red-600 hover:text-red-700 font-bold flex items-center gap-1"
                          >
                            <span>सविस्तर वाचा</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-slate-400 text-[11px]">
                            {ev.expectedAttendees}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* PHOTO GALLERY PREVIEW */}
            <section className="py-20 bg-white border-b border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 px-3.5 py-1.5 rounded-md border border-red-200">
                      छायाचित्र संकलन
                    </span>
                    <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                      Photo Gallery Preview
                    </h2>
                    <p className="mt-1 text-sm text-slate-600 max-w-xl">
                      शालेय साहित्य वाटप, आरोग्य शिबिरे व स्वयंसेवकांच्या सेवाकार्याची दृश्ये.
                    </p>
                  </div>
                  <button
                    onClick={() => handleTabChange('photos')}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shrink-0 self-start md:self-auto"
                  >
                    <ImageIcon className="w-4 h-4 text-amber-400" />
                    <span>संपूर्ण फोटो गॅलरी उघडा</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {photos.slice(0, 6).map((photo) => (
                    <div
                      key={photo.id}
                      onClick={() => handleTabChange('photos')}
                      className="group relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xs hover:shadow-lg transition-all cursor-pointer aspect-4/3"
                    >
                      <img
                        src={photo.url}
                        alt={photo.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                      <div className="absolute bottom-3 inset-x-3 text-white">
                        <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider block">
                          {photo.date}
                        </span>
                        <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors truncate mt-0.5">
                          {photo.title}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* VIDEOS SECTION (GOOGLE DRIVE REDIRECT) */}
            <VideosSection
              onOpenDonate={() => setIsDonationOpen(true)}
              isEmbedPreview={true}
            />

            {/* DONATION CTA BANNER */}
            <DonationCtaBanner
              foundationInfo={foundationInfo}
              onOpenDonation={() => setIsDonationOpen(true)}
            />

            {/* CONTACT */}
            <ContactSection
              foundationInfo={foundationInfo}
              onShowToast={showToast}
            />
          </>
        ) : (
          <>
            {activeTab === 'about' && (
              <AboutSection
                foundationInfo={foundationInfo}
                stats={stats}
                values={values}
                onOpenDonate={() => setIsDonationOpen(true)}
              />
            )}
            {activeTab === 'work' && (
              <OurWorkSection
                workAreas={workAreas}
                onOpenDonate={() => setIsDonationOpen(true)}
              />
            )}
            {activeTab === 'photos' && <PhotosSection photos={photos} />}
            {activeTab === 'gallery' && (
              <GallerySection photos={photos} events={events} />
            )}
            {activeTab === 'videos' && (
              <VideosSection
                onOpenDonate={() => setIsDonationOpen(true)}
                isEmbedPreview={false}
              />
            )}
            {activeTab === 'events' && (
              <EventsSection
                events={events}
                onShowToast={showToast}
                onOpenDonate={() => setIsDonationOpen(true)}
              />
            )}
            {activeTab === 'contact' && (
              <ContactSection
                foundationInfo={foundationInfo}
                onShowToast={showToast}
              />
            )}
            <DonationCtaBanner
              foundationInfo={foundationInfo}
              onOpenDonation={() => setIsDonationOpen(true)}
            />
          </>
        )}
      </main>

      {/* FOOTER */}
      <Footer
        foundationInfo={foundationInfo}
        onSelectTab={handleTabChange}
        onOpenDonate={() => setIsDonationOpen(true)}
        onScrollToTop={handleScrollToTop}
      />

      {/* DONATION MODAL */}
      <DonationModal
        isOpen={isDonationOpen}
        onClose={() => setIsDonationOpen(false)}
        foundationInfo={foundationInfo}
        onShowToast={showToast}
      />

      {/* TOAST NOTIFICATION */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

      {/* SCROLL TO TOP */}
      {showScrollTop && (
        <button
          onClick={handleScrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-white text-red-600 hover:bg-red-50 hover:text-red-700 shadow-xl border border-slate-300 transition-all hover:scale-110 active:scale-95"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
