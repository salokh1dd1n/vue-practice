<template>
  <div class="bg-success rounded p-5 mt-3 text-white" v-if="showBlock">
    Click Me
  </div>
</template>

<script>
export default {
  name: "Block",
  props: ["delay"],
  data() {
    return {
      showBlock: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showBlock = true;
    }, this.delay);
  },
};
</script>

<style scoped></style>
