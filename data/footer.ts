interface Image {
  imgPath: string;
  alt: string;
  width?: string;
  height?: string;
}

interface FooterLink {
  icon?: Image;
  text?: string;
  href: string;
}

interface Category {
  title: string | Image;
  links: FooterLink[];
}

interface FooterColumn {
  categories: Category[];
}

export interface Language {
  language: string;
  href: string;
}

interface FooterData {
  columns: FooterColumn[];
  languages: Language[];
  socials: FooterLink[];
  appStoreLinks: FooterLink[];
  securityLogos: FooterLink[];
  statementLinks: FooterLink[];
  allRightsReserved: string;
  accessibilityLink: FooterLink;
}

export const footerData: FooterData = {
  columns: [
    {
      categories: [
        {
          title: {
            imgPath: "monday-com-logo.svg",
            alt: "Monday logo",
            width: "127px",
            height: "42px",
          },
          links: [
            {
              text: "Pricing",
              href: "#",
            },
            {
              text: "Contact us",
              href: "#",
            },
            {
              text: "Templates",
              href: "#",
            },
            {
              text: "SMB",
              href: "#",
            },
            {
              text: "Enterprise",
              href: "#",
            },
            {
              text: "Nonprofits",
              href: "#",
            },
            {
              text: "Apps marketplace",
              href: "#",
            },
            {
              text: "24/7 support",
              href: "#",
            },
          ],
        },
      ],
    },
    {
      categories: [
        {
          title: "Features",
          links: [
            {
              text: "Docs",
              href: "#",
            },
            {
              text: "Integrations",
              href: "#",
            },
            {
              text: "Automations",
              href: "#",
            },
            {
              text: "Files",
              href: "#",
            },
            {
              text: "Dashboards",
              href: "#",
            },
            {
              text: "Kanban",
              href: "#",
            },
            {
              text: "Gantt",
              href: "#",
            },
          ],
        },
      ],
    },
    {
      categories: [
        {
          title: "monday products",
          links: [
            {
              icon: {
                imgPath: "work-management.png",
                alt: "monday work management",
                width: "18px",
                height: "18px",
              },
              text: "monday work management",
              href: "#",
            },
            {
              icon: {
                imgPath: "sales.png",
                alt: "monday sales",
                width: "18px",
                height: "18px",
              },
              text: "monday sales CRM",
              href: "#",
            },
            {
              icon: {
                imgPath: "marketer.png",
                alt: "monday marketer",
                width: "18px",
                height: "18px",
              },
              text: "monday marketer",
              href: "#",
            },
            {
              icon: {
                imgPath: "projects.png",
                alt: "monday projects",
                width: "18px",
                height: "18px",
              },
              text: "monday projects",
              href: "#",
            },
            {
              icon: {
                imgPath: "dev.png",
                alt: "monday dev",
                width: "18px",
                height: "18px",
              },
              text: "monday dev",
              href: "#",
            },
          ],
        },
        {
          title: "More by monday.com",
          links: [
            {
              icon: {
                imgPath: "canvas.png",
                alt: "Canvas",
                width: "18px",
                height: "18px",
              },
              text: "Canvas",
              href: "#",
            },
            {
              icon: {
                imgPath: "workforms.png",
                alt: "WorkForms",
                width: "18px",
                height: "18px",
              },
              text: "WorkForms",
              href: "#",
            },
          ],
        },
      ],
    },
    {
      categories: [
        {
          title: "Use cases",
          links: [
            {
              text: "Marketing",
              href: "#",
            },
            {
              text: "Project management",
              href: "#",
            },
            {
              text: "Sales",
              href: "#",
            },
            {
              text: "Developers",
              href: "#",
            },
            {
              text: "HR",
              href: "#",
            },
            {
              text: "IT",
              href: "#",
            },
            {
              text: "Operations",
              href: "#",
            },
            {
              text: "Construction",
              href: "#",
            },
            {
              text: "Education",
              href: "#",
            },
          ],
        },
      ],
    },
    {
      categories: [
        {
          title: "Company",
          links: [
            {
              text: "About us",
              href: "#",
            },
            {
              text: "Careers - We're hiring!",
              href: "#",
            },
            {
              text: "monday-U",
              href: "#",
            },
            {
              text: "Press",
              href: "#",
            },
            {
              text: "Customer stories",
              href: "#",
            },
            {
              text: "Become a partner",
              href: "#",
            },
            {
              text: "Sustainability & ESG",
              href: "#",
            },
            {
              text: "Affiliates",
              href: "#",
            },
            {
              text: "Digital Lift",
              href: "#",
            },
            {
              text: "Investor relations",
              href: "#",
            },
          ],
        },
      ],
    },
    {
      categories: [
        {
          title: "Resources",
          links: [
            {
              text: "Help Center",
              href: "#",
            },
            {
              text: "Community",
              href: "#",
            },
            {
              text: "Blog",
              href: "#",
            },
            {
              text: "Webinars",
              href: "#",
            },
            {
              text: "Startup for startup",
              href: "#",
            },
            {
              text: "Global events",
              href: "#",
            },
            {
              text: "App development",
              href: "#",
            },
            {
              text: "Find a partner",
              href: "#",
            },
            {
              text: "Compare",
              href: "#",
            },
          ],
        },
      ],
    },
  ],
  languages: [
    {
      language: "English",
      href: "#",
    },
    {
      language: "Español",
      href: "#",
    },
    {
      language: "Français",
      href: "#",
    },
    {
      language: "Deutsch",
      href: "#",
    },
    {
      language: "Português",
      href: "#",
    },
    {
      language: "Nederlands",
      href: "#",
    },
    {
      language: "Italiano",
      href: "#",
    },
    {
      language: "Pyccкий",
      href: "#",
    },
    {
      language: "日本語",
      href: "#",
    },
    {
      language: "한국어",
      href: "#",
    },
    {
      language: "Türkçe",
      href: "#",
    },
    {
      language: "Svenska",
      href: "#",
    },
    {
      language: "Polski",
      href: "#",
    },
    {
      language: "繁體中文",
      href: "#",
    },
  ],
  socials: [
    {
      icon: {
        imgPath: "twitter.svg",
        alt: "Twitter icon",
        width: "24px",
        height: "24px",
      },
      href: "#",
    },
    {
      icon: {
        imgPath: "linkedin.svg",
        alt: "LinkedIn icon",
        width: "24px",
        height: "24px",
      },
      href: "#",
    },
    {
      icon: {
        imgPath: "facebook.svg",
        alt: "Facebook icon",
        width: "24px",
        height: "24px",
      },
      href: "#",
    },
    {
      icon: {
        imgPath: "youtube.svg",
        alt: "Youtube icon",
        width: "24px",
        height: "24px",
      },
      href: "#",
    },
    {
      icon: {
        imgPath: "instagram.svg",
        alt: "Instagram icon",
        width: "24px",
        height: "24px",
      },
      href: "#",
    },
    {
      icon: {
        imgPath: "tiktok.svg",
        alt: "Tiktok icon",
        width: "24px",
        height: "24px",
      },
      href: "#",
    },
  ],
  appStoreLinks: [
    {
      icon: {
        imgPath: "google-play.svg",
        alt: "Google Play icon",
        width: "135px",
        height: "40px",
      },
      href: "#",
    },
    {
      icon: {
        imgPath: "app-store.svg",
        alt: "App Store icon",
        width: "120px",
        height: "40px",
      },
      href: "#",
    },
  ],
  securityLogos: [
    {
      icon: {
        imgPath: "gdpr-logo.png",
        alt: "GDPR logo",
        width: "32px",
        height: "32px",
      },
      href: "#",
    },
    {
      icon: {
        imgPath: "iso-logo.png",
        alt: "ISO logo",
        width: "32px",
        height: "32px",
      },
      href: "#",
    },
    {
      icon: {
        imgPath: "soc-logo.png",
        alt: "SOC logo",
        width: "32px",
        height: "32px",
      },
      href: "#",
    },
    {
      icon: {
        imgPath: "hipaa-logo.png",
        alt: "Hipaa logo",
        width: "39px",
        height: "32px",
      },
      href: "#",
    },
  ],
  statementLinks: [
    {
      text: "Security",
      href: "#",
    },
    {
      text: "Terms and privacy",
      href: "#",
    },
    {
      text: "Privacy policy",
      href: "#",
    },
    {
      text: "Status",
      href: "#",
    },
  ],
  allRightsReserved: "All Rights Reserved © monday.com",
  accessibilityLink: {
    icon: {
      imgPath: "accessibility.svg",
      alt: "accessibility icon",
      width: "21px",
      height: "21px",
    },
    text: "Accessibility statement",
    href: "#",
  },
};
