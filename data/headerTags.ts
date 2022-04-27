export type Tag = {
  title?: string;
  imgSrc?: string;
  color?: string;
};

export interface TagList {
  tags: Tag[];
}

export const headerTags: TagList = {
  tags: [
    {
      title: "Creative & design",
      imgSrc: "creative-design.png",
      color: "#ff158a",
    },
    {
      title: "IT",
      imgSrc: "it.png",
      color: "#a25ddc",
    },
    {
      title: "Software development",
      imgSrc: "dev.png",
      color: "#00c875",
    },
    {
      title: "Marketing",
      imgSrc: "marketing.png",
      color: "#f04095",
    },
    {
      title: "Project management",
      imgSrc: "pmo.png",
      color: "#ff9900",
    },
    {
      title: "Sales & CRM",
      imgSrc: "crm.png",
      color: "#00d2d2",
    },
    {
      title: "Task management",
      imgSrc: "task.png",
      color: "#579bfc",
    },
    {
      title: "HR",
      imgSrc: "hr.png",
      color: "#ff7575",
    },
    {
      title: "Operations",
      imgSrc: "operations.png",
      color: "#4eccc6",
    },
  ],
};
