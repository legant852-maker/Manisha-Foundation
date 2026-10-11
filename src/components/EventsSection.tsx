import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  X,
  Heart,
  Loader2,
  AlertCircle,
} from 'lucide-react';
import { EventItem } from '../types/foundation';
import { FORMSPREE_FORM_ENDPOINT } from '../data/foundationData';

interface EventsSectionProps {
  events: EventItem[];
  onShowToast: (message: string) => void;
  onOpenDonate: () => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({
  events,
  onShowToast,
  onOpenDonate,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeModalEvent, setActiveModalEvent] = useState<EventItem | null>(null);
  const [registeringEvent, setRegisteringEvent] = useState<EventItem | null>(null);

  // Form State
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPhone, setRegPhone] = useState('');
  const [regCount, setRegCount] = useState('1');
  const [isSubmittingReg, setIsSubmittingReg] = useState(false);
  const [regError, setRegError] = useState<string | null>(null);

  const categories = [
    'ALL',
    'Upcoming Events',
    'Completed Events',
  ];

  const filteredEvents = events.filter((ev) => {
    if (selectedCategory === 'ALL') return true;
    if (selectedCategory === 'Upcoming Events') return ev.status === 'upcoming';
    if (selectedCategory === 'Completed Events') return ev.status === 'completed';
    return true;
  });

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setRegError(null);

    if (!regName.trim() || !regPhone.trim()) {
      onShowToast('Please provide your name and phone number. (नाव व फोन नंबर भरा.)');
      return;
    }

    setIsSubmittingReg(true);
    try {
      const response = await fetch(FORMSPREE_FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          formType: 'Event Registration / कार्यक्रम नोंदणी',
          name: regName,
          fullName: regName,
          phone: regPhone,
          email: regEmail || 'Not provided',
          attendeesCount: regCount,
          eventId: registeringEvent?.id,
          eventTitle: registeringEvent?.title,
          eventDate: registeringEvent?.date,
          eventVenue: registeringEvent?.venue,
          _subject: `Manisha Foundation: Event Registration for "${registeringEvent?.title}" by ${regName}`,
        }),
      });

      if (response.ok) {
        onShowToast(`Thank you! Registration confirmed for ${registeringEvent?.title}! (नोंदणी यशस्वी झाली.)`);
        setRegisteringEvent(null);
        setRegName('');
        setRegEmail('');
        setRegPhone('');
        setRegCount('1');
      } else {
        const data = await response.json().catch(() => ({}));
        const errText =
          data?.errors?.map((err: { message?: string }) => err.message).filter(Boolean).join(', ') ||
          'Registration submission failed. Please try again.';
        setRegError(errText);
        onShowToast(errText);
      }
    } catch {
      const fallbackError = 'Network error. Please try again or call 7798100216 directly.';
      setRegError(fallbackError);
      onShowToast(fallbackError);
    } finally {
      setIsSubmittingReg(false);
    }
  };

  return (
    <section id="events-section" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 px-3.5 py-1.5 rounded-md border border-red-200">
            Community Drives · कार्यक्रम व मेळावे
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Upcoming &amp; Completed Events
          </h2>
          <div className="mt-2 text-base font-bold text-red-700">
            शालेय साहित्य वाटप, आरोग्य शिबिरे व जनजागृती मोहिमा
          </div>
          <div className="mt-3 w-16 h-1 bg-red-600 mx-auto rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Join our upcoming awareness campaigns, back-to-school drives, free health screening camps, and volunteer meetups.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-white rounded-xl max-w-md mx-auto mb-12 border border-slate-200 shadow-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {cat === 'ALL'
                ? 'All Events (सर्व)'
                : cat === 'Upcoming Events'
                ? 'Upcoming (आगामी)'
                : 'Completed (संपन्न)'}
            </button>
          ))}
        </div>

        {/* Events Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-red-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Event Image */}
              <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                <img
                  src={event.image}
                  alt={event.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span
                    className={`px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider ${
                      event.status === 'upcoming'
                        ? 'bg-red-600 text-white'
                        : 'bg-slate-800/90 text-slate-200'
                    }`}
                  >
                    {event.status === 'upcoming' ? 'Upcoming · आगामी' : 'Completed · संपन्न'}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-mono flex items-center justify-between">
                  <span className="flex items-center gap-1 text-amber-300">
                    <Calendar className="w-3.5 h-3.5" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1 text-slate-300">
                    <Clock className="w-3.5 h-3.5" />
                    {event.time.split('ते')[0]}
                  </span>
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors leading-snug">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-2 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-red-600 shrink-0" />
                    <span className="truncate">{event.venue}</span>
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                    {event.shortDesc}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveModalEvent(event)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 hover:text-red-600 transition-colors"
                  >
                    <span>View Details (तपशील)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  {event.registrationOpen && (
                    <button
                      onClick={() => setRegisteringEvent(event)}
                      className="px-3.5 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-all shadow-xs"
                    >
                      RSVP / Register (नोंदणी)
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event Details Modal */}
      {activeModalEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveModalEvent(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6 animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-56 sm:h-64 bg-slate-100 shrink-0">
              <img
                src={activeModalEvent.image}
                alt={activeModalEvent.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
              <button
                onClick={() => setActiveModalEvent(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/60 text-white hover:bg-slate-950 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider bg-red-600 text-white inline-block mb-1">
                  {activeModalEvent.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold">
                  {activeModalEvent.title}
                </h3>
              </div>
            </div>

            <div className="p-6 space-y-5 overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="space-y-1.5">
                  <span className="text-slate-500 font-semibold uppercase block">Date &amp; Time (वेळ व दिनांक)</span>
                  <div className="flex items-center gap-1.5 font-bold text-slate-900">
                    <Calendar className="w-4 h-4 text-red-600" />
                    <span>{activeModalEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-600 font-mono">
                    <Clock className="w-4 h-4 text-red-600" />
                    <span>{activeModalEvent.time}</span>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <span className="text-slate-500 font-semibold uppercase block">Venue &amp; Location (स्थळ)</span>
                  <div className="flex items-start gap-1.5 font-semibold text-slate-900">
                    <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <span>{activeModalEvent.venue}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Event Briefing (कार्यक्रमाची रूपरेषा)
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {activeModalEvent.fullDesc}
                </p>
              </div>

              <div className="bg-amber-50/70 p-4 rounded-xl border border-amber-200 text-xs space-y-1.5">
                <span className="font-bold text-amber-900 uppercase block">Organizer Details (आयोजक)</span>
                <div className="flex flex-wrap items-center justify-between gap-2 text-slate-800">
                  <div>
                    <span className="font-medium text-slate-500">Wing:</span> {activeModalEvent.organizer}
                  </div>
                  <div>
                    <span className="font-medium text-slate-500">Contact:</span> {activeModalEvent.contactPerson} ({activeModalEvent.contactPhone})
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between gap-3 shrink-0">
              <button
                onClick={() => setActiveModalEvent(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white border border-slate-300 rounded-lg"
              >
                Close (बंद करा)
              </button>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setActiveModalEvent(null);
                    onOpenDonate();
                  }}
                  className="px-4 py-2 text-xs font-bold text-slate-800 bg-slate-200 hover:bg-slate-300 rounded-lg"
                >
                  Sponsor Supplies
                </button>
                {activeModalEvent.registrationOpen && (
                  <button
                    onClick={() => {
                      const ev = activeModalEvent;
                      setActiveModalEvent(null);
                      setRegisteringEvent(ev);
                    }}
                    className="px-5 py-2 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-sm"
                  >
                    RSVP to Attend
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* RSVP / Registration Modal */}
      {registeringEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setRegisteringEvent(null)}
        >
          <div
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-6 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-5 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider block">
                  Event Registration · कार्यक्रम नोंदणी
                </span>
                <h3 className="text-base font-bold text-white truncate max-w-xs">
                  {registeringEvent.title}
                </h3>
              </div>
              <button
                onClick={() => setRegisteringEvent(null)}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {regError && (
              <div className="mx-5 mt-4 p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>{regError}</span>
              </div>
            )}

            <form
              action={FORMSPREE_FORM_ENDPOINT}
              method="POST"
              onSubmit={handleRegisterSubmit}
              className="p-5 space-y-4"
            >
              <input
                type="hidden"
                name="_subject"
                value={`Manisha Foundation: Event Registration for "${registeringEvent.title}" by ${regName || 'Participant'}`}
              />
              <input type="hidden" name="formType" value="Event Registration" />
              <input type="hidden" name="eventId" value={registeringEvent.id} />
              <input type="hidden" name="eventTitle" value={registeringEvent.title} />
              <input type="hidden" name="eventDate" value={registeringEvent.date} />
              <input type="hidden" name="eventVenue" value={registeringEvent.venue} />

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name (पूर्ण नाव) *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={regName}
                  onChange={(e) => setRegName(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Phone Number (मोबाईल) *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+91 98XXXX XXXX"
                  value={regPhone}
                  onChange={(e) => setRegPhone(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Email Address (ईमेल)
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  value={regEmail}
                  onChange={(e) => setRegEmail(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Number of Attendees (उपस्थित व्यक्ती)
                </label>
                <select
                  name="attendeesCount"
                  value={regCount}
                  onChange={(e) => setRegCount(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none"
                >
                  <option value="1">1 Person (१ व्यक्ती)</option>
                  <option value="2">2 Persons (२ व्यक्ती)</option>
                  <option value="3">3 Persons (३ व्यक्ती)</option>
                  <option value="5">Group 5+ (गट ५+)</option>
                </select>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setRegisteringEvent(null)}
                  disabled={isSubmittingReg}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200 disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmittingReg}
                  className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-bold text-white bg-red-600 hover:bg-red-700 disabled:bg-red-400 rounded-lg shadow-sm transition-all"
                >
                  {isSubmittingReg ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <span>Confirm Registration</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
