<template>
  <div class="container text-center">
    <h2>Reaction Timer Game</h2>
    <button class="btn btn-primary" @click="start" :disabled="isPlaying">
      Start
    </button>
    <block v-if="isPlaying" :delay="delay" />
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
    };
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
    },
  },
};
</script>

<style scoped></style>
