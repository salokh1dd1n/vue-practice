<template>
  <div class="home container text-center">
    <h3>Home Page</h3>
    <p ref="p">My name is {{ name }} and I am {{ age }} years old</p>
    <button class="btn btn-primary" @click="handleClick">Click me</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Home",
  setup() {
    let name = ref("Salokhiddin");
    let age = ref(17);
    const handleClick = () => {
      name.value = "Lucas";
      age.value = 23;
    };
    return { name, age, handleClick };
  },
};
</script>
