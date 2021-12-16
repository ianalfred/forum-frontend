import repository from "../../api/repository";

const state = {
  posts: [],
  post: [],
};

const getters = {
  posts: (state) => state.posts,
  post: (state) => state.post,
};

const mutations = {
  SET_POSTS(state, posts) {
    state.posts = posts;
  },
  ADD_POST: (state, post) => state.posts.data.unshift(post),
  SET_POST(state, post) {
    state.post = post;
  },
  ADD_COMMENT: (state, comment) => {
    state.post.data.comments.unshift(comment),
      (state.post.data.comments_count =
        parseInt(state.post.data.comments_count) + 1);
  },
};

const actions = {
  async fetchPosts({ commit }) {
    const response = await repository.posts();
    commit("SET_POSTS", response);
  },

  async addPost({ commit }, post) {
    const { data } = await repository.addPost(post);
    commit("ADD_POST", data);
  },

  async fetchPost({ commit }, post) {
    const response = await repository.getPost(post);
    commit("SET_POST", response);
  },

  async addComment({ commit }, comment) {
    const { data } = await repository.addComment(comment);
    console.log(data);
    commit("ADD_COMMENT", data);
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
