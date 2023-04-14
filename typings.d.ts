interface StrapiBody {
  _createdAt: string;
  _id: string;
  _updatedAt: string;
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}
