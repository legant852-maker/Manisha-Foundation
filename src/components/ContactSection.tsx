import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Globe,
  Share2,
  MessageSquare,
  Loader2,
  AlertCircle,
} from 'lucide-react';
import { FoundationInfo } from '../types/foundation';
import { FORMSPREE_FORM_ENDPOINT } from '../data/foundationData';

interface ContactSectionProps {
  foundationInfo: FoundationInfo;
  onShowToast: (message: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  foundationInfo,
  onShowToast,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.message.trim()) {
      onShowToast('Please fill out all required fields. (कृपया आवश्यक माहिती भरा.)');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(FORMSPREE_FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          formType: 'Website Contact Message / संपर्क संदेश',
          name: formData.fullName,
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          subject: formData.subject,
          message: formData.message,
          _subject: `Manisha Foundation: Contact Message from ${formData.fullName} (${formData.subject})`,
        }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        onShowToast('Thank you! Your message has been sent to Manisha Foundation. (आपला संदेश पाठवला गेला आहे.)');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          subject: 'General Inquiry',
          message: '',
        });
      } else {
        const data = await response.json().catch(() => ({}));
        const errText =
          data?.errors?.map((err: { message?: string }) => err.message).filter(Boolean).join(', ') ||
          'Submission encountered an issue. Please try again.';
        setErrorMessage(errText);
        onShowToast(errText);
      }
    } catch {
      const fallbackError = 'Could not reach server. Please check internet connection or call 7798100216 directly.';
      setErrorMessage(fallbackError);
      onShowToast(fallbackError);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-section" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 px-3.5 py-1.5 rounded-md border border-red-200">
            Get In Touch · संपर्क साधा
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Contact Manisha Foundation
          </h2>
          <div className="mt-2 text-base font-bold text-red-700">
            संस्थेशी थेट संपर्क व मार्गदर्शन
          </div>
          <div className="mt-3 w-16 h-1 bg-red-600 mx-auto rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Have questions about volunteering, CSR partnerships, student kit donations, or free medical camps? Reach out to our dedicated team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 text-slate-800 space-y-6 shadow-sm border border-slate-200">
              <div>
                <h3 className="text-xl font-black text-red-600">
                  Contact Information · संपर्क
                </h3>
                <p className="text-xs text-slate-500 mt-0.5 font-semibold">
                  कै.सौ. मनिषा सामाजिक व शैक्षणिक संस्था, नाशिक.
                </p>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold">Official Mobile Number (संपर्क)</strong>
                    <a
                      href="tel:7798100216"
                      className="text-red-600 font-extrabold hover:underline block font-mono text-base"
                    >
                      7798100216
                    </a>
                    <span className="text-slate-500 text-xs block">
                      Founder President: Shri Sandip Madhukarrao Bhalerao (श्री. संदिप भालेराव)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold">Official Email (ईमेल)</strong>
                    <a
                      href={`mailto:${foundationInfo.email || 'manishafoundation26@gmail.com'}`}
                      className="text-slate-700 hover:text-red-600 transition-colors block font-mono"
                    >
                      {foundationInfo.email || 'manishafoundation26@gmail.com'}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-bold">Working Hours (कार्यालयीन वेळ)</strong>
                    <span className="text-slate-600 block">Mon - Sat: 9:00 AM - 7:00 PM (सोमवार ते शनिवार)</span>
                  </div>
                </div>
              </div>

              {/* Social Channels Strip */}
              <div className="pt-4 border-t border-slate-200">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  Follow Social Updates · सोशल मीडिया
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-100 hover:bg-red-600 hover:text-white text-slate-700 transition-colors"
                    aria-label="Facebook"
                  >
                    <Globe className="w-4 h-4" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-100 hover:bg-red-600 hover:text-white text-slate-700 transition-colors"
                    aria-label="Twitter"
                  >
                    <Share2 className="w-4 h-4" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-100 hover:bg-red-600 hover:text-white text-slate-700 transition-colors"
                    aria-label="Instagram"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Nashik Map Location Indicator */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
              <div className="p-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs text-slate-600">
                <span className="font-semibold flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-red-600" />
                  <span>Nashik, Maharashtra (नाशिक)</span>
                </span>
                <span className="text-[11px] font-mono text-slate-400">19.9975° N, 73.7898° E</span>
              </div>
              <div className="relative h-44 bg-slate-200 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="relative text-center p-4">
                  <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center mx-auto shadow-lg animate-bounce">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-800 text-sm mt-2">
                    Manisha Foundation
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Nashik, Maharashtra (नाशिक, महाराष्ट्र)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
            <div className="mb-8">
              <span className="text-xs font-bold text-red-600 uppercase tracking-wider block">
                Send Us A Message · संदेश पाठवा
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">
                We Would Love to Hear From You
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Fill out the form below and an official representative will respond within 24 hours. (खालील फॉर्म भरा, आमचे प्रतिनिधी २४ तासांत संपर्क करतील.)
              </p>
            </div>

            {submitSuccess && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <div className="font-bold">Message sent successfully! (संदेश पाठवला गेला आहे.)</div>
                  <div className="text-xs text-emerald-700 mt-0.5">
                    Thank you for reaching out. We have received your details via Formspree and will respond shortly.
                  </div>
                  <button
                    type="button"
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-2 text-xs font-semibold text-emerald-800 underline hover:text-emerald-900"
                  >
                    Send another message (दुसरा संदेश पाठवा)
                  </button>
                </div>
              </div>
            )}

            {errorMessage && (
              <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <div className="text-sm">
                  <div className="font-bold">Unable to send message</div>
                  <div className="text-xs text-rose-700 mt-0.5">{errorMessage}</div>
                </div>
              </div>
            )}

            <form
              action={FORMSPREE_FORM_ENDPOINT}
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input type="hidden" name="_subject" value={`Manisha Foundation: Contact Message from ${formData.fullName || 'Website Visitor'}`} />
              <input type="hidden" name="formType" value="Contact Form" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Full Name (नाव) *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500 text-slate-800 shadow-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address (ईमेल) *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500 text-slate-800 shadow-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Mobile Phone (मोबाईल)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 98XXXX XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500 text-slate-800 shadow-xs font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Subject / Topic (विषय)
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500 text-slate-800 shadow-xs"
                  >
                    <option value="General Inquiry">General Inquiry (सामान्य चौकशी)</option>
                    <option value="Volunteer Opportunities">Volunteer Opportunities (स्वयंसेवक सहभाग)</option>
                    <option value="Donation & Sponsorship">Donation & Sponsorship (देणगी व प्रायोजकत्व)</option>
                    <option value="Community Medical Camp Request">Medical Camp Request (आरोग्य शिबिर आयोजन)</option>
                    <option value="CSR & NGO Partnership">CSR & NGO Partnership (संस्थात्मक भागीदारी)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Your Message (आपला संदेश) *
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="How can Manisha Foundation help you, or how would you like to collaborate? (आपला संदेश येथे लिहा...)"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-red-500 text-slate-800 shadow-xs leading-relaxed"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white transition-all shadow-md transform hover:scale-[1.01] active:scale-[0.99]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 text-white animate-spin" />
                      <span>Sending message... (संदेश पाठवत आहे...)</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-white" />
                      <span>Send Message · संदेश पाठवा</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 pt-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Your contact details remain confidential and are never shared. (माहिती सुरक्षित ठेवली जाते.)</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
