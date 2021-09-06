<template>
  <div class="container text-center">
    <div class="card" v-for="job in jobs" :key="job.id">
      <div class="card-body" v-if="jobs.length">
        <h3>
          <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
            {{ job.title }}
          </router-link>
        </h3>
      </div>
      <div v-else>Jobs are loading...</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Jobs",
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
