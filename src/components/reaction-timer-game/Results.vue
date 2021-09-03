<template>
  <h3>Scope: {{ score }} ms</h3>
  <p>Rank: {{ rank }}</p>
</template>

<script>
export default {
  name: "Results",
  props: ["score"],
  data() {
    return {
      rank: null,
    };
  },
  mounted() {
    if (this.score < 250) {
      this.rank = "Incredible Reflexes";
    } else if (this.score < 400) {
      this.rank = "Rapid Reflexes";
    } else if (this.score < 600) {
      this.rank = "Good Reflexes";
    } else if (this.score < 800) {
      this.rank = "Normal Reflexes";
    } else {
      this.rank = "Snail pace...";
    }
  },
};
</script>

<style scoped></style>
