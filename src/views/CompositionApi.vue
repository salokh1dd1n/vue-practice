<template>
  <div class="container text-center">Composition Api</div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "CompositionApi",
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
