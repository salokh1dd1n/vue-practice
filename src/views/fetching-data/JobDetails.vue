<template>
  <div class="container text-center">
    <div v-if="job">
      <h1>{{ job.title }}</h1>
      <p>Job id: {{ job.id }}</p>
      <p>{{ job.body }}</p>
    </div>
    <div v-else>Job is loading...</div>
  </div>
</template>

<script>
export default {
  name: "JobDetails",
  props: ["id"],
  data() {
    return {
      job: null,
    };
  },
  created() {
    fetch("http://localhost:3000/jobs/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped></style>
