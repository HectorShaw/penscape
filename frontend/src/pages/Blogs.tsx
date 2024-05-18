import { BlogCard } from "../components/BlogCard";
import { Appbar } from "../components/Appbar";
import { useBlogs } from "../hooks";


export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {return <div>Loading...</div>;}

  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div>
          {Array.isArray(blogs) && blogs.length > 0 ? (
            blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                id={blog.id}
                authorName={blog.author?.name || "Anon"}
                title={blog.title}
                content={blog.content}
                publishedDate={"22/11/2024"}
              />
            ))
          ) : (
            <div>No blogs available</div>
          )}
        </div>
      </div>
    </div>
  );
};
