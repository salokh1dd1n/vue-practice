<template>
  <div id="root" class="container">
    <label for="email">Email:</label>
    <input
      type="email"
      id="email"
      placeholder="Enter Email"
      :value="email"
      @input="emailInput($event.target.value)"
    />
    <label for="password">Password:</label>
    <input
      type="password"
      id="password"
      placeholder="Enter password"
      :value="password"
      @input="passwordInput($event.target.value)"
    />
    <p>Email: {{ email }}</p>
    <p>Password: {{ password }}</p>
  </div>
</template>

<script>
export default {
  name: "MyComponent",
  data() {
    return {
      email: "admin@gmail.com",
      password: "password",
    };
  },
  methods: {
    emailInput(value) {
      this.email = value;
    },
    passwordInput(value) {
      this.password = value;
    },
  },
};
</script>

<style scoped></style>
