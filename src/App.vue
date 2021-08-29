<template>
  <div id="app">
    <user-page />
  </div>
</template>

<script>
import UserPage from "./components/UserPage";
export default {
  name: "App",
  components: {
    UserPage,
  },
};
</script>
