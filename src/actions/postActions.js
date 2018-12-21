import {FETCH_POSTS, NEW_POSTS} from "./types";
import axios from "axios";

export const fetchPosts = () => {
  return (dispatch) => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
      dispatch({
        type: FETCH_POSTS,
        data: res.data
      });
    });
  }
};

export const createPost = (postData) => {
  return (dispatch) => {
    axios.post("https://jsonplaceholder.typicode.com/posts",postData).then((res)=>{
      dispatch({
          type: NEW_POSTS,
          data: postData
      });
    });
  }
};
