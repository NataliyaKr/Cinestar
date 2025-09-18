import { useEffect, useState } from "react";

export const useFetchBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [singleBlog, setSingleBlog] = useState(null);
  const [blogError, setBlogError] = useState(null);
  const [blogIsLoading, setBlogIsLoading] = useState(false);

  //Get all blogs
  const fetchBlogs = async () => {
    setBlogIsLoading(true);

    try {
      const response = await fetch("http://localhost:3042/blogs");
      const data = await response.json();
      console.log(data);
      setBlogs(data.data);
      setBlogError(null);
      return data.data;
    } catch (error) {
      setBlogError("Something went wrong", error);
    } finally {
      setBlogIsLoading(false);
    }
  };

  //Get blog by Id
  const fetchBlogById = async (id) => {
    setBlogIsLoading(true);
    try {
      const response = await fetch(`http://localhost:3042/blog/${id}`);
      const data = await response.json();
      setSingleBlog(data.data);
      setBlogError(null);
      return data.data;
    } catch (error) {
      setBlogError("Could not load blog");
    } finally {
      setBlogIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return {
    blogs,
    singleBlog,
    blogError,
    blogIsLoading,
    fetchBlogById,
  };
};
