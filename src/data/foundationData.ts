import {
  FoundationInfo,
  OfficialAboutDetails,
  OfficialAchievement,
  StatItem,
  ValueItem,
  WorkCategory,
  CommitteeMember,
  PhotoItem,
  EventItem,
} from '../types/foundation';

import workImgEdu from '../assets/images/regenerated_image_1791552855476.jpg';
import workImgHealth from '../assets/images/regenerated_image_1791552867957.jpg';
import workImgWomen from '../assets/images/regenerated_image_1791552860581.jpg';
import workImgRelief from '../assets/images/regenerated_image_1791552863805.png';
import workImgEnv from '../assets/images/regenerated_image_1791552870276.jpg';
import workImgYouth from '../assets/images/regenerated_image_1791552872660.jpg';

import eventImg1 from '../assets/images/regenerated_image_1791636416914.jpg';
import eventImg2 from '../assets/images/regenerated_image_1791636419959.jpg';
import eventImg3 from '../assets/images/regenerated_image_1791636422299.jpg';
import eventImg5 from '../assets/images/regenerated_image_1791636985007.jpg';

// School Organized Program Visual Assets
import schoolKitDistributionImg from '../assets/images/regenerated_image_1791712338626.png';
import studentsSchoolProgramImg from '../assets/images/students_school_program_1791711509154.jpg';
import felicitationCeremonyImg from '../assets/images/felicitation_ceremony_1791711526488.jpg';
import classroomLearningDriveImg from '../assets/images/regenerated_image_1791712336385.png';
import schoolProgramImgExtra1 from '../assets/images/regenerated_image_1791636216210.jpg';
import schoolProgramImgExtra2 from '../assets/images/regenerated_image_1791636213325.jpg';
import schoolProgramImgExtra3 from '../assets/images/regenerated_image_1791636210977.jpg';
import schoolProgramImgExtra4 from '../assets/images/regenerated_image_1791636209018.jpg';

import photoImg1 from '../assets/images/regenerated_image_1791636563572.jpg';
import photoImg2 from '../assets/images/regenerated_image_1791636566423.jpg';
import photoImg3 from '../assets/images/regenerated_image_1791636568306.jpg';
import photoImg4 from '../assets/images/regenerated_image_1791636571194.png';
import photoImg5 from '../assets/images/regenerated_image_1791636575977.jpg';
import photoImg6 from '../assets/images/regenerated_image_1791636578241.jpg';
import photoImg7 from '../assets/images/regenerated_image_1791636820309.jpg';
import photoImg8 from '../assets/images/regenerated_image_1791636822849.jpg';
import photoImg9 from '../assets/images/regenerated_image_1791636825555.png';

/**
 * =========================================================================
 * AUTHENTIC OFFICIAL DETAILS - MANISHA FOUNDATION
 * कै.सौ. मनिषा सामाजिक व शैक्षणिक संस्था, नाशिक.
 * Reg No: F-0021881 (NSK) · नोंदणी क्र.नाशिक/००००२३९/२०२२
 * Founder President: श्री. संदिप मधुकरराव भालेराव (Sandip Madhukarrao Bhalerao)
 * Contact: 7798100216 | Email: manishafoundation26@gmail.com
 * Sanskrit Inscription: तमसो मा ज्योतिर्गमय
 * Motto: The Goal is the Social and Educational Development of the last man in the society.
 * =========================================================================
 */

export const OFFICIAL_ABOUT_DETAILS: OfficialAboutDetails = {
  introductionTitle: 'प्रस्तावना (Introduction)',
  introductionText:
    'समाजातील वंचित, दुर्बल आणि शेवटच्या घटकातील नागरिकांपर्यंत सामाजिक बांधिलकीच्या जाणिवेतून शैक्षणिक, आरोग्यविषयक व समाजोपयोगी मदत पोहोचविण्याच्या उदात्त ध्येयाने कै.सौ. मनिषा सामाजिक व शैक्षणिक संस्था, नाशिक ची स्थापना करण्यात आली आहे. सर्वांगीण विकास व स्वावलंबन हेच आमचे अंतिम उद्दिष्ट आहे.',
  goalsTitle: 'उद्दिष्टे (Our Core Objectives)',
  goalsList: [
    'समाजातील शेवटच्या घटकापर्यंत गुणवत्तापूर्ण शैक्षणिक साहित्य, शिष्यवृत्ती व मार्गदर्शन पोहोचवणे.',
    'ग्रामीण व शहरी भागातील गरीब गरजू रुग्णांसाठी मोफत आरोग्य व नेत्र तपासणी शिबिरे आयोजित करणे.',
    'महिलांना स्वावलंबी बनवण्यासाठी व्यावसायिक शिवणकाम व कौशल्य विकास प्रशिक्षण देणे.',
    'पर्यावरण संवर्धनासाठी वृक्षारोपण, जलसंधारण व स्वच्छता जनजागृती मोहिमा राबवणे.',
    'आपत्कालीन प्रसंगी दुर्बल घटकांना अन्नधान्य, कपडे व आर्थिक सहाय्य उपलब्ध करून देणे.',
  ],
  visionTitle: 'ध्येय व विचार (Vision & Philosophy)',
  visionQuote:
    '“The Goal is the Social and Educational Development of the last man in the society.” — तमसो मा ज्योतिर्गमय — अज्ञानाच्या अंधारातून ज्ञानाच्या व स्वावलंबनाच्या प्रकाशाकडे घेऊन जाणे हेच आमचे जीवितकार्य आहे.',
  sloganBanner: ['शिक्षण', 'आरोग्य', 'समाजसेवा'],
};

export const OFFICIAL_ACHIEVEMENTS: OfficialAchievement[] = [
  {
    id: 'achieve-80g',
    title: 'Income Tax 80G Approval (Section 80G(5))',
    marathiTitle: 'आयकर विभाग ८०G कर सवलत प्रमाणपत्र मंजूर',
    authority: 'Government of India, Ministry of Finance, Income Tax Department, CIT Exemption, Pune',
    orderNumber: 'ITBA/EXM/F/EXM44/2026-27/1093843558(1)',
    date: '23/09/2026',
    urnOrPan: 'AAKAK3783F26PN01 (PAN: AAKAK3783F)',
    scope: 'Assessment Years 2026-27 to 2028-29 (3 Assessment Years)',
    summary:
      'Form No. 10AD Order for Registration & Approval under Clause (ii) of 2nd proviso to Section 80G(5) of the Income Tax Act, 1961. Donations made to the trust are officially eligible for tax exemption deductions.',
    keyPoints: [
      'Statutory 80G Tax Exemption certification granted to KAI MRS MANISHA SAMAJIK V SHAIKSHANIK SANSTHA, Nashik',
      'CIT Exemption, Pune Approval Order by Commissioner of Income Tax',
      'All donor contributions receive verifiable electronic certificates under Form 10BE',
      'Enables individual & corporate donors to claim 50% tax deductions on charitable gifts'
    ],
    badge: '80G Approved Tax Exemption',
  },
  {
    id: 'achieve-12a',
    title: 'Section 12AB Charitable Trust Registration',
    marathiTitle: 'आयकर कायदा १२AB धर्मदाय संस्था नोंदणी मान्यता',
    authority: 'Income Tax Department, Government of India (CIT Exemption, Pune)',
    orderNumber: 'Order dated 21/09/2026 u/s 12AB (Application 27/12AA/11960)',
    date: '21/09/2026',
    urnOrPan: 'PAN: AAKAK3783F',
    scope: 'A.Y. 2026-27 to 2028-29',
    summary:
      'Official recognition as a certified non-profit charitable institution under Section 12AB of the Income Tax Act, 1961. Entitles the institution to complete statutory income tax exemption on donations utilized for charitable and educational public welfare.',
    keyPoints: [
      'Recognized under "Charitable Activities" category by the Ministry of Finance',
      'Rigorous compliance audit passed with transparent statutory governance',
      'Ensures 100% of mobilized public contributions are channeled directly into community causes'
    ],
    badge: '12AB Registered Charitable Trust',
  },
  {
    id: 'achieve-trust-reg',
    title: 'Maharashtra Public Trust & Society Registration',
    marathiTitle: 'महाराष्ट्र शासन सार्वजनिक विश्वस्त संस्था नोंदणी',
    authority: 'Office of the Charity Commissioner, Nashik Region, Government of Maharashtra',
    orderNumber: 'Reg. No.: F - 0021881 (NSK) · नोंदणी क्र.: नाशिक/००००२३९/२०२२',
    date: 'Registered Year 2022',
    urnOrPan: 'Public Trust Reg: F-0021881 (NSK)',
    scope: 'Nashik District & State of Maharashtra',
    summary:
      'Duly registered under the Maharashtra Public Trusts Act and Societies Registration Act, empowering the foundation to operate community educational hubs, medical relief, and grassroots social welfare programs.',
    keyPoints: [
      'Public Trust Registration: F-0021881 (NSK)',
      'Society Registration No.: नाशिक/००००२३९/२०२२',
      'Full regulatory oversight and yearly statutory audits'
    ],
    badge: 'Maharashtra Govt Registered',
  },
  {
    id: 'achieve-edu-milestone',
    title: '10,000+ Students Educational Support & School Kits Drive',
    marathiTitle: '१०,०००+ गरजू विद्यार्थ्यांना शालेय साहित्य व किट्स वाटप',
    authority: 'Manisha Foundation Annual Educational Mission',
    orderNumber: 'Drive Milestone Series 2022-2026',
    date: 'Ongoing Annual Drives',
    urnOrPan: '10,000+ Direct Beneficiaries',
    scope: 'Nashik District & Tribal Belt Schools',
    summary:
      'Continuous distribution of school bags, notebooks, geometry sets, and study aids to underprivileged students across municipal and zilla parishad schools, preventing dropouts and boosting education.',
    keyPoints: [
      'Distributed school bags and complete stationery sets to over 10,000 deserving students',
      'Special merit awards and scholarship assistance for bright children from low-income families',
      'Career guidance and competitive exam orientation seminars organized across Nashik'
    ],
    badge: '10,000+ Students Empowered',
  },
  {
    id: 'achieve-health-milestone',
    title: '5,000+ Free Healthcare, Eye Diagnostics & Medicine Relief',
    marathiTitle: '५,०००+ नागरिकांना मोफत आरोग्य, नेत्र तपासणी व औषधोपचार',
    authority: 'Medical Welfare & Community Health Division',
    orderNumber: 'Community Health Camp Series',
    date: 'Monthly Community Camps',
    urnOrPan: '5,000+ Patients Examined',
    scope: 'Urban Slums & Rural Nashik',
    summary:
      'Organizing periodic multi-specialty health camps offering free blood tests, eye examinations, spectacle distributions, pediatric checkups, and life-saving medicinal aid.',
    keyPoints: [
      'Free general health and eye screening for elderly citizens and children',
      'Free distribution of prescription spectacles and essential medicines',
      'Voluntary blood donation drives mobilizing hundreds of units for district civil hospitals'
    ],
    badge: '5,000+ Patients Treated',
  },
  {
    id: 'achieve-women-milestone',
    title: '1,200+ Women Vocational Training & Tailoring Self-Reliance',
    marathiTitle: '१,२००+ महिलांना मोफत शिवणकाम व व्यावसायिक कौशल्य प्रशिक्षण',
    authority: 'Women Self-Reliance (स्वावलंबन) Cell',
    orderNumber: 'Vocational Skill Center Initiatives',
    date: 'Continuous Batches',
    urnOrPan: '1,200+ Certified Women',
    scope: 'Nashik & Surrounding Regions',
    summary:
      'Empowering women from economically weaker sections through free certified tailoring courses, handicraft training, and financial literacy to foster self-employment and dignified livelihood.',
    keyPoints: [
      'Certified tailoring and garment designing workshops conducted free of cost',
      'Support in acquiring sewing machines and starting micro-cottage ventures',
      'Financial independence and self-help group mentorship programs'
    ],
    badge: '1,200+ Women Self-Reliant',
  },
];

export const FORMSPREE_FORM_ENDPOINT = 'https://formspree.io/f/mljgnzbj';

export const FOUNDATION_DRIVE_VIDEOS_URL =
  'https://drive.google.com/drive/folders/1nfiferKO9V41LbJF7V92NyiWz44FUTmD?usp=sharing';

export interface VideoItemInfo {
  id: string;
  title: string;
  marathiTitle: string;
  category: string;
  description: string;
  duration?: string;
  badge: string;
  date: string;
}

export const FOUNDATION_VIDEOS_LIST: VideoItemInfo[] = [
  {
    id: 'vid-1',
    title: 'Foundation Social Work & Field Activities Documentary',
    marathiTitle: 'संस्थेचे सामाजिक कार्य व उपक्रम प्रत्यक्ष पाहणी',
    category: 'Field Activities · सामाजिक उपक्रम',
    description:
      'गरजू घटकांसाठी राबविलेले समाजोपयोगी उपक्रम, प्रत्यक्ष क्षेत्रातील कार्य आणि स्वयंसेवकांच्या सेवेचे प्रत्यक्ष चित्रीकरण.',
    duration: 'Full Video',
    badge: 'Official Video',
    date: 'Nashik, Maharashtra',
  },
  {
    id: 'vid-2',
    title: 'Educational Support & School Kits Distribution Event',
    marathiTitle: 'विद्यार्थी शालेय साहित्य वाटप कार्यक्रम',
    category: 'Education · शैक्षणिक कार्य',
    description:
      'वंचित व गरजू विद्यार्थ्यांना मोफत वह्या, पुस्तके, दप्तर वाटप कार्यक्रम व विद्यार्थ्यांचे मनोगत.',
    duration: 'Full Video',
    badge: 'Education Drive',
    date: 'Nashik District',
  },
  {
    id: 'vid-3',
    title: 'Free Health Checkup, Eye Diagnostic & Medical Camps',
    marathiTitle: 'मोफत आरोग्य व नेत्र तपासणी शिबिर',
    category: 'Healthcare · आरोग्य शिबिर',
    description:
      'ग्रामीण व वंचित भागातील नागरिकांसाठी आयोजित मोफत आरोग्य शिबिर, तपासणी व औषध वाटप मोहिमेचे चित्रीकरण.',
    duration: 'Full Video',
    badge: 'Health Mission',
    date: 'Nashik Health Camps',
  },
  {
    id: 'vid-4',
    title: 'Women Empowerment, Tailoring Training & Self-Reliance',
    marathiTitle: 'महिला सक्षमीकरण व शिवणकाम प्रशिक्षण',
    category: 'Empowerment · महिला सक्षमीकरण',
    description:
      'ग्रामीण व गरजू महिलांना स्वावलंबी बनविण्यासाठी मोफत व्यावसायिक कौशल्य व शिवणकाम प्रशिक्षण केंद्र उपक्रम.',
    duration: 'Full Video',
    badge: 'Empowerment',
    date: 'Skill Training Center',
  },
  {
    id: 'vid-5',
    title: 'Community Relief, Blanket Distribution & Social Welfare',
    marathiTitle: 'निराधार बांधवांना उबदार ब्लँकेट्स व जीवनावश्यक मदत',
    category: 'Social Relief · समाजकल्याण',
    description:
      'कडाक्याच्या थंडीत बेघर व निराधार नागरिकांना उबदार ब्लँकेट्स आणि अन्नधान्य मदत वाटप मोहिमेची झलक.',
    duration: 'Full Video',
    badge: 'Winter Relief',
    date: 'Nashik City & Outskirts',
  },
  {
    id: 'vid-6',
    title: 'Youth Sports, Awareness Seminars & Environmental Drives',
    marathiTitle: 'पर्यावरण संवर्धन, वृक्षारोपण व युवा प्रबोधन',
    category: 'Youth & Nature · युवा व पर्यावरण',
    description:
      'पर्यावरण संवर्धनासाठी वृक्षारोपण मोहीम, युवक मार्गदर्शन व सामाजिक एकात्मता जनजागृती कार्यक्रम.',
    duration: 'Full Video',
    badge: 'Awareness',
    date: 'Nashik Region',
  },
];

export const OFFICIAL_LETTERHEAD_INFO = {
  trustNameEnglish: 'MANISHA SOCIAL AND EDUCATIONAL FOUNDATION',
  trustNameMarathi: 'कै. सौ. मनिषा सामाजिक व शैक्षणिक संस्था',
  locationMarathi: 'नाशिक, महाराष्ट्र राज्य',
  regNo1: 'नोंदणी क्र. : नाशिक/००००२३९/२०२२',
  regNo2: 'Reg. No.: F-0021881(NSK)',
  mottoEnglish: 'The Goal is The Social And Educational Development of The Last Man un The Society',
  presidentName: 'संदिप मधुकर भालेराव',
  presidentTitle: 'संस्थापक अध्यक्ष',
  phone: '7798100216',
  email: 'manishafoundation26@gmail.com',
  fullAddress: '',
  panNumber: 'AAKAK3783F',
  approval80G_URN: 'AAKAK3783F26PN01',
};

export const INITIAL_FOUNDATION_INFO: FoundationInfo = {
  name: 'MANISHA FOUNDATION',
  marathiName: 'कै.सौ. मनिषा सामाजिक व शैक्षणिक संस्था, नाशिक.',
  officialMotto: 'The Goal is the Social and Educational Development of the last man in the society.',
  tagline: 'समाजातील शेवटच्या माणसाच्या सर्वांगीण विकासासाठी कटिबद्ध',
  registrationNo: 'Reg No: F-0021881 (NSK) · नोंदणी क्र.नाशिक/००००२३९/२०२२',
  establishedYear: 2022,
  heroHeading: 'कै.सौ. मनिषा सामाजिक व शैक्षणिक संस्था, नाशिक.',
  heroSubtitle: 'तमसो मा ज्योतिर्गमय',
  heroIntro:
    'Dedicated to grassroots social and educational upliftment of the underprivileged up to the last man in society through inclusive education support, healthcare assistance, women empowerment, and social welfare across Nashik and Maharashtra state.',
  address: '',
  city: 'नाशिक (Nashik)',
  state: 'महाराष्ट्र (Maharashtra)',
  pincode: '422001',
  country: 'India',
  phone: '7798100216',
  alternatePhone: '+91 7798100216',
  email: 'manishafoundation26@gmail.com',
  supportEmail: 'manishafoundation26@gmail.com',
  workingHours: 'सोमवार - शनिवार : सकाळी ९:०० ते संध्याकाळी ७:००',
  donation: {
    upiId: '',
    accountHolder: 'KAI. SAU. MANISHA SAMAJIK VA SHAIKSHANIK SANSTHA',
    bankName: 'State Bank of India',
    accountNumber: '10116854493',
    ifscCode: 'SBIN0001234',
    branchName: 'Main Branch, Nashik, Maharashtra',
    accountType: 'Public Trust Current Account',
    taxExemptionText:
      'Registered Public Trust (F-0021881 NSK). Donations are eligible for tax deduction benefits under Section 80G of the Income Tax Act.',
    qrNote:
      'Direct Bank Transfer via NEFT / RTGS / IMPS or UPI Transfer to Foundation Account Number 10116854493.',
  },
  socialLinks: {
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com',
    whatsapp: 'https://wa.me/917798100216',
  },
};

export const INITIAL_STATS: StatItem[] = [
  {
    id: 'stat-people',
    value: '5,000+',
    numericTarget: 5000,
    suffix: '+',
    label: 'व्यक्तींपर्यंत मदत (People Reached)',
    description: 'Individuals supported across educational, medical, and community relief programs.',
    icon: 'Users',
  },
  {
    id: 'stat-activities',
    value: '75+',
    numericTarget: 75,
    suffix: '+',
    label: 'सामाजिक उपक्रम (Community Drives)',
    description: 'Ground drives including health camps, school kit distributions, and tree plantations.',
    icon: 'Sparkles',
  },
  {
    id: 'stat-events',
    value: '35+',
    numericTarget: 35,
    suffix: '+',
    label: 'कार्यक्रम व शिबिरे (Programs Organized)',
    description: 'Health diagnosis camps, skill workshops, and awareness seminars.',
    icon: 'Calendar',
  },
  {
    id: 'stat-volunteers',
    value: '150+',
    numericTarget: 150,
    suffix: '+',
    label: 'समर्पित कार्यकर्ते (Active Volunteers)',
    description: 'Passionate citizens and youth actively mobilizing for public welfare.',
    icon: 'HeartHandshake',
  },
];

export const INITIAL_VALUES: ValueItem[] = [
  {
    id: 'val-transparency',
    title: 'पारदर्शकता व निष्ठा (Integrity & Transparency)',
    description:
      'प्रत्येक देणगी व निधीचा १००% सदुपयोग थेट जमिनीवरील गरजूंपर्यंत पोहोचवण्याची नोंद आणि वचनबद्धता.',
    icon: 'ShieldCheck',
  },
  {
    id: 'val-compassion',
    title: 'सामाजिक संवेदना (Empathy & Inclusivity)',
    description:
      'जात, धर्म किंवा पंथ याचा विचार न करता समाजातील शेवटच्या घटकातील नागरिकाला सन्मानाने जगण्याचे बळ देणे.',
    icon: 'Heart',
  },
  {
    id: 'val-collaboration',
    title: 'लोकसहभाग व स्वावलंबन (Community Empowerment)',
    description:
      'केवळ तात्पुरती मदत न करता शिक्षण व कौशल्याच्या माध्यमातून स्वावलंबी नागरिक घडवणे.',
    icon: 'Award',
  },
  {
    id: 'val-impact',
    title: 'सकारात्मक परिवर्तन (Sustainable Impact)',
    description:
      'दीर्घकालीन विकासासाठी मुलांचे शिक्षण, महिलांचे सक्षमीकरण आणि आरोग्यसुविधा निरंतर चालू ठेवणे.',
    icon: 'Globe2',
  },
];

export const INITIAL_WORK_AREAS: WorkCategory[] = [
  {
    id: 'work-edu',
    title: 'Education & Student Support',
    marathiTitle: 'मोफत शालेय साहित्य व शिक्षण सहाय्य',
    shortDesc: 'Providing books, school supplies, scholarship assistance, and after-school remedial learning.',
    fullDesc:
      'शिक्षण हेच सामाजिक प्रगतीचे मुख्य माध्यम आहे. गरिबीमुळे कोणताही विद्यार्थी शिक्षणापासून वंचित राहू नये म्हणून मनीषा फाउंडेशन दरवर्षी गरजू विद्यार्थ्यांना संपूर्ण शैक्षणिक संच (दप्तर, वह्या, कंपास, पेन), शिष्यवृत्ती व अभ्यासिकेची सोय उपलब्ध करून देते.',
    icon: 'GraduationCap',
    image: workImgEdu,
    highlights: [
      'Annual stationery & school bag distribution kit drives',
      'Community learning hubs with free remedial coaching',
      'Merit-cum-need scholarship guidance and sponsorship',
    ],
    beneficiaries: '1,200+ Students Supported',
  },
  {
    id: 'work-health',
    title: 'Healthcare & Medical Camps',
    marathiTitle: 'मोफत आरोग्य तपासणी व औषधोपचार',
    shortDesc: 'Free health screening camps, eye checkups, blood donation, and medicine assistance.',
    fullDesc:
      'ग्रामीण व वस्ती भागातील नागरिकांना आधुनिक वैद्यकीय तपासणी मोफत मिळावी यासाठी नामांकित डॉक्टरांच्या सहकार्याने भव्य तपासणी शिबिरे, ईसीजी, रक्तदाब, मधुमेह तपासणी आणि मोफत औषधे वाटप केले जाते.',
    icon: 'Stethoscope',
    image: workImgHealth,
    highlights: [
      'Free general physician & pediatric checkup camps',
      'Vision screening and complimentary prescription spectacles',
      'Preventive health & hygiene awareness workshops',
    ],
    beneficiaries: '2,500+ Patients Examined',
  },
  {
    id: 'work-women',
    title: 'Women Empowerment & Skills',
    marathiTitle: 'महिला स्वावलंबन व कौशल्य विकास',
    shortDesc: 'Vocational tailoring classes, financial literacy workshops, and self-help group mentorship.',
    fullDesc:
      'कुटुंबाच्या आर्थिक स्थैर्यासाठी महिलांचे स्वावलंबन अत्यंत आवश्यक आहे. फाउंडेशनतर्फे महिलांसाठी मोफत शिवणकाम वर्ग, हस्तकला प्रशिक्षण आणि आर्थिक साक्षरतेचे धडे दिले जातात.',
    icon: 'Flower2',
    image: workImgWomen,
    highlights: [
      'Certified sewing machine training & micro-entrepreneurship',
      'Financial independence & digital banking sessions',
      'Government welfare scheme enrollment assistance',
    ],
    beneficiaries: '350+ Women Empowered',
  },
  {
    id: 'work-relief',
    title: 'Social Welfare & Relief',
    marathiTitle: 'गरजूंना अन्नधान्य व वस्त्र वाटप',
    shortDesc: 'Warm clothing distribution in winter, dry ration food kits, and emergency crisis aid.',
    fullDesc:
      'थंडीच्या दिवसांत उघड्यावर झोपणाऱ्या निराधार बांधवांसाठी उबदार ब्लँकेट व स्वेटर वाटप, तसेच संकटग्रस्त कुटुंबांना जीवनावश्यक वस्तूंचे किट्स नियमितपणे दिले जातात.',
    icon: 'HelpingHand',
    image: workImgRelief,
    highlights: [
      'Annual winter warmth blankets & sweater distributions',
      'Nutritious grocery kits during times of acute distress',
      'Elderly assistance visits and healthcare companion support',
    ],
    beneficiaries: '3,000+ Individuals Reached',
  },
  {
    id: 'work-env',
    title: 'Environmental Conservation',
    marathiTitle: 'हरित नाशिक - वृक्षारोपण मोहीम',
    shortDesc: 'Afforestation tree plantation drives, plastic reduction campaigns, and cleanliness drives.',
    fullDesc:
      'निसर्गाचा समतोल राखण्यासाठी दर पावसाळ्यात नाशिक व लगतच्या परिसरात वड, पिंपळ, कडुनिंब अशा बहुवर्षायू देशी वृक्षांची लागवड करून त्यांचे जतन केले जाते.',
    icon: 'Leaf',
    image: workImgEnv,
    highlights: [
      'Plantation of 1,500+ indigenous trees in Nashik region',
      'School & youth cleanliness awareness shramdaan drives',
      'Plastic reduction and compost guidance campaigns',
    ],
    beneficiaries: '1,500+ Saplings Planted & Nurtured',
  },
  {
    id: 'work-youth',
    title: 'Youth Guidance & Development',
    marathiTitle: 'युवा मार्गदर्शन व करिअर कार्यशाळा',
    shortDesc: 'Career counseling, competitive exam seminars, sports coaching, and mentorship.',
    fullDesc:
      'तरुणांना योग्य दिशा दाखवण्यासाठी तज्ज्ञ व अधिकाऱ्यांची व्याख्याने, स्पर्धा परीक्षा मार्गदर्शिकांचे वाटप आणि क्रीडा स्पर्धांचे आयोजन केले जाते.',
    icon: 'TrendingUp',
    image: workImgYouth,
    highlights: [
      'Career roadmaps & competitive examinations guidance',
      'Mentorship sessions with public service professionals',
      'Youth health awareness and character building',
    ],
    beneficiaries: '600+ Youths Guided',
  },
];

export const INITIAL_COMMITTEE_MEMBERS: CommitteeMember[] = [
  {
    id: 'mem-1',
    name: 'श्री. संदिप मधुकरराव भालेराव',
    designation: 'संस्थापक अध्यक्ष (Founder President)',
    category: 'Executive',
    bio: 'संस्थेचे संस्थापक अध्यक्ष असून समाजातील शेवटच्या माणसाच्या सर्वांगीण सामाजिक व शैक्षणिक उत्थानासाठी अविरत कार्यमग्न. नाशिक जिल्हा व महाराष्ट्रातील सामाजिक कार्याचा दांडगा अनुभव.',
    phone: '7798100216',
    email: 'manishafoundation26@gmail.com',
    photo:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    joinedYear: 'संस्थापक (2022)',
    qualifications: 'सार्वजनिक विश्वस्त व सामाजिक कार्यकर्ते',
  },
  {
    id: 'mem-2',
    name: 'सौ. अनिता संदिप भालेराव',
    designation: 'उपाध्यक्ष (Vice President)',
    category: 'Executive',
    bio: 'महिला सक्षमीकरण, बचत गट चळवळ आणि मुलींच्या शैक्षणिक प्रगतीसाठी समर्पित. महिलांना स्वावलंबी बनवण्यासाठी विविध प्रशिक्षण वर्ग आयोजित करण्यात पुढाकार.',
    phone: '7798100216',
    email: 'manishafoundation26@gmail.com',
    photo:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    joinedYear: 'संस्थापक सदस्य',
    qualifications: 'सामाजिक समन्वयक',
  },
  {
    id: 'mem-3',
    name: 'श्री. प्रविण मधुकर भालेराव',
    designation: 'सचिव (Secretary)',
    category: 'Office Bearer',
    bio: 'संस्थेचे प्रशासकीय कामकाज, शासकीय दस्तऐवजीकरण आणि विविध सार्वजनिक उपक्रमांचे प्रत्यक्ष नियोजन व समन्वय सांभाळणारे कार्यक्षम मार्गदर्शक.',
    phone: '7798100216',
    email: 'manishafoundation26@gmail.com',
    photo:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    joinedYear: 'संस्थापक सदस्य',
    qualifications: 'प्रशासक व संघटक',
  },
  {
    id: 'mem-4',
    name: 'श्री. सचिन बापूराव पाटील',
    designation: 'खजिनदार (Treasurer)',
    category: 'Office Bearer',
    bio: 'संस्थेचे आर्थिक हिशोब, देणग्यांची पारदर्शकता आणि वार्षिक लेखापरीक्षण (Audit) काटेकोरपणे सांभाळणारे निष्ठावान विश्वस्त.',
    phone: '7798100216',
    email: 'manishafoundation26@gmail.com',
    photo:
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80',
    joinedYear: '२०२२',
    qualifications: 'लेखा व वित्तीय समन्वयक',
  },
  {
    id: 'mem-5',
    name: 'डॉ. गजानन विठ्ठलराव जोशी',
    designation: 'आरोग्य विभाग प्रमुख (Healthcare Head)',
    category: 'Coordinator',
    bio: 'संस्थेतर्फे आयोजित होणाऱ्या मोफत आरोग्य, नेत्र व रक्त तपासणी शिबिरांचे नियोजन आणि ग्रामीण भागातील रुग्णांना मार्गदर्शन करणारे मानद वैद्यकीय सल्लागार.',
    phone: '7798100216',
    email: 'manishafoundation26@gmail.com',
    photo:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
    joinedYear: '२०२२',
    qualifications: 'MBBS, मानद वैद्यकीय सल्लागार',
  },
  {
    id: 'mem-6',
    name: 'श्री. अमोल शांताराम गायकवाड',
    designation: 'युवा व स्वयंसेवक प्रमुख (Youth Head)',
    category: 'Coordinator',
    bio: 'नाशिक शहर व ग्रामीण भागातील तरुण स्वयंसेवकांची फळी उभारून वृक्षारोपण, रक्तदान व आपत्कालीन मदत कार्यात मोलाची भूमिका बजावणारे युवा नेते.',
    phone: '7798100216',
    email: 'manishafoundation26@gmail.com',
    photo:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    joinedYear: '२०२३',
    qualifications: 'युवा संघटक',
  },
  {
    id: 'mem-7',
    name: 'सौ. वंदना रमेश सूर्यवंशी',
    designation: 'शिक्षण विभाग समन्वयक (Education In-charge)',
    category: 'Coordinator',
    bio: 'शालेय साहित्य वाटप, गरीब विद्यार्थ्यांची निवड आणि अभ्यासिका केंद्रांचे पर्यवेक्षण सांभाळणाऱ्या माजी शिक्षिका व सामाजिक कार्यकर्त्या.',
    phone: '7798100216',
    email: 'manishafoundation26@gmail.com',
    photo:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    joinedYear: '२०२३',
    qualifications: 'M.A., B.Ed., शिक्षणतज्ज्ञ',
  },
  {
    id: 'mem-8',
    name: 'श्री. विजय शंकरराव शिंदे',
    designation: 'कार्यकारिणी सदस्य (Executive Member)',
    category: 'Advisory',
    bio: 'संस्थच्या सर्व सामाजिक उपक्रमांमध्ये सक्रिय सहभाग नोंदवणारे आणि जनजागृती मोहिमेत मोलाचे योगदान देणारे ज्येष्ठ मार्गदर्शक.',
    phone: '7798100216',
    email: 'manishafoundation26@gmail.com',
    photo:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
    joinedYear: '२०२२',
    qualifications: 'ज्येष्ठ सल्लागार',
  },
];

export const INITIAL_PHOTOS: PhotoItem[] = [
  {
    id: 'p-school-stage',
    title: 'शालेय साहित्य व दप्तर वाटप समारंभ (School Kit Distribution Drive)',
    category: 'School Programs',
    date: '१० ऑक्टोबर २०२६',
    location: 'जिल्हा परिषद प्राथमिक शाळा व सभागृह, नाशिक',
    url: schoolKitDistributionImg,
    caption: 'कै.सौ. मनिषा फाउंडेशन नाशिक आयोजित भव्य शालेय साहित्य वितरण कार्यक्रम - मान्यवरांच्या हस्ते विद्यार्थ्यांना नवीन दप्तर, वह्या व शैक्षणिक किट्स वाटप.',
  },
  {
    id: 'p-school-students',
    title: 'आनंदी विद्यार्थी व शैक्षणिक साहित्य किट्स (Happy Students with School Kits)',
    category: 'School Programs',
    date: '१० ऑक्टोबर २०२६',
    location: 'शाळा प्रांगण, नाशिक',
    url: studentsSchoolProgramImg,
    caption: 'संस्थेकडून प्राप्त झालेले रंगीबेरंगी नवीन दप्तर, चित्रकला वह्या व कंपास पेटी हातात घेऊन उत्साहाने उभे असलेले शालेय विद्यार्थी.',
  },
  {
    id: 'p-school-felicitation',
    title: 'वार्षिक गुणवंत विद्यार्थी सत्कार व बक्षीस वितरण (Annual Prize & Merit Distribution)',
    category: 'School Programs',
    date: '२८ सप्टेंबर २०२६',
    location: 'महात्मा फुले प्रेक्षागृह, नाशिक',
    url: felicitationCeremonyImg,
    caption: 'वार्षिक परीक्षेत उज्ज्वल यश संपादन करणाऱ्या विद्यार्थ्यांना मानपत्र, ट्रॉफी व विशेष शैक्षणिक शिष्यवृत्ती संच प्रदान करताना पदाधिकारी व शिक्षक.',
  },
  {
    id: 'p-school-classroom',
    title: 'ज्ञानगंगा वर्गखोली - थेट शैक्षणिक साहित्य वितरण (Classroom Learning Kit Drive)',
    category: 'School Programs',
    date: '२४ सप्टेंबर २०२६',
    location: 'प्राथमिक शाळा वर्गखोल्या, नाशिक',
    url: classroomLearningDriveImg,
    caption: 'वर्गखोलीत बसून नवीन वह्या, कंपास व भूमिती साहित्याचे स्वागत करणारे प्राथमिक शाळेतील विद्यार्थी.',
  },
  {
    id: 'p-school-teachers',
    title: 'शिक्षकवृंद व संस्था पदाधिकारी विचारविनिमय सत्र (Teachers & Foundation Coordination Meet)',
    category: 'School Programs',
    date: '१५ सप्टेंबर २०२६',
    location: 'मुख्याध्यापक कक्ष, नाशिक',
    url: schoolProgramImgExtra1,
    caption: 'गरजू विद्यार्थ्यांना गुणवत्तापूर्ण शैक्षणिक साहित्य सातत्यपूर्ण पुरवण्यासाठी शाळा व्यवस्थापन व संस्था पदाधिकाऱ्यांची संयुक्त बैठक.',
  },
  {
    id: 'p-school-workshop',
    title: 'विद्यार्थी समुपदेशन व व्यक्तिमत्व विकास कार्यशाळा (Student Counseling Workshop)',
    category: 'School Programs',
    date: '०८ ऑगस्ट २०२६',
    location: 'शाळा वाचनालय कक्ष, नाशिक',
    url: schoolProgramImgExtra2,
    caption: 'अभ्यास पद्धती, आत्मविश्वास आणि एकाग्रता वाढीसाठी तज्ज्ञ मार्गदर्शकांचे शालेय विद्यार्थ्यांना विशेष मार्गदर्शन.',
  },
  {
    id: 'p-school-sports',
    title: 'शालेय क्रीडा व शारीरिक शिक्षण साहित्य वाटप (Sports & Activity Kits Drive)',
    category: 'School Programs',
    date: '२२ जुलै २०२६',
    location: 'क्रीडांगण, नाशिक',
    url: schoolProgramImgExtra3,
    caption: 'विद्यार्थ्यांच्या शारीरिक व मानसिक आरोग्यासाठी क्रीडा साहित्य व खेळाच्या संचांचे मोफत वितरण.',
  },
  {
    id: 'p-school-assembly',
    title: 'शालेय परिपाठ व पर्यावरण जनजागृती संवाद (School Assembly & Eco-Awareness)',
    category: 'School Programs',
    date: '०५ जुलै २०२६',
    location: 'शाळा प्रांगण, नाशिक',
    url: schoolProgramImgExtra4,
    caption: 'सकाळच्या परिपाठात वृक्षारोपण, प्लास्टिक मुक्ती आणि जलसंधारणाबाबत विद्यार्थ्यांमध्ये जनजागृती.',
  },
  {
    id: 'p-1',
    title: 'मोफत शालेय साहित्य व दप्तर वाटप समारंभ',
    category: 'Community Work',
    date: '१५ मार्च २०२६',
    location: 'प्राथमिक शाळा, नाशिक',
    url: photoImg1,
    caption: 'गरजू व हुशार विद्यार्थ्यांना संपूर्ण शालेय साहित्याचे वाटप करताना संस्थेचे पदाधिकारी व शिक्षकवृंद.',
  },
  {
    id: 'p-2',
    title: 'भव्य मोफत सर्वसाधारण आरोग्य व नेत्र तपासणी शिबिर',
    category: 'Awareness Programs',
    date: '२८ फेब्रुवारी २०२६',
    location: 'सामुदायिक सभागृह, नाशिक',
    url: photoImg2,
    caption: 'तज्ज्ञ डॉक्टरांच्या उपस्थितीत ४०० हून अधिक ज्येष्ठ नागरिक व महिलांची मोफत नेत्र व रक्त तपासणी.',
  },
  {
    id: 'p-3',
    title: 'महिला शिवणकाम व स्वावलंबन प्रशिक्षण वर्ग',
    category: 'Social Activities',
    date: '१२ जानेवारी २०२६',
    location: 'मनीषा फाउंडेशन प्रशिक्षण केंद्र',
    url: photoImg3,
    caption: 'प्रशिक्षण पूर्ण करणाऱ्या महिला भगिनींना प्रमाणपत्र वाटप व घरगुती उद्योग मार्गदर्शन सत्र.',
  },
  {
    id: 'p-4',
    title: 'हिवाळी उबदार ब्लँकेट व स्वेटर वाटप मोहीम',
    category: 'Community Work',
    date: '२० डिसेंबर २०२५',
    location: 'रेल्वे स्टेशन व बेघर निवारा, नाशिक',
    url: photoImg4,
    caption: 'कडाकिस्या थंडीत निराधार व वस्तीतील वृद्ध बांधवांना उबदार ब्लँकेट वाटप करून आधार देताना कार्यकर्ते.',
  },
  {
    id: 'p-5',
    title: 'जागतिक पर्यावरण दिन - ५०० देशी वृक्षारोपण',
    category: 'Events',
    date: '०५ जून २०२५',
    location: 'गोदावरी परिसर, नाशिक',
    url: photoImg5,
    caption: 'पर्यावरण संवर्धनासाठी तरुण कार्यकर्ते व ग्रामस्थांच्या सहकार्याने वड, पिंपळ व कडुनिंब वृक्षांची लागवड.',
  },
  {
    id: 'p-6',
    title: 'युवा करिअर समुपदेशन व व्यक्तिमत्व विकास कार्यशाळा',
    category: 'Foundation Activities',
    date: '१८ नोव्हेंबर २०२५',
    location: 'नगर वाचनालय सभागृह, नाशिक',
    url: photoImg6,
    caption: 'दहावी-बारावी नंतरच्या विविध संधींवर स्पर्धा परीक्षा अधिकाऱ्यांचे विद्यार्थ्यांना बहुमूल्य मार्गदर्शन.',
  },
  {
    id: 'p-7',
    title: 'स्वच्छता श्रमदान व पाणी वाचवा जनजागृती रॅली',
    category: 'Community Work',
    date: '०२ ऑक्टोबर २०२५',
    location: 'मध्यवर्ती नाशिक परिसर',
    url: photoImg7,
    caption: 'गांधी जयंती निमित्त परिसरात स्वच्छता अभियान व प्लास्टिकमुक्ती बाबत नागरिकांमध्ये जनजागृती.',
  },
  {
    id: 'p-8',
    title: 'संस्थेचा वार्षिक कार्यकर्ता व हितचिंतक स्नेहमेळावा',
    category: 'Volunteers',
    date: '०५ सप्टेंबर २०२५',
    location: 'मनीषा फाउंडेशन मुख्य कार्यालय',
    url: photoImg8,
    caption: 'वर्षभरात निस्वार्थ सेवा देणाऱ्या तरुण स्वयंसेवकांचा व दात्यांचा गौरव समारंभ.',
  },
  {
    id: 'p-9',
    title: 'सणानिमित्त गरजूंना धान्य संच व फराळ वाटप',
    category: 'Social Activities',
    date: '२४ ऑक्टोबर २०२५',
    location: 'आदिवासी पाडा, नाशिक ग्रामीण',
    url: photoImg9,
    caption: 'दिवाळीच्या आनंदात समाजातील प्रत्येक घटक सहभागी व्हावा यासाठी धान्य व गोडधोड वाटप.',
  },
];

export const INITIAL_EVENTS: EventItem[] = [
  {
    id: 'ev-1',
    title: 'Annual Back-To-School Stationery & Bag Drive 2026',
    category: 'Upcoming Events',
    status: 'upcoming',
    date: 'रविवार, २४ मे २०२६',
    time: 'सकाळी ०९:३० ते दुपारी ०१:३०',
    venue: 'सामुदायिक विकास सभागृह, नाशिक',
    shortDesc: '५०० हून अधिक गरजू विद्यार्थ्यांना वह्या, दप्तर, कंपास व शालेय साहित्याचे मोफत वाटप.',
    fullDesc:
      'शाळा सुरू होण्यापूर्वी वंचित व गरजू घटकातील विद्यार्थ्यांना शिक्षणासाठी आवश्यक असणारे सर्व साहित्य एकाच छताखाली मोफत पुरविण्यात येणार आहे. या उपक्रमात सहभागी होऊन शैक्षणिक कीट प्रायोजित करण्यासाठी दात्यांनी संपर्क साधावा.',
    image: studentsSchoolProgramImg,
    organizer: 'कै.सौ. मनिषा संस्था शिक्षण विभाग',
    contactPerson: 'श्री. संदिप भालेराव (अध्यक्ष)',
    contactPhone: '7798100216',
    registrationOpen: true,
    expectedAttendees: '५००+ विद्यार्थी व पालक',
  },
  {
    id: 'ev-school-program-2026',
    title: 'शालेय साहित्य वितरण व गुणवंत विद्यार्थी सत्कार मेळावा (School Distribution & Student Felicitation Program)',
    category: 'Completed Events',
    status: 'completed',
    date: 'शनिवार, १० ऑक्टोबर २०२६',
    time: 'सकाळी ०९:३० ते दुपारी ०१:३०',
    venue: 'जिल्हा परिषद प्राथमिक शाळा व सभागृह, नाशिक',
    shortDesc: '५०० हून अधिक गरजू शालेय विद्यार्थ्यांना वह्या, दप्तर, कंपास बॉक्स व शैक्षणिक किट्सचे वाटप यशस्वीरीत्या संपन्न.',
    fullDesc:
      'कै.सौ. मनिषा सामाजिक व शैक्षणिक संस्था, नाशिक यांच्या वतीने आयोजित करण्यात आलेल्या या कार्यक्रमात शाळेतील गुणवंत व वंचित घटकातील विद्यार्थ्यांना संपूर्ण वर्षाचे शैक्षणिक साहित्य मोफत पुरविण्यात आले. संस्थेचे संस्थापक अध्यक्ष श्री. संदिप भालेराव, मुख्याध्यापक, शिक्षक आणि स्थानिक मान्यवरांनी उपस्थित राहून विद्यार्थ्यांना मार्गदर्शन केले.',
    image: schoolKitDistributionImg,
    organizer: 'कै.सौ. मनिषा संस्था शिक्षण विभाग',
    contactPerson: 'श्री. संदिप भालेराव (अध्यक्ष)',
    contactPhone: '7798100216',
    registrationOpen: false,
    expectedAttendees: '५००+ विद्यार्थी व शिक्षक',
  },
  {
    id: 'ev-school-felicitation-2026',
    title: 'Annual Student Merit Felicitation & Prize Distribution (वार्षिक पारितोषिक वितरण सोहळा)',
    category: 'Completed Events',
    status: 'completed',
    date: 'रविवार, २८ सप्टेंबर २०२६',
    time: 'सकाळी १०:०० ते दुपारी ०२:००',
    venue: 'महात्मा फुले शाळा सभागृह, नाशिक',
    shortDesc: 'वार्षिक परीक्षेत उज्ज्वल यश संपादन करणाऱ्या गुणवंत विद्यार्थ्यांचा ट्रॉफी, प्रमाणपत्र व शैक्षणिक किट्स देऊन सन्मान.',
    fullDesc:
      'कौतुक आणि प्रोत्साहनाने विद्यार्थ्यांचे मनोबल वाढावे या हेतूने गुणवंत विद्यार्थ्यांचा मानपत्र व बक्षीस देऊन सत्कार करण्यात आला. पालकांनी व शिक्षकांनी संस्थेच्या या उपक्रमाचे मनःपूर्वक कौतुक केले.',
    image: felicitationCeremonyImg,
    organizer: 'कै.सौ. मनिषा फाउंडेशन विद्यार्थी कल्याण विभाग',
    contactPerson: 'सौ. अनिता भालेराव',
    contactPhone: '7798100216',
    registrationOpen: false,
    expectedAttendees: '३५०+ विद्यार्थी व पालक',
  },
  {
    id: 'ev-school-classroom-drive',
    title: 'Classroom Direct Educational Outreach Drive (थेट वर्गखोली शैक्षणिक साहित्य मोहीम)',
    category: 'Completed Events',
    status: 'completed',
    date: 'बुधवार, २४ सप्टेंबर २०२६',
    time: 'सकाळी ११:०० ते दुपारी ०२:००',
    venue: 'प्राथमिक शाळा वर्गखोल्या, नाशिक ग्रामीण',
    shortDesc: 'ग्रामीण प्राथमिक शाळांमधील चिमुकल्या विद्यार्थ्यांना थेट वर्गखोलीत वह्या, रंगीत चित्रे व शैक्षणिक किट्सचे वाटप.',
    fullDesc:
      'वंचित व ग्रामीण शाळांमधील विद्यार्थ्यांना अभ्यासाची गोडी लागावी यासाठी थेट वर्गात जाऊन स्वयंसेवकांनी शैक्षणिक साहित्याचे वाटप केले.',
    image: classroomLearningDriveImg,
    organizer: 'स्वयंसेवक व शिक्षण समन्वय समिती',
    contactPerson: 'श्री. प्रविण भालेराव',
    contactPhone: '7798100216',
    registrationOpen: false,
    expectedAttendees: '२००+ लहान विद्यार्थी',
  },
  {
    id: 'ev-2',
    title: 'Free Multispeciality Health & Preventive Camp',
    category: 'Upcoming Events',
    status: 'upcoming',
    date: 'रविवार, १४ जून २०२६',
    time: 'सकाळी ०८:३० ते दुपारी ०२:००',
    venue: 'सार्वजनिक वाचनालय हॉल, नाशिक',
    shortDesc: 'हृदयरोग, नेत्ररोग, स्त्रीरोग तज्ज्ञांमार्फत मोफत तपासणी, औषधोपचार व चष्मे वाटप.',
    fullDesc:
      'नाशिक व परिसरातील नागरिकांसाठी अत्याधुनिक उपकरणांद्वारे ईसीजी, शुगर, बीपी व डोळ्यांची संपूर्ण तपासणी करण्यात येईल. मोफत चष्मे वाटप व गंभीर रुग्णांना पुढील उपचारासाठी योग्य मार्गदर्शन केले जाईल.',
    image: eventImg2,
    organizer: 'आरोग्य विभाग समिती',
    contactPerson: 'डॉ. गजानन जोशी / श्री. संदिप भालेराव',
    contactPhone: '7798100216',
    registrationOpen: true,
    expectedAttendees: '६००+ नागरिक',
  },
  {
    id: 'ev-3',
    title: 'Monsoon Green Belt Tree Plantation Drive',
    category: 'Upcoming Events',
    status: 'upcoming',
    date: 'रविवार, १२ जुलै २०२६',
    time: 'सकाळी ०७:०० ते सकाळी ११:००',
    venue: 'गंगापूर रस्ता व गोदावरी परिसर, नाशिक',
    shortDesc: 'पर्यावरण रक्षणासाठी युवक, विद्यार्थी व नागरिकांच्या सहभागाने १,००० झाडांची लागवड.',
    fullDesc:
      'पावसाळ्याच्या सुरुवातीला पर्यावरण संवर्धनाचा मोठा संदेश देत वटवृक्ष, पिंपळ, कडुनिंब यांसारख्या देशी वृक्षांची लागवड केली जाईल. प्रत्येक वृक्षाचे पालकत्व स्थानिक स्वयंसेवकांना दिले जाईल.',
    image: eventImg3,
    organizer: 'पर्यावरण व युवा विभाग',
    contactPerson: 'श्री. अमोल गायकवाड',
    contactPhone: '7798100216',
    registrationOpen: true,
    expectedAttendees: '२००+ स्वयंसेवक',
  },
  {
    id: 'ev-4',
    title: 'हिवाळी उबदार ब्लँकेट व स्वेटर वाटप मोहीम २०२५',
    category: 'Completed Events',
    status: 'completed',
    date: 'रविवार, २१ डिसेंबर २०२५',
    time: 'संध्याकाळी ०६:०० ते रात्री १०:००',
    venue: 'नाशिक शहर व निवारा शेड्स',
    shortDesc: '६५० बेघर व निराधार नागरिकांना दर्जेदार उबदार ब्लँकेट्सचे वाटप यशस्वीरीत्या पूर्ण.',
    fullDesc:
      'कडाक्याच्या थंडीत रस्त्यावर व निवाऱ्यात राहणाऱ्या गरजूंना थंडीपासून संरक्षण मिळण्यासाठी संस्थेच्या कार्यकर्त्यांनी फिरून ब्लँकेट वाटप केले.',
    image:
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80',
    organizer: 'समाजकल्याण विभाग',
    contactPerson: 'श्री. संदिप भालेराव',
    contactPhone: '7798100216',
    registrationOpen: false,
    expectedAttendees: '६५०+ लाभार्थी',
  },
  {
    id: 'ev-5',
    title: 'Women Entrepreneurship & Sewing Machine Handover Ceremony',
    category: 'Completed Events',
    status: 'completed',
    date: 'बुधवार, ०८ ऑक्टोबर २०२५',
    time: 'सकाळी ११:०० ते दुपारी ०३:००',
    venue: 'संस्था सभागृह, नाशिक',
    shortDesc: '३५ महिलांना ३ महिन्यांचे शिवणकाम प्रशिक्षण पूर्ण केल्याबद्दल सन्मान व प्रमाणपत्र.',
    fullDesc:
      'महिलांना स्वतःच्या पायावर उभे राहता यावे यासाठी मोफत प्रशिक्षण यशस्वीपणे पूर्ण करणाऱ्या महिलांना सन्मानित करण्यात आले.',
    image: eventImg5,
    organizer: 'महिला सक्षमीकरण कक्ष',
    contactPerson: 'सौ. अनिता भालेराव',
    contactPhone: '7798100216',
    registrationOpen: false,
    expectedAttendees: '१५०+ उपस्थित',
  },
];
