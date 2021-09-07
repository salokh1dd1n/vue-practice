<template>
  <div class="container">
    <div class="row">
      <h2 class="text-center my-3">Posts:</h2>
      <div class="col-4 mb-3" v-for="post in posts" :key="post.id">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">
              {{ post.title }}
              <span class="badge bg-secondary">{{ post.userId }}</span>
            </h5>
            <p class="card-text">{{ post.body }}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Posts",
  computed: {
    posts() {
      return this.$store.getters.getPosts;
    },
  },
  async mounted() {
    this.$store.dispatch("fetchPosts");
  },
};
</script>

<style scoped></style>
