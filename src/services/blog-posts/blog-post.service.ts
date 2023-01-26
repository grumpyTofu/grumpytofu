import "server-only";

import { BlogPostModel } from "./blog-post.schema";

export class BlogPostService {
  private readonly blogPosts: typeof BlogPostModel;
  constructor() {
    this.blogPosts = BlogPostModel;
  }
  async findByIdAsync(id: string) {
    return this.blogPosts.findById(id).exec();
  }
}
