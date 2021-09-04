<template>
  <div class="home container text-center">
    <h3>Home Page</h3>
    <p ref="p">My name is {{ name }} and I am {{ age }} year old</p>
    <button class="btn btn-primary" @click="handleClick">Click me</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Home",
  setup() {
    let name = "Salokhiddin";
    let age = 17;
    const p = ref(null);
    const handleClick = () => {
      console.log(p);
      console.log(p.value);
      p.value.classList.add("test");
      p.value.textContent = "Hello, World!";
    };
    return { name, age, handleClick, p };
  },
};
</script>
