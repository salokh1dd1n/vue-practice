<template>
  <div class="container">
    <h4>Composition Api</h4>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <post-list v-if="showPosts" :posts="posts" />
    </div>
    <div v-else>Posts are Loading...</div>
    <div class="d-flex justify-content-end">
      <button class="btn btn-primary" @click="showPosts = !showPosts">
        Toggle posts
      </button>
      <button class="btn btn-warning" @click="posts.pop()">Delete post</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import PostList from "../../components/composition-api/PostList";
import getPosts from "../../composables/getPosts";

export default {
  name: "Posts",
  components: { PostList },
  setup() {
    const { posts, error, load } = getPosts;
    load();
    const showPosts = ref(true);
    return { posts, showPosts, error };
  },
};
</script>

<style scoped></style>
