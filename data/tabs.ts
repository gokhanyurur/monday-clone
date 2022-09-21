interface tabVideo {
  videoPath: string;
  videoPoster?: string;
}

interface tabLink {
  label: string;
  url: string;
}

export interface tabContent {
  video: tabVideo;
  paragraph: string;
  link?: tabLink;
}

export interface tabTitle {
  title: string;
  iconPath?: string;
}

export interface tabData {
  tab: tabTitle;
  content: tabContent;
}

interface tabs {
  data: tabData[];
}

export const tabsData: tabs = {
  data: [
    {
      tab: {
        title: "Boards",
        iconPath: "board.svg",
      },
      content: {
        video: {
          videoPath: "7_status.mp4",
          videoPoster: "7_status.png",
        },
        paragraph:
          "Everything starts with a visual board — the core of monday.com Work OS. Tailor it your way and manage anything from projects to departments.",
      },
    },
    {
      tab: {
        title: "Views",
        iconPath: "views.svg",
      },
      content: {
        video: {
          videoPath: "1_Views.mp4",
          videoPoster: "1_Views.png",
        },
        paragraph:
          "Visualize and plan your work more efficiently with multiple views: Kanban board, calendar, timeline, Gantt chart, and more.",
      },
    },
    {
      tab: {
        title: "Dashboards",
        iconPath: "dashboard.svg",
      },
      content: {
        video: {
          videoPath: "2_Dashboards.mp4",
          videoPoster: "2_Dashboards.png",
        },
        paragraph:
          "Get the insights you need to make decisions with confidence. Keep track of progress, timelines, and budgets with custom dashboards.",
        link: {
          label: "Learn more",
          url: "#",
        },
      },
    },
    {
      tab: {
        title: "Integrations",
        iconPath: "socket.svg",
      },
      content: {
        video: {
          videoPath: "4_Integrations.mp4",
          videoPoster: "4_Integrations.png",
        },
        paragraph:
          "Connect monday.com with all your favorite tools and get more work done. Integrate Slack, Dropbox, Adobe Creative Cloud, and more.",
        link: {
          label: "Learn more",
          url: "#",
        },
      },
    },
    {
      tab: {
        title: "Automations",
        iconPath: "robot-head.svg",
      },
      content: {
        video: {
          videoPath: "3_Automations.mp4",
          videoPoster: "3_Automations.png",
        },
        paragraph:
          "Streamline processes to focus on the work that matters. Choose from a variety of automation recipes or create your own in minutes.",
        link: {
          label: "Learn more",
          url: "#",
        },
      },
    },
    {
      tab: {
        title: "Apps",
        iconPath: "puzzle.svg",
      },
      content: {
        video: {
          videoPath: "5_Apps.mp4",
          videoPoster: "5_Apps.png",
        },
        paragraph:
          "Expand the capabilities of your Work OS with monday apps. Enhance your workflows with custom views, widgets, integrations, and more.",
        link: {
          label: "Learn more",
          url: "#",
        },
      },
    },
    {
      tab: {
        title: "Docs",
        iconPath: "doc.svg",
      },
      content: {
        video: {
          videoPath: "6_Docs.mp4",
          videoPoster: "6_Docs.png",
        },
        paragraph:
          "Transform text into action items, in just a few clicks. Connect, collaborate, and execute ideas and workflows in real-time from any doc.",
        link: {
          label: "Learn more",
          url: "#",
        },
      },
    },
  ],
};
