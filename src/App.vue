<template>
  <div id="app">
    <secret-component></secret-component>
  </div>
</template>

<script>
import SecretComponent from "./components/SecretComponent";
export default {
  name: "App",
  components: {
    SecretComponent,
  },
};
</script>
