<template>
  <div class="container">
    <h3 class="mt-3 text-center">Sign Up</h3>
    <div class="mb-3">
      <label for="login" class="form-label">Login:</label>
      <input type="email" class="form-control" id="login" />
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Email address:</label>
      <input type="email" class="form-control" id="email" />
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password:</label>
      <input type="password" class="form-control" id="password" />
    </div>
    <div class="mb-3">
      <label class="form-label">Country of residence:</label>
      <select class="form-select">
        <option value="1">Uzbekistan</option>
        <option value="2">Poland</option>
        <option value="3">USA</option>
      </select>
    </div>
    <div class="mb-3">
      <label class="form-label">Field:</label>
      <select class="form-select">
        <option value="1">IT</option>
        <option value="2">SMM</option>
        <option value="3">Logistics</option>
      </select>
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">
        Notify me about courses
      </label>
    </div>
    <div class="mb-3">
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          value="option1"
        />
        <label class="form-check-label" for="inlineRadio1">Male</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio2"
          value="option2"
        />
        <label class="form-check-label" for="inlineRadio2">Female</label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Save</button>
  </div>
</template>

<script>
export default {
  name: "SignUp",
};
</script>

<style scoped></style>
