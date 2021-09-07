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
    createPost(state, newPost) {
      state.posts.unshift(newPost);
    },
  },
  state: {
    posts: [],
  },
  getters: {
    validPosts(state) {
      return state.posts.filter((post) => {
        return post.title && post.body;
      });
    },
    posts(state) {
      return state.posts;
    },
    length(state, getters) {
      return getters.validPosts.length;
    },
  },
};
