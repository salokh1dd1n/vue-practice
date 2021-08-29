<template>
  <div class="container">
    <h3 class="mt-3 text-center">Sign Up</h3>
    <div class="mb-3">
      <label for="login" class="form-label">Login:</label>
      <input type="email" class="form-control" id="login" v-model="login" />
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Email address:</label>
      <input type="email" class="form-control" id="email" v-model="email" />
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password:</label>
      <input
        type="password"
        class="form-control"
        id="password"
        v-model="password"
      />
    </div>
    <div class="mb-3">
      <label class="form-label">Country of residence:</label>
      <select class="form-select" v-model="country">
        <option
          :value="country.value"
          v-for="(country, index) in countries"
          :key="index"
        >
          {{ country.label }}
        </option>
      </select>
    </div>
    <div class="mb-3">
      <label class="form-label">Field:</label>
      <select class="form-select" v-model="field" multiple>
        <option
          :value="field.value"
          v-for="(field, index) in fields"
          :key="index"
        >
          {{ field.label }}
        </option>
      </select>
    </div>
    <div class="mb-3 form-check">
      <input
        type="checkbox"
        class="form-check-input"
        id="sendEmail"
        v-model="agreeWithSendEmail"
      />
      <label class="form-check-label" for="sendEmail">
        Send emails about new courses
      </label>
    </div>
    <div class="mb-3">
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          id="male"
          value="male"
          v-model="gender"
        />
        <label class="form-check-label" for="male">Male</label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="radio"
          id="female"
          value="female"
          v-model="gender"
        />
        <label class="form-check-label" for="female">Female</label>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data() {
    return {
      login: "",
      email: "",
      password: "",
      field: "IT",
      country: "uzbekistan",
      agreeWithSendEmail: false,
      gender: "male",
      fields: [
        {
          label: "Social Media Marketing",
          value: "SMM",
        },
        {
          label: "Information Technology",
          value: "IT",
        },
        {
          label: "Search Engine Optimization",
          value: "SEO",
        },
      ],
      countries: [
        {
          label: "Uzbekistan",
          value: "uzbekistan",
        },
        {
          label: "Poland",
          value: "poland",
        },
        {
          label: "USA",
          value: "usa",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
