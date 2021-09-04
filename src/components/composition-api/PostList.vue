<template>
  <div v-for="post in posts" :key="post.id">
    <h3>{{ post.title }}</h3>
  </div>
</template>

<script>
export default {
  name: "PostList",
  props: ["posts"],
  setup(props) {
    console.log(props.posts);
  },
};
</script>

<style scoped></style>
