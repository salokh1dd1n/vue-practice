<template>
  <div>
    <h3>
      <router-link :to="{ name: 'PostDetails', params: { id: post.id } }">
        {{ post.title }}
      </router-link>
    </h3>
    <p>{{ snippet }}</p>
  </div>
  <!--  <span-->
  <!--    class="badge bg-primary me-2 mb-3"-->
  <!--    v-for="(tag, index) in post.tags"-->
  <!--    :key="index"-->
  <!--  >-->
  <!--    #{{ tag }}-->
  <!--  </span>-->
</template>

<script>
import { computed } from "vue";

export default {
  name: "SinglePost",
  props: ["post"],
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 100) + "...";
    });
    return { snippet };
  },
};
</script>

<style scoped></style>
