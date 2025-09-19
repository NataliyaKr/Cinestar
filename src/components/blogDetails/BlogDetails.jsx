import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetchBlogs } from "../../hook/useFetchBlogs";
import styles from "./blogDetails.module.css";
import PageHeader from "../pageHeader/PageHeader";

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
    <>
      <PageHeader path="blog" current="BLOG" />
      <div className={styles.blogDetails}>
        <img
          src={singleBlog.image}
          alt={singleBlog.title}
          className={styles.blogImg}
        />
        <h2 className={styles.blogTitle}>{singleBlog.title}</h2>
        <p className={styles.blogDate}>
          Oprettet d. {new Date(singleBlog.created).toLocaleDateString("da-DK")}
        </p>
        <div className={styles.blogText}>{singleBlog.description}</div>
      </div>
    </>
  );
};

export default BlogDetails;
