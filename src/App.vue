<template>
  <div id="app">
    <MyComponent />
    <HomeWork />
  </div>
</template>

<script>
import MyComponent from "./components/MyComponent";
import HomeWork from "./components/HomeWork";
export default {
  name: "App",
  components: {
    MyComponent,
    HomeWork,
  },
};
</script>
