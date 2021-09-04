<template>
  <div class="home container text-center">
    <h3>Home Page</h3>
    <p>My name is {{ name }} and I am {{ age }} year old</p>
    <button class="btn btn-primary" @click="handleClick">Click me</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  setup() {
    let name = "Salokhiddin";
    let age = 17;
    const handleClick = () => {
      console.log("You clicked me");
    };
    return { name, age, handleClick };
  },
};
</script>
