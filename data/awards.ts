interface Card {
  logoPath: string;
  title: string;
  review: string;
}

interface Awards {
  data: Card[];
}

export const awardsData: Awards = {
  data: [
    {
      logoPath: "trust-radius.png",
      title: "Voted best feature set, relationship and value",
      review: "“This is the best no-code platform I've ever seen.”",
    },
    {
      logoPath: "forrester.png",
      title: "345% uplift in ROI",
      review: "The Total Economic Impact™ Report",
    },
    {
      logoPath: "capterra-shortlist.png",
      title: "Shortlisted in over 8 software categories",
      review: "“The perfect organizer and team builder.”",
    },
    {
      logoPath: "g2.png",
      title: "Market leader across 18 categories",
      review: '"Flexible product with near endless possibilities."',
    },
  ],
};
