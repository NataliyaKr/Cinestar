import { useNavigate } from "react-router-dom";
import { useFetchBlogs } from "../../hook/useFetchBlogs";
import styles from "./blogList.module.css";

const BlogList = () => {
  const { blogs, blogIsLoading, blogError } = useFetchBlogs();
  const navigate = useNavigate();

  if (blogIsLoading) return <p>Loading..</p>;
  if (blogError) return <p>{blogError}</p>;

  return (
    <figure className={styles.container}>
      {blogs.map((blog) => (
        <div key={blog._id}>
          <img src={blog.image} alt="" />
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
          <button onClick={() => navigate(`/blog/${blog.id}`)}>Læs mere</button>
        </div>
      ))}
    </figure>
  );
};

export default BlogList;
