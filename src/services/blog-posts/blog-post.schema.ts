import { model, Document, Schema } from "mongoose";

export interface BlogPost {
  title: string;
  content: string;
  date: Date;
}

export const BlogPostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "blog-posts" }
);

export type BlogPostDocument = BlogPost & Document;
export const BlogPostModel = model<BlogPostDocument>("BlogPost", BlogPostSchema);
