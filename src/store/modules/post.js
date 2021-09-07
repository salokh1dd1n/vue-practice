export default {
  actions: {
    async fetchPosts(ctx, length = 10) {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=" + length,
      );
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
    length() {
      return this.posts.length;
    },
  },
};
