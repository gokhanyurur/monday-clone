interface Card {
  authorPhotoPath: string;
  quoteText: string;
  nameAndJob: string;
  authorLogoPath?: string;
}

interface SuccessStories {
  data: Card[];
}

export const successStoriesData: SuccessStories = {
  data: [
    {
      authorPhotoPath: "oscar_image.png",
      quoteText:
        "monday.com Work OS saves us about 1,850 hrs of staff time and somewhere in the range of $50,000 a month.”",
      nameAndJob:
        "Stefana Muller | Senior Director, CTO Product and Program Office",
      authorLogoPath: "oscar_logo.png",
    },
    {
      authorPhotoPath: "the_student_hotel_image.png",
      quoteText:
        "Now that we have monday.com Work OS as the backbone of our organization I feel that I have an overview I can trust.”",
      nameAndJob: "Charlie MacGregor | Founder & CEO",
      authorLogoPath: "the_student_hotel_logo.png",
    },
    {
      authorPhotoPath: "telefonica_image.png",
      quoteText:
        "With monday.com, we’re 30% more efficient at delivering hundreds of campaigns seen by millions of customers.”",
      nameAndJob: "Tye Rapley-Hawkins | Head of Delivery",
      authorLogoPath: "telefonica_logo.png",
    },
    {
      authorPhotoPath: "zippo_image.png",
      quoteText:
        "monday.com Work OS has enabled our group to launch more product categories and expand into more markets in way less time.”",
      nameAndJob: "Chris Funk | Director of Product Innovation",
      authorLogoPath: "zippo.png",
    },
    {
      authorPhotoPath: "nissan_image.png",
      quoteText:
        "monday.com has given me the confidence because when I walk into the room I know that when upper management asks for a certain piece of information I’m able to quickly provide it for them.”",
      nameAndJob:
        "Kenny Wallace | Vendor Tooling Engineer, Nissan North America",
    },
  ],
};
