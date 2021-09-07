export default {
  actions: {
    async fetchPosts(ctx) {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const posts = await res.json();
      ctx.commit("updatePost", posts);
    },
  },
  mutations: {
    updatePost(state, posts) {
      state.posts = posts;
    },
  },
  state: {
    posts: [],
  },
  getters: {
    posts(state) {
      return state.posts;
    },
  },
};
