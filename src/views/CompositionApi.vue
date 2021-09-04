<template>
  <div class="container text-center">Composition Api</div>
  <post-list :posts="posts" />
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
