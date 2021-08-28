<template>
  <div class="text" style="width: 50%; float: left">
    <p v-if="isTextVisible" :class="textClass">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took
    </p>
    <p v-else>Hidden</p>
    <button @click="isTextVisible = !isTextVisible">Hide / Show</button>
  </div>
  <div class="textFilters" style="width: 50%; float: right">
    <h2>Text Filters</h2>
    <button @click="textClass = 'blue'" class="button">Blue</button>
    <button @click="textClass = 'green'" class="button">Green</button>
    <button @click="textClass = 'grey'" class="button">Grey</button>
  </div>
</template>

<script>
export default {
  name: "SecretComponent",
  data() {
    return {
      isTextVisible: true,
      textClass: null,
    };
  },
};
</script>

<style scoped>
.blue {
  padding: 10px;
  background-color: blue;
  color: white;
}

.green {
  padding: 10px;
  background-color: green;
  color: white;
}

.grey {
  padding: 10px;
  background-color: grey;
  color: white;
}
</style>
