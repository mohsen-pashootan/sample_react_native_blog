import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { Context } from "./../context/BlogContext";

const BlogPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addBlogPost } = useContext(Context);

  return (
    <View>
      <Text style={styles.lable}>Enter Title:</Text>
      <TextInput
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={styles.input}
      />
      <Text style={styles.lable}>Enter Content:</Text>
      <TextInput
        value={content}
        onChangeText={(text) => setContent(text)}
        style={styles.input}
      />
      <Button
        title="Save Blog Post"
        // onPress={() => {
        //   addBlogPost(title, content, () => {
        //     navigation.navigate("index");
        //   });
        // }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 12,
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  lable: {
    fontSize: 20,
    marginBottom: 10,
    marginLeft: 5,
  },
});

export default BlogPostForm;
