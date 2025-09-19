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

  // Create blog
  const createBlog = async (blogData) => {
    setBlogIsLoading(true);
    try {
      const response = await fetch("http://localhost:3042/blog", {
        method: "POST",
        body: blogData,
      });

      if (!response.ok) {
        throw new Error("Error create blog");
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
    } finally {
      setBlogIsLoading(false);
    }
  };

  // Refetch
  const blogRefetch = () => {
    return fetchBlogs();
  };

  // Update blog
  const updateBlog = async (blogData) => {
    try {
      const response = await fetch(`http://localhost:3042/blog`, {
        method: "PUT",
        body: blogData,
      });

      if (!response.ok) {
        console.log("Error updating blog");
      }

      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  // Delete blog
  const deleteBlog = async (id) => {
    try {
      const response = await fetch(`http://localhost:3042/blog/${id}`, {
        method: "DELETE",
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
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
      setBlogError("Could not load blog", error);
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
    createBlog,
    blogRefetch,
    updateBlog,
    deleteBlog,
  };
};
