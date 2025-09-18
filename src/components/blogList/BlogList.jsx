import { useNavigate } from "react-router-dom";
import { useFetchBlogs } from "../../hook/useFetchBlogs";
import styles from "./blogList.module.css";

const BlogList = () => {
  const { blogs, blogIsLoading, blogError } = useFetchBlogs();
  const navigate = useNavigate();

  if (blogIsLoading) return <p>Loading..</p>;
  if (blogError) return <p>{blogError}</p>;

  return (
    <figure className={styles.blogList}>
      {blogs.map((blog) => (
        <div key={blog._id} className={styles.blogCard}>
          <img src={blog.image} alt="" className={styles.blogImg} />
          <h2 className={styles.blogTitle}>{blog.title}</h2>
          <p className={styles.blogText}>{blog.description}</p>
          <button className={styles.blogBtn} onClick={() => navigate(`/blog/${blog.id}`)}>Læs mere</button>
        </div>
      ))}
    </figure>
  );
};

export default BlogList;
