<template>
  <div id="root">
    <button @click="minusButton"><strong>-</strong></button>
    <input type="number" :value="value" />
    <button @click="plusButton"><strong>+</strong></button>
  </div>
</template>

<script>
export default {
  name: "HomeWork",
  data() {
    return {
      value: 1,
    };
  },
  methods: {
    minusButton() {
      if (this.value === 0) return;
      this.value -= 1;
    },
    plusButton() {
      if (this.value === 10) return;
      this.value += 1;
    },
  },
};
</script>

<style scoped></style>
