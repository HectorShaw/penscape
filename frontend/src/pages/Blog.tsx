import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";

export const Blog = () => {
  const { id } = useParams()
  const { loading, blog } = useBlog({
    id: id || ""
  });
  if (loading) return <div>
    <BlogSkeleton />
    <BlogSkeleton />
    <BlogSkeleton />
  </div>;
  return (
    <div>
      <div className="flex justify-center">
        <div className="max-w-screen-md w-screen">
          <div className="text-3xl font-extrabold">{blog?.title}</div>
          <div className="text-slate-400">By {blog?.author.name}</div>
          <div className="pt-4">{blog?.content}</div>
        </div>
      </div>
    </div>
  );
};
