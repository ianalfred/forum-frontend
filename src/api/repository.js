import api from "./api";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export default {
  posts() {
    return api.get("http://localhost:8000/api/posts");
  },
  addPost(param) {
    return api.post("http://localhost:8000/api/posts", param, {
      headers: headers,
    });
  },
  getPost(param) {
    return api.get("http://localhost:8000/api/posts/" + param, {
      headers: headers,
    });
  },
  addComment(param) {
    return api.post("http://localhost:8000/api/comment", param, {
      headers: headers,
    });
  },
};
