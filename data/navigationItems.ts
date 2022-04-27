export type DropdownSectionItem = {
  url?: string;
  icon?: string;
  title?: string;
  description?: string;
  badgeTxt?: string;
};

export type SeeMore = {
  text?: string;
  url?: string;
};

export type DropdownSection = {
  title?: string;
  wide?: boolean;
  items?: DropdownSectionItem[];
  seeMore?: SeeMore;
};

export type NavItem = {
  isDropdown?: boolean;
  isOpened?: boolean;
  title?: string;
  sections?: DropdownSection[];
  url?: string;
};

export interface NavList {
  navRightSide: NavItem[];
  navLeftSide: NavItem[];
}

export const navMenuItems: NavList = {
  navRightSide: [
    {
      title: "Contact sales",
      url: "#",
    },
    {
      title: "Log in",
      url: "#",
    },
  ],
  navLeftSide: [
    {
      isDropdown: true,
      isOpened: false,
      title: "Product",
      sections: [
        {
          title: "Overview",
          items: [
            {
              url: "#",
              icon: "checklist.svg",
              title: "Product overview",
              description:
                "Learn more about the platform, main features, and benefits",
            },
            {
              url: "#",
              icon: "puzzle.svg",
              title: "Apps marketplace",
              description:
                "Explore ready-made apps to expand the monday.com Work OS",
            },
            {
              url: "#",
              icon: "bag.svg",
              title: "Customer Stories",
              description:
                "Learn how our customers achieve success using monday.com",
            },
          ],
        },
        {
          title: "Features",
          wide: true,
          items: [
            {
              url: "#",
              icon: "doc.svg",
              title: "Docs",
              description:
                "Collaborate, connect, and execute ideas and workflows",
            },
            {
              url: "#",
              icon: "socket.svg",
              title: "Integrations",
              description:
                "Connect your team's existing tools to get more work done",
            },
            {
              url: "#",
              icon: "robot-head.svg",
              title: "Automations",
              description: "Set up customizable automations within minutes",
            },
            {
              url: "#",
              icon: "dashboard.svg",
              title: "Dashboards",
              description:
                "Simplify decision making with real-time data insights",
            },
            {
              url: "#",
              icon: "sections-vertical.svg",
              title: "Kanban",
              description:
                "Prioritize tasks and balance demands according to capacity",
            },
            {
              url: "#",
              icon: "sections-horizontal.svg",
              title: "Gantt",
              description:
                "Visualize project milestones and dependencies all in one place",
            },
          ],
        },
        {
          title: "More by monday.com",
          items: [
            {
              url: "#",
              icon: "forms.svg",
              title: "WorkForms",
              description:
                "Streamline requests and collect any data with customizable forms",
              badgeTxt: "Beta",
            },
            {
              url: "#",
              icon: "paper.svg",
              title: "Canvas",
              description:
                "Bring your ideas to life on a collaborative real-time whiteboard",
              badgeTxt: "Beta",
            },
          ],
        },
      ],
    },
    {
      isDropdown: true,
      isOpened: false,
      title: "Solutions",
      sections: [
        {
          title: "Team",
          wide: true,
          items: [
            {
              url: "#",
              icon: "creative.svg",
              title: "Marketing and creative",
              description: "Collaborate and manage campaigns to drive impact",
            },
            {
              url: "#",
              icon: "headset.svg",
              title: "Sales and CRM",
              description:
                "Run your entire sales pipeline and CRM in one place",
            },
            {
              url: "#",
              icon: "tool.svg",
              title: "IT",
              description:
                "Manage your IT operations with better control and efficiency",
            },
            {
              url: "#",
              icon: "code-tag.svg",
              title: "Software development",
              description: "Sprint through every development process, your way",
            },
            {
              url: "#",
              icon: "conversation.svg",
              title: "HR",
              description:
                "Structure your HR processes for recruitment and onboarding",
            },
            {
              url: "#",
              icon: "gear.svg",
              title: "Operations",
              description:
                "Streamline and scale your business operations in one workspace",
            },
          ],
        },
        {
          title: "Workflow",
          items: [
            {
              url: "#",
              icon: "management.svg",
              title: "Project management",
              description:
                "Plan, track, and manage any project from start to finish",
            },
            {
              url: "#",
              icon: "inventory.svg",
              title: "Inventory tracking",
              description:
                "Monitor your stock from point of collection to final delivery",
            },
            {
              url: "#",
              icon: "remote-work.svg",
              title: "Remote work",
              description:
                "Stay productive and collaborative, wherever you are",
            },
          ],
          seeMore: {
            text: "See all workflows",
            url: "#",
          },
        },
        {
          title: "Business type",
          items: [
            {
              url: "#",
              icon: "buildings.svg",
              title: "Enterprise",
              description: "Learn more about our enterprise-grade features",
            },
            {
              url: "#",
              icon: "small-business.svg",
              title: "Small-medium business",
              description: "Run all aspects of your business in one place",
            },
          ],
        },
      ],
    },
    {
      isDropdown: false,
      title: "Templates",
      url: "#",
    },
    {
      isDropdown: false,
      title: "Pricing",
      url: "#",
    },
  ],
};
