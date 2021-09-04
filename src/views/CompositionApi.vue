<template>
  <div class="container text-center">
    <h5>Composition Api</h5>
    <post-list :posts="posts" />
  </div>
</template>

<script>
import { ref } from "vue";
import PostList from "../components/composition-api/PostList";

export default {
  name: "CompositionApi",
  components: { PostList },
  setup() {
    const posts = ref([
      {
        id: 1,
        title: "Welcome to the blog",
        body: "Lorem Ipsum",
      },
      {
        id: 2,
        title: "Top 5 JavaScript tips",
        body: "Lorem Ipsum",
      },
    ]);
    return { posts };
  },
};
</script>

<style scoped></style>
