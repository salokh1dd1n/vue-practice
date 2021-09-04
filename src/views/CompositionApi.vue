<template>
  <div class="container text-center">
    <h5>Composition Api</h5>
    <post-list v-if="showPosts" :posts="posts" />
    <div class="d-flex justify-content-center">
      <button class="btn btn-primary" @click="showPosts = !showPosts">
        Toggle posts
      </button>
      <button class="btn btn-warning" @click="posts.pop()">Delete post</button>
    </div>
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
        body:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
          " Amet architecto eius esse et expedita illum nam quas repudiandae " +
          "voluptatum. Adipisci, dolorem, reprehenderit! Assumenda deleniti " +
          "distinctio ea ipsa. Illum magnam, porro.",
      },
      {
        id: 2,
        title: "Top 5 JavaScript tips",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
          " Amet architecto eius esse et expedita illum nam quas repudiandae " +
          "voluptatum. Adipisci, dolorem, reprehenderit! Assumenda deleniti " +
          "distinctio ea ipsa. Illum magnam, porro.",
      },
    ]);
    const showPosts = ref(true);
    return { posts, showPosts };
  },
};
</script>

<style scoped></style>
