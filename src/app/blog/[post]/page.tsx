import BlogPost from "./post";
import { Suspense, use } from "react";
import BlogPostLoadingSkeleton from "./skeleton";

interface BlogPostPageProps {
  params: { post: string };
}

const BlogPostPage = ({ params }: BlogPostPageProps) => (
  <Suspense fallback={<BlogPostLoadingSkeleton />}>
    <BlogPost post={params.post} />
  </Suspense>
);

export default BlogPostPage;
