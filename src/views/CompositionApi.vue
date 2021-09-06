<template>
  <div class="container text-center">
    <h5>Composition Api</h5>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <post-list v-if="showPosts" :posts="posts" />
    </div>
    <div v-else>Posts are Loading...</div>
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
    const posts = ref([]);
    const error = ref(null);
    const load = async () => {
      try {
        let data = await fetch("http://localhost:3000/posts");
        if (!data.ok) {
          throw new Error("No data available");
        }
        posts.value = await data.json();
      } catch (err) {
        error.value = err.message;
        console.log(error.value);
      }
    };
    load();
    const showPosts = ref(true);
    return { posts, showPosts, error };
  },
};
</script>

<style scoped></style>
