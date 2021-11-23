import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogPost":
      return action.payload;
    // case "add_blogPost":
    //   return [
    //     ...state,
    //     {
    //       id: Math.floor(Math.random() * 99999),
    //       title: action.payload.title,
    //       content: action.payload.content,
    //     },
    //   ];

    case "delete_blogPost":
      return state.filter((blogPost) => blogPost.id !== action.payload);

    case "edit_blogPost":
      return state.map((blogPost) =>
        blogPost.id === action.payload.id ? action.payload : blogPost
      );
    default:
      return state;
      break;
  }
};

const getBlogPost = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/blogPosts");
    dispatch({ type: "get_blogPost", payload: response.data });
  };
};

const addBlogPost = () => {
  return async (title, content, callBack) => {
    try {
      await jsonServer.post("/blogPosts", { title, content });
    } catch (error) {
      console.log("addBlogPost error", error);
    }
    // dispatch({ type: "add_blogPost", payload: { title, content } });
    callBack();
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    try {
      await jsonServer.delete(`/blogPosts/${id}`);
    } catch (error) {
      console.log("deleteBlogPost error", error);
    }
    dispatch({ type: "delete_blogPost", payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return async (id, title, content, callBack) => {
    try {
      await jsonServer.put(`/blogPosts/${id}`, { title, content });
    } catch (error) {
      console.log("editBlogPost error", error);
    }
    dispatch({ type: "edit_blogPost", payload: { id, title, content } });
    callBack();
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { getBlogPost, addBlogPost, deleteBlogPost, editBlogPost },
  []
);
