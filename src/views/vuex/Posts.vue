<template>
  <div class="container">
    <h2 class="text-center my-3">Posts:</h2>
    <div class="row">
      <div class="col-6">
        <p class="float-center">Amount of posts: {{ length }}</p>
      </div>
      <div class="col-6">
        <button
          type="button"
          class="btn btn-primary float-end"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button>
        <create-post />
      </div>
      <div class="col-4 my-3" v-for="post in validPosts" :key="post.id">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">
              {{ post.title }}
              <!--              <span class="badge bg-secondary">{{ post.userId }}</span>-->
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
import { mapGetters, mapActions } from "vuex";
import createPost from "../../components/vuex/createPost";

export default {
  name: "Posts",
  components: { createPost },
  // computed: {
  //   posts() {
  //     return this.$store.getters.getPosts;
  //   },
  // },
  computed: mapGetters(["validPosts", "length"]),
  methods: mapActions(["fetchPosts"]),
  async mounted() {
    // this.$store.dispatch("fetchPosts");
    await this.fetchPosts(15);
  },
};
</script>

<style scoped></style>
