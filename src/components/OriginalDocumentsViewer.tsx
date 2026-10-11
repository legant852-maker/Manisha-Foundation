import React, { useState } from 'react';
import {
  FileText,
  ShieldCheck,
  Building,
  Award,
  Maximize2,
  Printer,
  Copy,
  Check,
  ExternalLink,
  X,
  Download,
  Info,
  CheckCircle2,
  FileCheck,
  Eye,
  CreditCard,
  Building2,
  Search,
  ZoomIn,
  ZoomOut,
  RotateCcw,
} from 'lucide-react';
import { FoundationInfo } from '../types/foundation';
import kaiSauLetterheadImg from '../assets/images/kai_sau_letterhead_1791639028119.jpg';
import doc80gImg from '../assets/images/doc_80g_certificate_1791639057777.jpg';
import docTrustImg from '../assets/images/doc_trust_certificate_1791639090837.jpg';
import doc12abImg from '../assets/images/doc_12ab_order_1791639135557.jpg';
import docSocietyImg from '../assets/images/doc_society_certificate_1791639182086.jpg';
import docPanImg from '../assets/images/doc_pan_card_1791639236564.jpg';

export interface OriginalDocument {
  id: string;
  category: 'tax' | 'trust' | 'letterhead' | 'identity';
  badge: string;
  marathiBadge: string;
  title: string;
  marathiTitle: string;
  documentType: string;
  issuingAuthority: string;
  marathiIssuingAuthority: string;
  orderNumber: string;
  date: string;
  urnOrPan: string;
  validity: string;
  summary: string;
  marathiSummary: string;
  imageSrc: string;
  pdfUrl?: string;
  verificationPortal?: string;
  verificationPortalUrl?: string;
}

export const ORIGINAL_DOCUMENTS: OriginalDocument[] = [
  {
    id: 'doc-letterhead',
    category: 'letterhead',
    badge: 'Official Letterhead',
    marathiBadge: 'संस्थेचे अधिकृत लेटरहेड (kai.sau.pdf)',
    title: 'Official Legal Letterhead of Kai. Sau. Manisha Foundation (kai.sau.pdf)',
    marathiTitle: 'कै. सौ. मनिषाताई रमेशजी भालेराव बहुउद्देशीय सेवाभावी संस्था — अधिकृत लेटरहेड',
    documentType: 'Official Scanned Organizational Stationery & Letterhead',
    issuingAuthority: 'President & Governing Council, Manisha Foundation, Nashik',
    marathiIssuingAuthority: 'संस्थापक अध्यक्ष व कार्यकारिणी, कै. सौ. मनिषा फाउंडेशन, नाशिक',
    orderNumber: 'Trust Reg: F-0021881 (NSK) / Society: Nashik/0000239/2022',
    date: 'Permanent Registered Stationery',
    urnOrPan: 'PAN: AAKAK3783F · 80G Approved',
    validity: 'Active Statutory Letterhead',
    summary:
      'Official authentic stationery of Kai. Sau. Manishatai Rameshji Bhalerao Bahuuddeshiya Sevabhavi Sanstha with registered logo, Sanskrit inscription ॥ तमसो मा ज्योतिर्गमय ॥, official seal, and executive signatures.',
    marathiSummary:
      'संस्थेचे अधिकृत लेटरहेड ज्यावर संस्थेचे बोधचिन्ह, संस्कृत ब्रीदवाक्य, नोंदणी क्रमांक, पॅन क्रमांक आणि अधिकृत शिक्का व स्वाक्षरी समाविष्ट आहे.',
    imageSrc: kaiSauLetterheadImg,
    pdfUrl: '/kai.sau.pdf',
    verificationPortal: 'Public Trusts Office, Nashik',
    verificationPortalUrl: 'https://charity.maharashtra.gov.in/',
  },
  {
    id: 'doc-80g',
    category: 'tax',
    badge: 'Income Tax 80G Order',
    marathiBadge: '८०G करसवलत मान्यता (Form 10AD)',
    title: 'Order for Approval u/s 80G(5) of Income Tax Act 1961 (Form No. 10AD)',
    marathiTitle: 'आयकर कायदा कलम ८०G(५) अंतर्गत मान्यता आदेश (फॉर्म १०AD)',
    documentType: 'Statutory Tax Exemption Order & Certificate',
    issuingAuthority: 'Income Tax Department, Office of CIT (Exemption), Pune, Ministry of Finance, Govt of India',
    marathiIssuingAuthority: 'आयकर विभाग, आयुक्त (सवलत), पुणे, वित्त मंत्रालय, भारत सरकार',
    orderNumber: 'ITBA/EXM/F/EXM44/2026-27/1093843558(1)',
    date: '15/10/2026',
    urnOrPan: 'URN: AAKAK3783F26PN01 (PAN: AAKAK3783F)',
    validity: 'Assessment Years 2026-27 to 2028-29',
    summary:
      'Official statutory order issued by the Commissioner of Income Tax under Clause (ii) of second proviso to Section 80G(5) of the Income Tax Act, 1961. Grants 50% income tax deduction to all donors.',
    marathiSummary:
      'आयकर कायदा १९६१ च्या कलम ८०G(५) अन्वये प्राप्त अधिकृत मान्यता. या प्रमाणपत्राद्वारे संस्थेला देणगी देणाऱ्या सर्व देणगीदारांना प्राप्तिकर नियमानुसार ५०% कर सवलत प्राप्त होते.',
    imageSrc: doc80gImg,
    verificationPortal: 'Income Tax e-Filing Portal (incometax.gov.in)',
    verificationPortalUrl: 'https://eportal.incometax.gov.in/',
  },
  {
    id: 'doc-trust-f-reg',
    category: 'trust',
    badge: 'Public Trust Certificate',
    marathiBadge: 'सार्वजनिक न्यास नोंदणी (F-0021881)',
    title: 'Certificate of Registration of Public Trust (Schedule I / Rule 8)',
    marathiTitle: 'सार्वजनिक विश्वस्त व्यवस्था नोंदणी प्रमाणपत्र (फ-००२ १८४४ / F-0021881)',
    documentType: 'Maharashtra Public Trusts Act Registration Deed',
    issuingAuthority: 'Office of the Charity Commissioner, Nashik Region, Govt of Maharashtra',
    marathiIssuingAuthority: 'धर्मादाय आयुक्त कार्यालय, नाशिक विभाग, महाराष्ट्र शासन',
    orderNumber: 'Public Trust Reg No.: फ - ००२१८४४ (नाशिक) (F - 0021881 NSK)',
    date: '२० मे २०२२ (20 May 2022)',
    urnOrPan: 'Reg No: F-0021881(NSK)',
    validity: 'Permanent Public Trust Registration',
    summary:
      'Official Public Trust Certificate issued under Section 18 of the Maharashtra Public Trusts Act, 1950, certifying that the trust has been duly registered at the Public Trusts Registration Office, Nashik.',
    marathiSummary:
      'मुंबई सार्वजनिक विश्वस्त व्यवस्था अधिनियम, १९५० च्या कलम १८ अन्वये नाशिक येथील सार्वजनिक विश्वस्त व्यवस्था नोंदणी कार्यालयात संस्थेची अधिकृत नोंदणी झाली असल्याचा कायदेशीर दाखला.',
    imageSrc: docTrustImg,
    verificationPortal: 'Charity Commissioner Office, Maharashtra',
    verificationPortalUrl: 'https://charity.maharashtra.gov.in/',
  },
  {
    id: 'doc-12ab',
    category: 'tax',
    badge: 'Section 12AB Order',
    marathiBadge: '१२AB धर्मदाय संस्था नोंदणी (Form 10AC)',
    title: 'Order for Registration u/s 12AB of Income Tax Act, 1961 (Form No. 10AC)',
    marathiTitle: 'आयकर कायदा कलम १२AB अंतर्गत धर्मदाय नोंदणी आदेश (फॉर्म १०AC)',
    documentType: 'Charitable Institution Accreditation',
    issuingAuthority: 'Office of Commissioner of Income Tax (Exemption), Pune, Income Tax Department',
    marathiIssuingAuthority: 'आयुक्त (सवलत) आयकर कार्यालय, पुणे, भारत सरकार',
    orderNumber: 'Order u/s 12AB · Form 10AC',
    date: '15/10/2023 to 2026-29',
    urnOrPan: 'PAN: AAKAK3783F · URN: AAKAK3783F202111',
    validity: 'A.Y. 2026-27 to 2028-29',
    summary:
      'Statutory accreditation recognizing Kai. Sau. Manishatai Rameshji Bhalerao Bahuuddeshiya Sevabhavi Sanstha as an authorized non-profit institution dedicated to educational and charitable public welfare, exempting trust income under Sections 11 & 12.',
    marathiSummary:
      'संस्थेस धर्मदाय संस्था म्हणून अधिकृत कायदेशीर मान्यता. यामुळे संस्थेचा संपूर्ण निधी केवळ जनहितार्थ सामाजिक, शैक्षणिक व आरोग्य उपक्रमांसाठी वापरला जाणे कायद्याने बंधनकारक व सुरक्षित आहे.',
    imageSrc: doc12abImg,
    verificationPortal: 'Income Tax Department (incometax.gov.in)',
    verificationPortalUrl: 'https://www.incometax.gov.in/',
  },
  {
    id: 'doc-society-reg',
    category: 'trust',
    badge: 'Society Registration',
    marathiBadge: 'संस्था नोंदणी प्रमाणपत्र (२३९/२०२२)',
    title: 'Certificate of Registration of Societies (Act XXI of 1860)',
    marathiTitle: 'संस्था नोंदणी कायदा १८६० अन्वये नोंदणी प्रमाणपत्र (नाशिक/००००२३९/२०२२)',
    documentType: 'Societies Registration Certificate',
    issuingAuthority: 'Office of the Registrar of Societies, Nashik Division, Government of Maharashtra',
    marathiIssuingAuthority: 'संस्था निबंधक कार्यालय, नाशिक विभाग, महाराष्ट्र शासन',
    orderNumber: 'महाराष्ट्र / २३९ / २०२२ / नाशिक (Nashik/0000239/2022)',
    date: '२५ फेब्रुवारी २०२२ (25 February 2022)',
    urnOrPan: 'Reg No: Nashik/0000239/2022',
    validity: 'Permanent Registered Society',
    summary:
      'Certified under the Societies Registration Act, 1860 (Act XXI of 1860) as a registered social welfare and educational institution in Nashik, Maharashtra.',
    marathiSummary:
      'संस्था नोंदणी कायदा, १८६० (सन १८६० चा कायदा २१) अन्वये नोंदणी झालेली अधिकृत सामाजिक व शैक्षणिक संस्था.',
    imageSrc: docSocietyImg,
    verificationPortal: 'Charity Organization Department, Nashik',
    verificationPortalUrl: 'https://charity.maharashtra.gov.in/',
  },
  {
    id: 'doc-pan',
    category: 'identity',
    badge: 'Official PAN Card',
    marathiBadge: 'अधिकृत पॅन कार्ड (AAKAK3783F)',
    title: 'Permanent Account Number Card - Income Tax Department, Govt of India',
    marathiTitle: 'प्राप्तिकर विभाग स्थायी लेखा संख्या (पॅन कार्ड) - AAKAK3783F',
    documentType: 'Statutory Tax Identity Document',
    issuingAuthority: 'Income Tax Department, Government of India',
    marathiIssuingAuthority: 'आयकर विभाग, भारत सरकार',
    orderNumber: 'PAN: AAKAK3783F',
    date: 'Year 2022',
    urnOrPan: 'AAKAK3783F',
    validity: 'Permanent Legal Tax Identifier',
    summary:
      'Official statutory Permanent Account Number (PAN) issued to Kai Mrs Manisha Samajik V Shaikshanik Sanstha by the Income Tax Department, Government of India.',
    marathiSummary:
      'संस्थेचे आयकर विभागाकडून मिळालेले मूळ अधिकृत पॅन कार्ड. देणगीदारांच्या खात्रीसाठी व पारदर्शकतेसाठी उपलब्ध.',
    imageSrc: docPanImg,
    verificationPortal: 'Income Tax Department (incometax.gov.in)',
    verificationPortalUrl: 'https://eportal.incometax.gov.in/iec/foservices/#/pre-login/verifyYourPan',
  },
];

interface OriginalDocumentsViewerProps {
  foundationInfo?: FoundationInfo;
}

export const OriginalDocumentsViewer: React.FC<OriginalDocumentsViewerProps> = () => {
  const [selectedDoc, setSelectedDoc] = useState<OriginalDocument | null>(null);
  const [activeModalDoc, setActiveModalDoc] = useState<OriginalDocument | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'tax' | 'trust' | 'letterhead' | 'identity'>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [modalZoom, setModalZoom] = useState<number>(1);

  const filteredDocs = ORIGINAL_DOCUMENTS.filter((doc) => {
    if (activeCategory === 'all') return true;
    return doc.category === activeCategory;
  });

  const handleCopyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handlePrintDocument = () => {
    window.print();
  };

  return (
    <section id="official-documents-section" className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200 mb-3">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Public Document Archive · जनतेच्या माहितीसाठी अधिकृत मूळ कागदपत्रे</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Original Official Documents &amp; Certificates
          </h2>
          <div className="mt-2 text-lg sm:text-xl font-bold text-red-700">
            पारदर्शकता आणि जनविश्वास — सर्व शासकीय मूळ प्रमाणपत्रे व लेटरहेड
          </div>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            संस्थेचे सर्व अधिकृत शासकीय आदेश, आयकर ८०G कर सवलत मान्यता, १२AB धर्मदाय नोंदणी, 
            धर्मादाय आयुक्त प्रमाणपत्र व अधिकृत लेटरहेड (kai.sau.pdf) जनतेसाठी मूळ स्कॅन स्वरूपात उपलब्ध आहेत.
          </p>

          {/* Category Filter Buttons */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'सर्व कागदपत्रे (All Documents)' },
              { id: 'letterhead', label: 'अधिकृत लेटरहेड (kai.sau.pdf)' },
              { id: 'tax', label: 'आयकर मान्यता (80G & 12AB)' },
              { id: 'trust', label: 'धर्मादाय नोंदणी (Trust & Society)' },
              { id: 'identity', label: 'पॅन कार्ड (PAN & Tax ID)' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-red-700 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Master Document Showcase Grid with REAL IMAGES ("as it is image") */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {filteredDocs.map((doc) => {
            const isSelected = selectedDoc?.id === doc.id;
            return (
              <div
                key={doc.id}
                className={`bg-white rounded-2xl border-2 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-xl group ${
                  isSelected
                    ? 'border-red-600 ring-4 ring-red-50'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Document Top Bar with Ribbon */}
                <div className="p-5 pb-0">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-red-50 text-red-700 border border-red-200 font-mono">
                      {doc.badge}
                    </span>
                    <span className="text-[11px] font-bold text-slate-500 font-mono">
                      {doc.date}
                    </span>
                  </div>

                  {/* Real Document Screenshot Image Container */}
                  <div
                    onClick={() => {
                      setSelectedDoc(doc);
                      setModalZoom(1);
                      setActiveModalDoc(doc);
                    }}
                    className="relative cursor-pointer overflow-hidden rounded-xl bg-slate-100 border border-slate-200 aspect-[3/4] group-hover:border-red-300 transition-colors"
                  >
                    <img
                      src={doc.imageSrc}
                      alt={doc.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Gradient Overlay for Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-75 group-hover:opacity-85 transition-opacity" />

                    {/* Top Stamp Tag */}
                    <div className="absolute top-3 left-3 bg-red-700/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-md backdrop-blur-xs flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
                      <span>मूळ शासकीय प्रत</span>
                    </div>

                    {/* Bottom Title on Image */}
                    <div className="absolute bottom-3 inset-x-3 text-white">
                      <p className="text-xs font-bold line-clamp-1 drop-shadow-md">
                        {doc.marathiTitle}
                      </p>
                      <div className="mt-1 flex items-center justify-between text-[11px] text-slate-200">
                        <span className="font-mono truncate max-w-[200px]">{doc.orderNumber}</span>
                        <span className="inline-flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded backdrop-blur-xs font-bold text-[10px]">
                          <Maximize2 className="w-3 h-3" />
                          <span>पहा</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Document Information Details */}
                  <div className="mt-4 space-y-2">
                    <h4 className="text-sm font-bold text-slate-900 leading-snug line-clamp-2">
                      {doc.title}
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {doc.summary}
                    </p>
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                      <span className="font-medium text-slate-700">{doc.validity}</span>
                      <span className="font-mono text-emerald-700 font-bold">{doc.urnOrPan}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-5 pt-4 border-t border-slate-100 bg-slate-50/50 mt-4 flex items-center gap-2">
                  <button
                    onClick={() => {
                      setSelectedDoc(doc);
                      setModalZoom(1);
                      setActiveModalDoc(doc);
                    }}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-red-700 hover:bg-red-800 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-2xs"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>कागदपत्र पहा (View Document)</span>
                  </button>

                  {doc.pdfUrl && (
                    <a
                      href={doc.pdfUrl}
                      download="kai.sau.pdf"
                      className="p-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-300 text-xs transition-colors shrink-0 font-bold flex items-center gap-1"
                      title="Download PDF file"
                    >
                      <Download className="w-4 h-4 text-amber-700" />
                      <span className="hidden sm:inline">PDF</span>
                    </a>
                  )}

                  <a
                    href={doc.imageSrc}
                    download={`${doc.id}.jpg`}
                    className="p-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 text-xs transition-colors shrink-0"
                    title="Download document image"
                  >
                    <Download className="w-4 h-4 text-slate-500" />
                  </a>

                  <button
                    onClick={() => handleCopyText(`${doc.title} - ${doc.orderNumber} - ${doc.urnOrPan}`, doc.id)}
                    className="p-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 text-xs transition-colors shrink-0"
                    title="Copy registration / order number"
                  >
                    {copiedId === doc.id ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4 text-slate-500" />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Public Transparency Banner */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-red-100 text-red-700 rounded-2xl shrink-0 hidden sm:block">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900">
                ऑनलाइन कायदेशीर पडताळणी व पारदर्शकता (Online Verification &amp; Public Transparency)
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
                कोणतीही व्यक्ती भारत सरकारच्या प्राप्तिकर विभागाच्या ई-फायलिंग पोर्टलवर (incometax.gov.in) संस्थेचा पॅन क्रमांक 
                <strong> AAKAK3783F</strong> किंवा ८०G URN <strong> AAKAK3783F26PN01</strong> टाकून या मान्यतेची थेट खात्री करू शकते.
                तसेच धर्मादाय आयुक्तांच्या पोर्टलवर <strong> F-0021881</strong> द्वारे नोंदणी पाहता येते.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0 w-full sm:w-auto justify-end">
            <a
              href="/kai.sau.pdf"
              download="kai.sau.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-red-700 hover:bg-red-800 text-white text-xs font-bold transition-all shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>kai.sau.pdf डाउनलोड</span>
            </a>
            <a
              href="https://eportal.incometax.gov.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all"
            >
              <span>आयकर पोर्टल पडताळणी</span>
              <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
            </a>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* HIGH-FIDELITY OFFICIAL DOCUMENT INSPECTION MODAL (SHOWING REAL IMAGES)     */}
      {/* ========================================================================= */}
      {activeModalDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-slate-950/90 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-5xl my-auto animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Top Control Bar */}
            <div className="flex items-center justify-between pb-3 text-white">
              <div className="flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-amber-400" />
                <span className="font-bold text-sm sm:text-base">
                  अधिकृत मूळ कागदपत्र दर्शन : {activeModalDoc.marathiBadge}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                {/* Zoom Controls */}
                <div className="hidden sm:flex items-center gap-1 bg-white/10 rounded-lg p-1">
                  <button
                    onClick={() => setModalZoom((z) => Math.min(z + 0.25, 2.5))}
                    className="p-1.5 hover:bg-white/20 rounded text-white"
                    title="Zoom in"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setModalZoom((z) => Math.max(z - 0.25, 0.75))}
                    className="p-1.5 hover:bg-white/20 rounded text-white"
                    title="Zoom out"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setModalZoom(1)}
                    className="p-1.5 hover:bg-white/20 rounded text-white"
                    title="Reset zoom"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>

                {activeModalDoc.pdfUrl && (
                  <a
                    href={activeModalDoc.pdfUrl}
                    download="kai.sau.pdf"
                    className="px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold flex items-center gap-1.5 shadow"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>kai.sau.pdf</span>
                  </a>
                )}

                <a
                  href={activeModalDoc.imageSrc}
                  download={`${activeModalDoc.id}.jpg`}
                  className="px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">इमेज डाउनलोड</span>
                </a>

                <button
                  onClick={handlePrintDocument}
                  className="px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 text-white text-xs font-bold hidden sm:flex items-center gap-1.5 transition-colors"
                  title="Print this document"
                >
                  <Printer className="w-4 h-4" />
                  <span>प्रिंट (Print)</span>
                </button>

                <button
                  onClick={() => setActiveModalDoc(null)}
                  className="p-1.5 bg-white/20 hover:bg-white/30 rounded-lg text-white transition-colors"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Document Display Container ("as it is image") */}
            <div className="bg-slate-900 rounded-2xl p-2 sm:p-4 overflow-auto max-h-[78vh] flex items-center justify-center border border-slate-700">
              <div
                style={{ transform: `scale(${modalZoom})`, transformOrigin: 'top center' }}
                className="transition-transform duration-200"
              >
                <img
                  src={activeModalDoc.imageSrc}
                  alt={activeModalDoc.title}
                  className="max-w-full h-auto max-h-[74vh] object-contain rounded-lg shadow-2xl mx-auto border border-slate-600"
                />
              </div>
            </div>

            {/* Document Verification & Details Footer */}
            <div className="mt-3 bg-slate-900/90 border border-slate-700 p-3 sm:p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-200">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                <span className="font-bold text-white">{activeModalDoc.marathiTitle}</span>
                <span className="font-mono text-amber-300 font-bold">{activeModalDoc.orderNumber}</span>
                <span className="font-mono text-emerald-400 font-bold">{activeModalDoc.urnOrPan}</span>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => handleCopyText(`${activeModalDoc.title} - ${activeModalDoc.orderNumber}`, activeModalDoc.id)}
                  className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg flex items-center gap-1 font-bold"
                >
                  {copiedId === activeModalDoc.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>कॉपी झाले!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>क्रमांक कॉपी करा</span>
                    </>
                  )}
                </button>

                {activeModalDoc.verificationPortalUrl && (
                  <a
                    href={activeModalDoc.verificationPortalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-red-700 hover:bg-red-800 text-white rounded-lg flex items-center gap-1 font-bold"
                  >
                    <span>पडताळणी पोर्टल</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
