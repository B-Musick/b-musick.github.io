import { blogFiles } from "../data/blogs.json";
import DisplayCard from "../components/DisplayCard";
import { DisplayCardOrientation } from "../lib/enums";

function BlogPage() {
  return (
    <main className="w-full h-full">
      <div className="h-screen flex flex-col pt-28 overflow-scroll items-center w-full">
        {blogFiles.map((blog) => (
          <DisplayCard
            key={blog.slug}
            item={blog}
            baseUrl="blogs"
            orientation={DisplayCardOrientation.Vertical}
            isResponsive={true}
          />
        ))}
      </div>
    </main>
  );
}

export default BlogPage;
