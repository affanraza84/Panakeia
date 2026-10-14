export interface ConferenceEvent {
  id: string;
  title: string;
  category: "inaugurations" | "conferences" | "delegations" | "dealers" | "students" | "awards";
  categoryLabel: string;
  imageSrc: string;
  location: string;
  date: string;
  description: string;
  tags: string[];
  featured?: boolean;
  aspectRatio?: "landscape" | "portrait" | "square";
}

export interface ConferenceCategory {
  id: string;
  label: string;
  iconName: string;
  count: number;
  description: string;
}

export const CONFERENCE_CATEGORIES: ConferenceCategory[] = [
  {
    id: "all",
    label: "All Events & Engagements",
    iconName: "LayoutGrid",
    count: 27,
    description: "Complete photographic record of Panakeia's inaugurations, medical summits, global delegations, and academic training.",
  },
  {
    id: "inaugurations",
    label: "Hospital Inaugurations",
    iconName: "Building2",
    count: 6,
    description: "Official hospital unveilings including Shatabdi Hospital inauguration attended by Hon'ble Union Minister Shri Piyush Goyal.",
  },
  {
    id: "conferences",
    label: "Conferences & Global Expos",
    iconName: "Globe2",
    count: 2,
    description: "National summits including BIRAC MedTech Summit in New Delhi and Global MedTech Exhibition in Dubai.",
  },
  {
    id: "delegations",
    label: "International Delegations",
    iconName: "Users",
    count: 5,
    description: "High-level bilateral tours with delegations from WHO United Kingdom, South Korea, and institutional leaders.",
  },
  {
    id: "students",
    label: "Academic & Student Visits",
    iconName: "GraduationCap",
    count: 7,
    description: "B.Tech and biomedical engineering cohorts training at Panakeia's high-tech manufacturing bays at AMTZ.",
  },
  {
    id: "awards",
    label: "Awards & Honors",
    iconName: "Trophy",
    count: 6,
    description: "VCCI Award for Innovation in Medical Devices presented by Meta India leadership, alongside institutional honours.",
  },
  {
    id: "dealers",
    label: "Dealers & OT Handover",
    iconName: "Stethoscope",
    count: 1,
    description: "Operation theatre equipment commissioning, technical handovers, and distributor partner collaborations.",
  },
];

export const CONFERENCE_EVENTS: ConferenceEvent[] = [
  // --- INAUGURATIONS (Shatabdi Hospital / Piyush Goyal) ---
  {
    id: "goyal-inauguration-post",
    title: "Official Address by Hon'ble Union Minister Shri Piyush Goyal",
    category: "inaugurations",
    categoryLabel: "Hospital Inaugurations",
    imageSrc: "/image/piyush-goyal-inaugration-post.jpeg",
    location: "Shatabdi Hospital, Kandivali, Mumbai",
    date: "March 2026",
    description:
      "Hon'ble Union Minister Shri Piyush Goyal officially commemorated the inauguration of Panakeia's modern critical care medical equipment at Bharat Ratna Dr. Babasaheb Ambedkar Municipal General Hospital (Shatabdi Hospital), reinforcing the national vision of accessible, world-class healthcare for all citizens.",
    tags: ["Hon. Piyush Goyal", "Shatabdi Hospital", "Health For All", "Make in India"],
    featured: true,
    aspectRatio: "portrait",
  },
  {
    id: "opening-1-unveiling",
    title: "Ceremonial Unveiling of Panakeia Anaesthesia Workstation",
    category: "inaugurations",
    categoryLabel: "Hospital Inaugurations",
    imageSrc: "/image/opening1.jpeg",
    location: "Shatabdi Hospital, Kandivali, Mumbai",
    date: "March 2026",
    description:
      "Union Minister Shri Piyush Goyal ceremonially unveils the Panakeia advanced Anaesthesia Workstation amidst senior hospital medical superintendents, specialized anaesthesiologists, and national press representatives.",
    tags: ["Ministerial Visit", "OT Unveiling", "Critical Care", "Shatabdi Hospital"],
    featured: true,
    aspectRatio: "landscape",
  },
  {
    id: "opening-2-ceremony",
    title: "Moment of Equipment Dedication to Public Healthcare",
    category: "inaugurations",
    categoryLabel: "Hospital Inaugurations",
    imageSrc: "/image/opening2.jpeg",
    location: "Shatabdi Hospital, Kandivali, Mumbai",
    date: "March 2026",
    description:
      "A landmark milestone for indigenous medical device self-reliance as the protective drape is lifted, dedicating Panakeia's life-support anesthesia workstation to municipal clinical surgery.",
    tags: ["Dedication Ceremony", "Anaesthesia", "Public Health", "Panakeia Medtech"],
    aspectRatio: "landscape",
  },
  {
    id: "opening-3-press-address",
    title: "Ministerial Address on Indigenous Medical Device Leadership",
    category: "inaugurations",
    categoryLabel: "Hospital Inaugurations",
    imageSrc: "/image/opening3.jpeg",
    location: "Shatabdi Hospital, Kandivali, Mumbai",
    date: "March 2026",
    description:
      "Union Minister Piyush Goyal speaks to media and medical staff about the importance of high-precision Indian-manufactured surgical technology in municipal healthcare networks.",
    tags: ["Press Conference", "Hon. Piyush Goyal", "Healthcare Infrastructure"],
    featured: true,
    aspectRatio: "landscape",
  },
  {
    id: "opening-4-ribbon-cutting",
    title: "Ribbon Cutting Ceremony with Senior Medical Leadership",
    category: "inaugurations",
    categoryLabel: "Hospital Inaugurations",
    imageSrc: "/image/opening4.jpeg",
    location: "Shatabdi Hospital, Kandivali, Mumbai",
    date: "March 2026",
    description:
      "Shri Piyush Goyal cuts the ceremonial ribbon alongside lead surgeons and hospital administrators, formally initiating surgical operations with Panakeia equipment.",
    tags: ["Ribbon Cutting", "Surgical Suite", "Hospital Commissioning"],
    aspectRatio: "landscape",
  },
  {
    id: "opening-5-suite-inauguration",
    title: "Official Commissioning of Modern OT Surgical Suite",
    category: "inaugurations",
    categoryLabel: "Hospital Inaugurations",
    imageSrc: "/image/opening5.jpeg",
    location: "Shatabdi Hospital, Kandivali, Mumbai",
    date: "March 2026",
    description:
      "Hospital administrators and surgical teams assemble as the newly installed critical care workstations are commissioned for day-to-day emergency and elective procedures.",
    tags: ["OT Commissioning", "Surgical Care", "Clinical Milestone"],
    aspectRatio: "landscape",
  },

  // --- CONFERENCES & GLOBAL EXPOS ---
  {
    id: "birac-summit-delhi",
    title: "BIRAC National MedTech Summit & Innovation Showcase",
    category: "conferences",
    categoryLabel: "Conferences & Global Expos",
    imageSrc: "/image/birac-conference.jpeg",
    location: "National Innovation Pavilion, New Delhi",
    date: "2024",
    description:
      "Panakeia executive leadership and technical directors at the Biotechnology Industry Research Assistance Council (BIRAC) National Expo, presenting indigenous ICU ventilators and anesthesia workstations to health ministry delegates.",
    tags: ["BIRAC", "Make in India", "National Summit", "Government of India"],
    featured: true,
    aspectRatio: "landscape",
  },
  {
    id: "dubai-global-medtech",
    title: "Global MedTech Summit & Unicorns Track — Dubai",
    category: "conferences",
    categoryLabel: "Conferences & Global Expos",
    imageSrc: "/image/dubai-event.jpeg",
    location: "Dubai World Trade Centre, UAE",
    date: "2024",
    description:
      "Panakeia Managing Director broadcast on international media at the Startup & Unicorns Track in Dubai, presenting Panakeia and AMTZ critical care solutions to global healthcare distributors and hospital chains.",
    tags: ["Dubai Expo", "Global MedTech", "AMTZ Partner", "International Media"],
    featured: true,
    aspectRatio: "landscape",
  },

  // --- INTERNATIONAL DELEGATIONS ---
  {
    id: "who-uk-discussion",
    title: "WHO United Kingdom Delegation Bilateral Consultation",
    category: "delegations",
    categoryLabel: "International Delegations",
    imageSrc: "/image/who-uk-guest1.jpeg",
    location: "Panakeia Technology Bay, AMTZ, Visakhapatnam",
    date: "2024",
    description:
      "High-level bilateral strategic consultation with health delegates from the World Health Organization (WHO) United Kingdom, reviewing indigenous ventilator supply chains and global clinical affordability.",
    tags: ["WHO UK", "Global Health", "AMTZ Campus", "Regulatory Standards"],
    aspectRatio: "portrait",
  },
  {
    id: "who-uk-manufacturing-tour",
    title: "WHO UK Leadership Technical Facility Inspection",
    category: "delegations",
    categoryLabel: "International Delegations",
    imageSrc: "/image/who-uk-guest2.jpeg",
    location: "Panakeia Manufacturing Facility, AMTZ",
    date: "2024",
    description:
      "WHO UK health policy and clinical experts inspect Panakeia's active manufacturing and testing line for CE & ISO certified anesthesia ventilators and critical care equipment.",
    tags: ["WHO UK", "Facility Tour", "Quality Systems", "Critical Care"],
    featured: true,
    aspectRatio: "landscape",
  },
  {
    id: "who-uk-savel-review",
    title: "Evaluation of Portable Transport Life Support Systems",
    category: "delegations",
    categoryLabel: "International Delegations",
    imageSrc: "/image/who-uk-guest3.jpeg",
    location: "Panakeia Medisys Facility, Visakhapatnam",
    date: "2024",
    description:
      "Hands-on technical review of the SAVEL portable emergency transport ventilator and battlefield resuscitation kits with visiting health leadership.",
    tags: ["WHO UK", "Portable Ventilator", "Emergency Medicine"],
    aspectRatio: "landscape",
  },
  {
    id: "south-korea-delegation",
    title: "South Korean Medical Technology Delegation Exchange",
    category: "delegations",
    categoryLabel: "International Delegations",
    imageSrc: "/image/south-korea-guest.jpeg",
    location: "Panakeia AMTZ Facility, Visakhapatnam",
    date: "2024",
    description:
      "Delegates from the South Korean medical equipment industry examining Panakeia's microprocessor anesthesia workstations, electronic flow generator controls, and export-grade manufacturing capabilities.",
    tags: ["South Korea Delegation", "Bilateral MedTech", "Engineering Exchange"],
    aspectRatio: "landscape",
  },
  {
    id: "institutional-guest-inspection",
    title: "Hospital Leaders & Dignitaries Factory Walkthrough",
    category: "delegations",
    categoryLabel: "International Delegations",
    imageSrc: "/image/guest-visit.jpeg",
    location: "Panakeia Manufacturing Complex, AMTZ",
    date: "2024",
    description:
      "Institutional hospital delegates and regional healthcare dignitaries visiting Panakeia's production bay alongside executive engineering staff to review finished ICU ventilators and workstations.",
    tags: ["Hospital Leadership", "AMTZ Zone", "Engineering Staff"],
    aspectRatio: "landscape",
  },

  // --- ACADEMIC & STUDENT VISITS ---
  {
    id: "student-visit-lecture",
    title: "B.Tech Biomedical Engineering Industrial Demonstration",
    category: "students",
    categoryLabel: "Academic & Student Visits",
    imageSrc: "/image/industrial-visit-by-btech-students1.jpeg",
    location: "Panakeia Campus, AMTZ, Visakhapatnam",
    date: "2024",
    description:
      "Biomedical and engineering students observing a live operational demonstration of the advanced Anaesthesia Workstation bellows, pneumatic mixing systems, and multi-parameter patient monitor integration.",
    tags: ["B.Tech Students", "Industrial Visit", "Biomedical Training", "AMTZ"],
    featured: true,
    aspectRatio: "landscape",
  },
  {
    id: "student-visit-electronics",
    title: "Technical Masterclass on Ventilator Flow Control & Schematics",
    category: "students",
    categoryLabel: "Academic & Student Visits",
    imageSrc: "/image/industrial-visit-by-btech-students2.jpeg",
    location: "Panakeia Engineering Bay",
    date: "2024",
    description:
      "Panakeia technical leaders explaining closed-loop respiratory control algorithms, pressure transducers, and electronic FiO2 titration circuits to visiting engineering scholars.",
    tags: ["Technical Workshop", "Electronics & Embedded", "Student Mentorship"],
    aspectRatio: "landscape",
  },
  {
    id: "student-visit-make-in-india",
    title: "Interactive Session on Indigenous Medical Innovation",
    category: "students",
    categoryLabel: "Academic & Student Visits",
    imageSrc: "/image/industrial-visit-by-btech-students3.jpeg",
    location: "Panakeia Training Bay",
    date: "2024",
    description:
      "Students actively engaging in a Q&A session regarding biomedical career pathways, clinical trials, and manufacturing indigenously in India.",
    tags: ["Q&A Session", "Indigenous Tech", "Student Community"],
    aspectRatio: "landscape",
  },
  {
    id: "student-visit-group-delegation",
    title: "University Faculty & Engineering Student Cohort Delegation",
    category: "students",
    categoryLabel: "Academic & Student Visits",
    imageSrc: "/image/industrial-visit-by-btech-students4.jpeg",
    location: "AMTZ Innovation Complex",
    date: "2024",
    description:
      "Group photograph of university engineering professors, students, and Panakeia mentors gathered with the indigenously built three-gas anaesthesia workstation.",
    tags: ["Cohort Photo", "University Delegation", "AMTZ Campus"],
    featured: true,
    aspectRatio: "landscape",
  },
  {
    id: "student-visit-rnd-guidance",
    title: "Biomedical R&D Career Guidance Workshop",
    category: "students",
    categoryLabel: "Academic & Student Visits",
    imageSrc: "/image/industrial-visit-by-btech-students5.jpeg",
    location: "Panakeia Facility, AMTZ",
    date: "2024",
    description:
      "Practical advice on international standards (ISO 13485, CE, CDSCO) and software-hardware integration for tomorrow's medical device innovators.",
    tags: ["Career Guidance", "Quality Protocols", "Mentorship"],
    aspectRatio: "landscape",
  },
  {
    id: "student-visit-flowmeters",
    title: "Inspection of High-Precision Anesthesia Vaporizers & Flowmeters",
    category: "students",
    categoryLabel: "Academic & Student Visits",
    imageSrc: "/image/industrial-visit-by-btech-students6.jpeg",
    location: "Panakeia Assembly Floor",
    date: "2024",
    description:
      "Undergraduate researchers exploring mechanical flowmeters, fail-safe oxygen nitrous cutoffs, and patient circuit sterilization procedures.",
    tags: ["Precision Machining", "Safety Systems", "Assembly Inspection"],
    aspectRatio: "landscape",
  },
  {
    id: "student-visit-testing-bay",
    title: "Testing Bay Walkthrough for Biomedical Scholars",
    category: "students",
    categoryLabel: "Academic & Student Visits",
    imageSrc: "/image/industrial-visit-by-btech-students7.jpeg",
    location: "Panakeia Medisys Bay, AMTZ",
    date: "2024",
    description:
      "Students assembled at the testing and calibration bay, observing simulated patient breathing lungs and calibration testing rigs.",
    tags: ["Calibration Rigs", "Test Bay", "Student Walkthrough"],
    aspectRatio: "portrait",
  },

  // --- AWARDS & HONORS ---
  {
    id: "meta-vcci-award-plaque",
    title: "VCCI Award of Recognition 2024 Presented by Meta India",
    category: "awards",
    categoryLabel: "Awards & Honors",
    imageSrc: "/image/recognition-award-by-fb-meta1.jpeg",
    location: "VCCI Annual Excellence Gala",
    date: "22nd June 2024",
    description:
      "Panakeia Medtech conferred the prestigious VCCI Award of Recognition 2024 for 'Innovation in Medical Devices' presented by Ms. Sandhya Devanathan, Managing Director & Vice President, Meta India.",
    tags: ["Meta India", "Sandhya Devanathan", "VCCI Award", "Medical Device Innovation"],
    featured: true,
    aspectRatio: "landscape",
  },
  {
    id: "meta-vcci-stage-presentation",
    title: "Stage Presentation of Excellence Award by Meta Leadership",
    category: "awards",
    categoryLabel: "Awards & Honors",
    imageSrc: "/image/recognition-award-by-fb-meta2.jpeg",
    location: "Grand Ballroom, VCCI Gala",
    date: "22nd June 2024",
    description:
      "Panakeia Founder & Managing Director receiving the trophy onstage from Ms. Sandhya Devanathan (Meta India) and Vizagapatam Chamber of Commerce & Industry leadership.",
    tags: ["Stage Felicitation", "Meta Leadership", "Innovation Excellence"],
    featured: true,
    aspectRatio: "landscape",
  },
  {
    id: "meta-vcci-chamber-felicitation",
    title: "Chamber Leadership Felicitation for Healthcare Self-Reliance",
    category: "awards",
    categoryLabel: "Awards & Honors",
    imageSrc: "/image/recognition-award-by-fb-meta3.jpeg",
    location: "VCCI Annual Convention",
    date: "22nd June 2024",
    description:
      "Industry titans and chamber directors honoring Panakeia's pioneering 100% in-house critical care manufacturing in Andhra Pradesh.",
    tags: ["Industry Accolade", "VCCI", "Chamber of Commerce"],
    aspectRatio: "landscape",
  },
  {
    id: "meta-vcci-media-celebration",
    title: "Celebrating National Recognition in Critical Care Innovation",
    category: "awards",
    categoryLabel: "Awards & Honors",
    imageSrc: "/image/recognition-award-by-fb-meta4.jpeg",
    location: "VCCI Gala Venue",
    date: "22nd June 2024",
    description:
      "Panakeia leadership with the golden inscribed citation celebrating national acknowledgment of indigenous medical manufacturing excellence.",
    tags: ["Award Citation", "Healthcare Pioneer", "National Honor"],
    aspectRatio: "landscape",
  },
  {
    id: "vcci-plaque-isolated",
    title: "Official VCCI Gold-Inscribed Innovation Plaque",
    category: "awards",
    categoryLabel: "Awards & Honors",
    imageSrc: "/image/award-vcci-plaque.jpeg",
    location: "Visakhapatnam, India",
    date: "2024",
    description:
      "The official plaque presented to Panakeia Medtech Private Limited for Innovation in Medical Devices by the Vizagapatam Chamber of Commerce & Industry.",
    tags: ["Citation Plaque", "Gold Inscription", "Innovation Trophy"],
    aspectRatio: "landscape",
  },
  {
    id: "vcci-trophy-isolated",
    title: "VCCI Golden Medical Innovation Trophy",
    category: "awards",
    categoryLabel: "Awards & Honors",
    imageSrc: "/image/award-vcci-trophy.jpeg",
    location: "Visakhapatnam, India",
    date: "2024",
    description:
      "The prestigious golden sculpture trophy awarded for groundbreaking indigenous critical care medical engineering.",
    tags: ["Golden Trophy", "Excellence Award", "MedTech Honour"],
    aspectRatio: "landscape",
  },

  // --- DEALER & OT HANDOVER ---
  {
    id: "ot-workstation-commissioning",
    title: "Operation Theatre Clinical Commissioning & Dealer Handover",
    category: "dealers",
    categoryLabel: "Dealers & OT Handover",
    imageSrc: "/image/ot-workstation-installation.jpeg",
    location: "Multi-Specialty Surgical Hospital OT",
    date: "2024",
    description:
      "Panakeia clinical engineers completing installation, pressure calibration, and technical handover of the advanced Anaesthesia Workstation alongside the hospital's lead surgical team and regional medical equipment dealer.",
    tags: ["OT Handover", "Dealer Collaboration", "Surgeon Commissioning", "Clinical Team"],
    featured: true,
    aspectRatio: "landscape",
  },
];
