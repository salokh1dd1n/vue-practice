<template>
  <div v-for="post in posts" :key="post.id">
    <single-post :post="post" />
  </div>
</template>

<script>
import SinglePost from "./SinglePost";

export default {
  name: "PostList",
  components: { SinglePost },
  props: ["posts"],
  setup(props) {
    console.log(props.posts);
  },
};
</script>

<style scoped></style>
