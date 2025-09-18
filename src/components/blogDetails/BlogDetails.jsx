import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetchBlogs } from "../../hook/useFetchBlogs";
import styles from "./blogDetails.module.css";

const BlogDetails = () => {
  const { id } = useParams();
  const { singleBlog, blogIsLoading, blogError, fetchBlogById } =
    useFetchBlogs();

  useEffect(() => {
    fetchBlogById(id);
  }, [id]);

  if (blogIsLoading) return <p>Loading..</p>;
  if (blogError) return <p>Error</p>;
  if (!singleBlog) return null;

  return (
    <div className={styles.blogDetails}>
      <img src={singleBlog.image} alt={singleBlog.title} />
      <h2 className={styles.blogTitle}>{singleBlog.title}</h2>
      <p className={styles.blogDate}>{singleBlog.created}</p>
      <div className={styles.blogText}>{singleBlog.description}</div>
    </div>
  );
};

export default BlogDetails;
