import React, { useContext } from "react";
import { Context } from "./../context/BlogContext";
import BlogPostForm from "./../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const { state, addBlogPost } = useContext(Context);
  const blogPost = state.find((post) => post.id === navigation.getParam("id"));

  return <BlogPostForm />;
};

export default EditScreen;
