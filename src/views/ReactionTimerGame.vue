<template>
  <div class="container text-center">
    <h2>Reaction Timer Game</h2>
    <h3 v-if="showResults">Scope: {{ score }} ms</h3>
    <button class="btn btn-primary" @click="start" :disabled="isPlaying">
      Start
    </button>
    <block v-if="isPlaying" :delay="delay" @end="endGame" />
  </div>
</template>

<script>
import Block from "../components/reaction-timer-game/Block";

export default {
  name: "ReactionTimerGame",
  components: { Block },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false,
    };
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      this.showResults = false;
    },
    endGame(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false;
      this.showResults = true;
    },
  },
};
</script>

<style scoped></style>
