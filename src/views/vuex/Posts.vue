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
  data() {
    return {
      posts: [],
    };
  },
  async mounted() {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => (this.posts = data))
      .catch((error) => console.log(error));
  },
};
</script>

<style scoped></style>
