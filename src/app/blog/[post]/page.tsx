import BlogPostLoadingSkeleton from "./skeleton";

interface BlogPostProps {
  post: string;
}

const BlogPost = ({ post }: BlogPostProps) => {
  console.log(post);
  return <BlogPostLoadingSkeleton />;
};

export default BlogPost;
