import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogPost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];

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

const addBlogPost = (dispatch) => {
  return (title, content, callBack) => {
    dispatch({ type: "add_blogPost", payload: { title, content } });
    callBack();
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogPost", payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content, callBack) => {
    dispatch({ type: "edit_blogPost", payload: { id, title, content } });
    callBack();
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{ id: 1, title: "TEST POST", content: "TEST CONTENT" }]
);
