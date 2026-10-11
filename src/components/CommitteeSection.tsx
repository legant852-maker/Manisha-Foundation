import React, { useState } from 'react';
import {
  Phone,
  Mail,
  Check,
  Copy,
  UserCheck,
} from 'lucide-react';
import { CommitteeMember } from '../types/foundation';

interface CommitteeSectionProps {
  members: CommitteeMember[];
  onShowToast: (message: string) => void;
}

export const CommitteeSection: React.FC<CommitteeSectionProps> = ({
  members,
  onShowToast,
}) => {
  const [copiedPhoneId, setCopiedPhoneId] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('ALL');

  const categories = ['ALL', 'Executive', 'Office Bearer', 'Coordinator', 'Advisory'];

  const filteredMembers =
    filterCategory === 'ALL'
      ? members
      : members.filter((m) => m.category === filterCategory);

  const handleCopyPhone = (id: string, phone: string, name: string) => {
    navigator.clipboard.writeText(phone);
    setCopiedPhoneId(id);
    onShowToast(`Phone number for ${name} copied: ${phone}`);
    setTimeout(() => setCopiedPhoneId(null), 2500);
  };

  return (
    <section id="committee-section" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 px-3.5 py-1.5 rounded-md border border-red-200">
            Leadership &amp; Governance · कार्यकारिणी मंडळ
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Committee Members &amp; Trustees
          </h2>
          <div className="mt-2 text-base font-bold text-red-700">
            संस्थेचे पदाधिकारी व मानद विश्वस्त मंडळ
          </div>
          <div className="mt-3 w-16 h-1 bg-red-600 mx-auto rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Meet the governing council and executive team steering the strategic vision, ethical transparency, and grassroots execution of Manisha Foundation in Nashik and beyond.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-slate-100 rounded-xl max-w-xl mx-auto mb-12 border border-slate-200">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
                filterCategory === cat
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              {cat === 'ALL'
                ? 'All Members (सर्व)'
                : cat === 'Executive'
                ? 'Executive (कार्यकारी)'
                : cat === 'Office Bearer'
                ? 'Office Bearers (पदाधिकारी)'
                : cat === 'Coordinator'
                ? 'Coordinators (समन्वयक)'
                : 'Advisory (सल्लागार)'}
            </button>
          ))}
        </div>

        {/* Committee Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-red-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Photo Area */}
              <div className="relative aspect-square overflow-hidden bg-slate-100">
                <img
                  src={member.photo}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="px-2.5 py-1 rounded-md bg-red-600 text-white text-[11px] font-bold uppercase tracking-wider inline-block shadow-sm">
                    {member.designation}
                  </span>
                </div>
              </div>

              {/* Member Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-red-600 transition-colors">
                    {member.name}
                  </h3>
                  {member.qualifications && (
                    <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                      {member.qualifications}
                    </p>
                  )}
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>
                </div>

                {/* Contact Strip */}
                <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-700 bg-slate-50 p-2 rounded-lg border border-slate-200">
                    <span className="flex items-center gap-1.5 text-slate-600 font-medium truncate">
                      <Phone className="w-3.5 h-3.5 text-red-600 shrink-0" />
                      <span className="truncate">{member.phone}</span>
                    </span>
                    <button
                      onClick={() => handleCopyPhone(member.id, member.phone, member.name)}
                      className="p-1 hover:text-red-600 transition-colors"
                      title="Copy phone number"
                    >
                      {copiedPhoneId === member.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                      )}
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <a
                      href={`tel:${member.phone.replace(/[^0-9+]/g, '')}`}
                      className="flex items-center justify-center gap-1 py-2 px-2.5 rounded-lg text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 transition-colors text-center"
                    >
                      <Phone className="w-3 h-3 text-amber-400" />
                      <span>Call (कॉल)</span>
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center justify-center gap-1 py-2 px-2.5 rounded-lg text-xs font-semibold bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors text-center"
                    >
                      <Mail className="w-3 h-3 text-slate-500" />
                      <span>Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Governance Transparency Notice */}
        <div className="mt-14 p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-3 text-left">
            <UserCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <p>
              All committee members serve honorarily on an uncompensated voluntary basis. (सर्व विश्वस्त व पदाधिकारी विनावेतन मानद तत्वावर समर्पित सेवा देतात.)
            </p>
          </div>
          <div className="text-slate-500 font-mono text-[11px] shrink-0 font-bold">
            Reg No: F-0021881 (NSK)
          </div>
        </div>
      </div>
    </section>
  );
};
