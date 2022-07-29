export type Feedback = {
  imgPath?: string;
  comment?: string;
  name?: string;
  position?: string;
  company?: string;
};

export type Button = {
  label?: string;
  url?: string;
};

export type Review = {
  id?: string;
  title?: string;
  description?: string;
  button?: Button;
  feedback?: Feedback;
};

export type CircleItem = {
  imgPath?: string;
  additionalClass?: string;
  alt?: string;
};

export type Galaxy = {
  circleSize?: string;
  circleItems?: CircleItem[];
};

export interface scrollParallax {
  paragraphs: Review[];
  galaxy: Galaxy[];
}

export const scrollParallaxData: scrollParallax = {
  paragraphs: [
    {
      title: "Streamline your work for <b>maximum productivity</b>",
      description:
        "Centralize all your work, processes, tools, and files into one Work OS. Connect teams, bridge silos, and maintain one source of truth across your organization.",
      feedback: {
        imgPath: "jane.png",
        comment:
          "“We use monday.com for a plethora of use cases, the opportunities this platform provides are limitless.“",
        name: "Jane Tham",
        position: "VP of Collaboration Technologies",
        company: "Universal Music Group",
      },
    },
    {
      title: "Bring teams together to <b>drive business impact</b>",
      description:
        "Collaborate effectively organization-wide to get a clear picture of all your work. Stay in the loop with easy-to-use automations and real-time notifications.",
      feedback: {
        imgPath: "sarah.png",
        comment:
          "“Since adopting monday.com, our global marketing department has seen a 40% improvement in cross-team collaboration.“",
        name: "Sarah Pharr",
        position: "AVP Marketing",
        company: "Genpact",
      },
    },
    {
      id: "stage-1",
      title: "Stay on track to <b>reach your goals, faster</b>",
      description:
        "Get a high-level overview of your organization with customizable dashboards. Make confident decisions and easily scale workflows for your evolving needs.",
      button: {
        label: "Get Started",
        url: "#",
      },
      feedback: {
        imgPath: "baptiste.png",
        comment:
          "“monday.com allows banks to be synchronized between the top-level management figures and local KPIs.“",
        name: "Baptiste Ancey",
        position: "Head of Innovation",
        company: "Indosuez Wealth Management",
      },
    },
  ],
  galaxy: [
    {
      circleSize: "small",
      circleItems: [
        {
          imgPath: "small-circle/gmail.png",
          alt: "Gmail",
        },
        {
          imgPath: "small-circle/linkedin.png",
          alt: "LinkedIn",
        },
        {
          imgPath: "small-circle/harvest.png",
          alt: "Harvest",
        },
      ],
    },
    {
      circleSize: "medium",
      circleItems: [
        {
          imgPath: "medium-circle/zoom.png",
          additionalClass: "item-inner",
          alt: "Zoom",
        },
        {
          imgPath: "medium-circle/facebook_ads.png",
          additionalClass: "item-outer",
          alt: "Facebook-ads",
        },
      ],
    },
    {
      circleSize: "large",
      circleItems: [
        {
          imgPath: "large-circle/mailchimp.png",
          alt: "Mailchimp",
        },
        {
          imgPath: "large-circle/jira.png",
          alt: "Jira",
        },
        {
          imgPath: "large-circle/salesforce.png",
          alt: "Salesforce",
        },
        {
          imgPath: "large-circle/jotform.png",
          alt: "Jotform",
        },
        {
          imgPath: "large-circle/dropbox.png",
          alt: "Dropbox",
        },
      ],
    },
  ],
};
