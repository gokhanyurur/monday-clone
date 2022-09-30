interface Card {
  logoPath: string;
  logoText: string;
  color: string;
  checkmarkColor?: string;
  description: string;
  features: string[];
}

interface MondayProducts {
  data: Card[];
}

export const mondayProductsData: MondayProducts = {
  data: [
    {
      logoPath: "work-management.png",
      logoText: "For professionals and teams managing tasks & workflows",
      color: "#6c6cff",
      checkmarkColor:
        "invert(41%) sepia(60%) saturate(3425%) hue-rotate(224deg) brightness(103%) contrast(104%)",
      description:
        "Manage tasks and workflows to fuel team collaboration and productivity at scale.",
      features: [
        "Task management",
        "Project management",
        "Automated workflows",
        "Build your own",
      ],
    },
    {
      logoPath: "marketer.png",
      logoText: "For marketing and creative professionals and teams",
      color: "#f04095",
      checkmarkColor:
        "invert(52%) sepia(96%) saturate(4030%) hue-rotate(306deg) brightness(94%) contrast(100%)",
      description:
        "Manage and collaborate on marketing and creative projects to launch campaigns.",
      features: [
        "Content calendar",
        "Campaign tracking",
        "Digital asset management",
        "Marketing projects",
      ],
    },
    {
      logoPath: "sales-crm.png",
      logoText: "For sales professionals and customer-facing teams",
      color: "#00d2d2",
      checkmarkColor:
        "invert(59%) sepia(34%) saturate(2402%) hue-rotate(136deg) brightness(100%) contrast(102%)",
      description:
        "Track and manage all aspects of your sales cycle, customer data, and more in one place.",
      features: [
        "Contact management",
        "Sales pipeline",
        "Post-sales management",
        "Lead management",
      ],
    },
    {
      logoPath: "projects.png",
      logoText: "For PMO teams and project manager professionals",
      color: "#ff9900",
      checkmarkColor:
        "invert(52%) sepia(87%) saturate(673%) hue-rotate(359deg) brightness(104%) contrast(102%)",
      description:
        "Plan, collaborate, and execute on every project and portfolio to reach your goals, faster.",
      features: [
        "Advanced projects",
        "Critical path",
        "Portfolio management",
        "Program management",
      ],
    },
    {
      logoPath: "dev.png",
      logoText: "For product and development professionals and teams",
      color: "#00c875",
      checkmarkColor:
        "invert(51%) sepia(82%) saturate(1015%) hue-rotate(114deg) brightness(94%) contrast(102%)",
      description:
        "Build agile workflows to drive impact across your product, design, and R&D teams.",
      features: [
        "Roadmap planning",
        "Scrum & Kanban",
        "Bug tracking",
        "Sprint dashboards",
      ],
    },
  ],
};
