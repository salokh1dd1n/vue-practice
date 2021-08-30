export default {
  methods: {
    onScrollEnd() {
      console.warn("You must overwrite onScrollEnd method");
    },
    onScroll(event) {
      let container = event.target;
      if (
        container.scrollHeight ===
        container.scrollTop + container.clientHeight
      ) {
        this.onScrollEnd();
      }
    },
  },
};
