<template>
  <div v-for="post in posts" :key="post.id">
    <single-post :post="post" />
  </div>
</template>

<script>
import SinglePost from "./SinglePost";
import { onMounted, onUnmounted, onUpdated } from "vue";

export default {
  name: "PostList",
  components: { SinglePost },
  props: ["posts"],
  setup() {
    onMounted(() => {
      console.log("Component mounted");
    });
    onUnmounted(() => {
      console.log("Component unmounted");
    });
    onUpdated(() => {
      console.log("Component updated");
    });
  },
};
</script>

<style scoped></style>
