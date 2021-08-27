<template>
  <div id="app">
    <MyComponent />
    <HomeWork />
  </div>
</template>

<script>
import MyComponent from "./components/lesson1/MyComponent";
import HomeWork from "./components/lesson1/HomeWork";
export default {
  name: "App",
  components: {
    MyComponent,
    HomeWork,
  },
};
</script>
