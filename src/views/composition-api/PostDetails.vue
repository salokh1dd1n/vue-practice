<template>
  <div class="container">
    <div v-if="error">{{ error }}</div>
    <div v-if="post">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
      <span
        class="badge bg-primary me-2 mb-3"
        v-for="(tag, index) in post.tags"
        :key="index"
      >
        #{{ tag }}
      </span>
    </div>
  </div>
</template>

<script>
import { getPost } from "../../composables/getPost";

export default {
  name: "PostDetails",
  props: ["id"],
  setup(props) {
    const { post, error, load } = getPost(props.id);
    load();
    // console.log(post.value.title);
    return { post, error, load };
  },
};
</script>

<style scoped></style>
