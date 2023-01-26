import { Section, Typography } from "@portfolio/components";
import { BlogPostService } from "@portfolio/services/blog-posts/blog-post.service";
import { use } from "react";

interface BlogPostProps {
  post: string;
}

const BlogPost = ({ post }: BlogPostProps) => {
  const blogPostService = new BlogPostService();
  const blogPost = use(blogPostService.findByIdAsync(post));

  return (
    blogPost && (
      <Section id="blog-post">
        <Typography variant="h2" className="mb-6">{blogPost.title}</Typography>
        <Typography>{blogPost.content}</Typography>
      </Section>
    )
  );
};

export default BlogPost;
