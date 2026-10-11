export interface FoundationInfo {
  name: string;
  marathiName: string;
  officialMotto: string;
  tagline: string;
  registrationNo: string;
  establishedYear: number;
  heroHeading: string;
  heroSubtitle: string;
  heroIntro: string;
  address?: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  phone: string;
  alternatePhone?: string;
  email: string;
  supportEmail?: string;
  workingHours: string;
  donation: {
    upiId?: string;
    accountHolder: string;
    bankName: string;
    accountNumber: string;
    ifscCode: string;
    branchName: string;
    accountType: string;
    taxExemptionText: string;
    qrNote: string;
  };
  socialLinks: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
    linkedin?: string;
    whatsapp?: string;
  };
}

export interface OfficialAboutDetails {
  introductionTitle: string;
  introductionText: string;
  goalsTitle: string;
  goalsList: string[];
  visionTitle: string;
  visionQuote: string;
  sloganBanner: string[];
}

export interface OfficialAchievement {
  id: string;
  title: string;
  marathiTitle: string;
  authority: string;
  orderNumber: string;
  date: string;
  urnOrPan: string;
  scope: string;
  summary: string;
  keyPoints: string[];
  badge: string;
}

export interface StatItem {
  id: string;
  value: string;
  numericTarget: number;
  suffix: string;
  label: string;
  description: string;
  icon: string;
}

export interface ValueItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface WorkCategory {
  id: string;
  title: string;
  marathiTitle?: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  image: string;
  highlights: string[];
  beneficiaries: string;
}

export interface CommitteeMember {
  id: string;
  name: string;
  marathiName?: string;
  designation: string;
  marathiDesignation?: string;
  category: 'Executive' | 'Office Bearer' | 'Coordinator' | 'Advisory';
  bio: string;
  phone: string;
  email: string;
  photo: string;
  joinedYear: string;
  qualifications?: string;
}

export interface PhotoItem {
  id: string;
  title: string;
  category: 'Community Work' | 'Social Activities' | 'Events' | 'Awareness Programs' | 'Volunteers' | 'Foundation Activities' | 'School Programs';
  date: string;
  location: string;
  url: string;
  caption: string;
}

export interface EventItem {
  id: string;
  title: string;
  category: 'Upcoming Events' | 'Completed Events' | 'Community Programs' | 'Awareness Programs' | 'Social Activities';
  status: 'upcoming' | 'completed';
  date: string;
  time: string;
  venue: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  organizer: string;
  contactPerson: string;
  contactPhone: string;
  registrationOpen: boolean;
  expectedAttendees: string;
}

export type ActiveTab =
  | 'home'
  | 'about'
  | 'work'
  | 'photos'
  | 'gallery'
  | 'videos'
  | 'events'
  | 'contact';
