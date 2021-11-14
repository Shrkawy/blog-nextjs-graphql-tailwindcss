import { Post } from ".";

export interface Comment {
  name: string;
  email: string;
  comment: string;
  slug: Post["slug"];
  createdAt?: string;
}
