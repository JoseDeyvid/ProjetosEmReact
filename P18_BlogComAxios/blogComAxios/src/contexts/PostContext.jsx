import { createContext, useState, useEffect } from "react";
import api from "../api";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const res = await api.get("posts");
        setPosts(res.data);
      } catch (error) {
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    };
    loadPosts();
  }, []);

  return (
    <PostContext.Provider value={{ posts, isLoading }}>
      {children}
    </PostContext.Provider>
  );
};
