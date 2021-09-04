<template>
  <div class="container text-center">
    <div class="card" v-for="job in jobs" :key="job.id">
      <div class="card-body">
        <h3>{{ job.title }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FetchingData",
  data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => (this.jobs = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style scoped></style>
