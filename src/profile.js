export const profile = {
  name: "Tshepo Selomo",
  fullName: "Tshepo Simon Selomo",
  givenName: "Tshepo",
  familyName: "Selomo",
  monogram: "TS",
  role: "Junior Software Developer",
  location: "South Africa",
  email: "tsheposelomo5405@gmail.com",
  phone: "066 002 3685",
  phoneHref: "tel:+27660023685",
  github: "https://github.com/TshepoSelomo",
  linkedin: "https://www.linkedin.com/in/tshepo-simon-selomo-0b641a227",
  status: "Open to junior and intermediate developer roles",
  intro:
    "I build web applications with Angular, TypeScript, C#, and SQL Server. Since 2024 I have worked on real business systems — interfaces, REST APIs, databases, debugging, and deployment.",
  aboutTitle:
    "Angular-focused junior developer, with SQL Server and C#/.NET behind the interface.",
  about: [
    "I have a National Diploma in Information Technology and I am an AWS Cloud Practitioner. Angular is the work I know best. Alongside it I use TypeScript, JavaScript, SQL Server, C#/.NET, and REST APIs on live applications.",
    "I worked as a junior developer at TTCH Technologies through 2024, then joined Unplugg IT in 2025. There I build and maintain interfaces, connect them to backend APIs, work in SQL Server, and trace problems across the frontend, the API, and the database.",
  ],
  facts: [
    { label: "Based in", value: "South Africa" },
    { label: "Focus", value: "Angular frontend" },
    { label: "Also", value: "C# / .NET · SQL Server" },
    { label: "Education", value: "National Diploma in IT" },
    { label: "Certificate", value: "AWS Cloud Practitioner" },
  ],
  skillGroups: [
    {
      label: "Frontend",
      items: "Angular, TypeScript, JavaScript, HTML5, CSS3",
    },
    {
      label: "Backend",
      items: "C#, .NET, ASP.NET Core, REST APIs",
    },
    {
      label: "Data",
      items: "SQL Server, SQL, tables, joins, stored procedures",
    },
    {
      label: "Practice",
      items: "Git, GitHub, debugging, testing, IIS, AWS Cloud Practitioner",
    },
  ],
  contactTitle: "Open to junior and intermediate developer roles.",
  socials: [
    { label: "Email", href: "mailto:tsheposelomo5405@gmail.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/tshepo-simon-selomo-0b641a227" },
    { label: "GitHub", href: "https://github.com/TshepoSelomo" },
  ],
};

export const skills = [
  "Angular",
  "TypeScript",
  "JavaScript",
  "C#",
  "ASP.NET Core",
  "SQL Server",
  "REST APIs",
  "AWS",
  "Git",
];

export const roles = [
  {
    period: "2025 — now",
    role: "Software Developer",
    company: "Unplugg IT",
    points: [
      "Develop and maintain Angular interfaces: dashboards, forms, tables, and admin screens for inventory and insurance applications.",
      "Integrate REST APIs and work with C# and .NET backends, including testing endpoints and tracing HTTP errors.",
      "Write SQL against Microsoft SQL Server — tables, relationships, joins, stored procedures, and data problems that block features.",
      "Debug existing codebases and support deployment and configuration of the web applications.",
    ],
  },
  {
    period: "2024",
    role: "Junior Developer",
    company: "TTCH Technologies",
    note: "Junior developer from January to December 2024, focused on front-end delivery.",
    points: [
      "Built client websites from the page layout through to the live front end.",
      "Developed the Diarabile Projects site, including services, team, accreditations, and the contact form.",
      "Developed the Blaque Orchids Group site for construction, facilities maintenance, and security.",
      "Built the Vico.net talent portal screens for sign-in and profile creation.",
    ],
  },
  {
    period: "Certificate",
    role: "AWS Certified Cloud Practitioner",
    company: "",
  },
  {
    period: "Qualification",
    role: "National Diploma in Information Technology",
    company: "",
    note: "Academic foundation for the software development work.",
  },
];

export const projects = [
  {
    title: "Inventory Management System",
    kind: "Angular · C#/.NET · SQL Server",
    blurb:
      "Inventory system for Unplugg IT covering stock, equipment tracking, and branch-based access. I built Angular screens, integrated APIs, shaped the relational data, and worked on stock transfers, reporting, and availability.",
    image: "/inventory.jpg",
    alt: "Warehouse aisle with stocked shelves and a barcode scanner",
  },
  {
    title: "My Life Insurer",
    kind: "Angular · TypeScript · REST APIs",
    blurb:
      "Insurance web application. I built Angular interfaces for login and OTP, connected them to backend APIs, and worked on dashboard, policy, payment, and navigation flows.",
    image: "/insurer.jpg",
    alt: "A quiet living room with a laptop, house keys, and a plant",
  },
  {
    title: "Grave Management System",
    kind: "Angular · Ionic · Capacitor",
    blurb:
      "Angular and Ionic application for managing graves, sections, and types. I built the interfaces and navigation, and worked with Capacitor in an Android development setup.",
    image: "/memorial.jpg",
    alt: "A quiet green memorial garden with trees and a gravel path",
  },
  {
    title: "Funeral Web / UIS",
    kind: "ASP.NET MVC · C# · SQL Server",
    blurb:
      "Maintained and enhanced an existing funeral services application, working in ASP.NET MVC, C#, and SQL Server.",
    image: "/farewell.jpg",
    alt: "White lilies on a stone ledge in a bright, calm hall",
  },
  {
    title: "Diarabile Projects",
    kind: "Junior developer · TTCH",
    year: "2024",
    blurb:
      "Company website for a construction, supply, and development business. I built the public site, including services, the team, accreditations, and the contact form.",
    image: "/diarabile-cover.jpg",
    alt: "Homepage of the Diarabile Projects website",
    url: "https://www.diarabileprojects.co.za/",
  },
  {
    title: "Blaque Orchids Group",
    kind: "Junior developer · TTCH",
    year: "2024",
    blurb:
      "Group website for construction, facilities maintenance, and security. I built the pages that present the divisions, credentials, and contact details.",
    image: "/blaque-cover.jpg",
    alt: "Homepage of the Blaque Orchids Group website",
    url: "https://www.blaqueorchidsgroup.co.za/",
  },
  {
    title: "Vico.net Talent",
    kind: "Junior developer · TTCH",
    year: "2024",
    blurb:
      "Talent portal for Vico.net, a virtual collaboration network. I built the front end for signing in and creating a profile.",
    image: "/viconet-cover.jpg",
    alt: "Talent login page for Vico.net",
    url: "https://talent.viconetgroup.com/",
  },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
