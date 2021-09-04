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
    switch (true) {
      case this.score <= 250:
        this.rank = "Incredible Reflexes 🔥🔥🔥";
        break;
      case this.score <= 400:
        this.rank = "Rapid Reflexes 👍👍👍";
        break;
      case this.score <= 600:
        this.rank = "Good Reflexes 😉😉😉";
        break;
      case this.score <= 800:
        this.rank = "Normal Reflexes 🥱🥱🥱";
        break;
      default:
        this.rank = "Snail pace...🙅🙅🙅";
        break;
    }
  },
};
</script>

<style scoped></style>
