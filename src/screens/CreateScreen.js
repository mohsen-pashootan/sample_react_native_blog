import React, { useContext } from "react";
import { Context } from "./../context/BlogContext";
import BlogPostForm from "./../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);

  return <BlogPostForm />;
};

export default CreateScreen;
