export default {
  actions: {
    async fetchPosts({ commit, dispatch }, length = 10) {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=" + length,
      );
      const posts = await res.json();
      commit("updatePost", posts);
      dispatch("sayHello");
    },
    sayHello() {
      console.log("Hello, World");
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
