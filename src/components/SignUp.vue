<template>
  <div class="container">
    <h3 class="mt-3 text-center">Sign Up</h3>
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="login" class="form-label">Login:</label>
        <input
          type="email"
          class="form-control"
          id="login"
          v-model="v$.form.login.$model"
        />
        <div
          class="input-errors"
          v-for="error of v$.form.login.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email address:</label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="v$.form.email.$model"
        />
        <div
          class="input-errors"
          v-for="error of v$.form.email.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password:</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="v$.form.password.$model"
        />
        <div
          class="input-errors"
          v-for="error of v$.form.password.$errors"
          :key="error.$uid"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
      <div class="mb-3">
        <label class="form-label">Country of residence:</label>
        <select class="form-select" v-model="form.country">
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
        <select class="form-select" v-model="form.field" multiple>
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
          v-model="form.agreeWithSendEmail"
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
            v-model="form.gender"
          />
          <label class="form-check-label" for="male">Male</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            id="female"
            value="female"
            v-model="form.gender"
          />
          <label class="form-check-label" for="female">Female</label>
        </div>
      </div>
      <button class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, maxLength, minLength, email } from "@vuelidate/validators";

export default {
  name: "SignUp",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      form: {
        login: "",
        email: "",
        password: "",
        field: "IT",
        country: "uzbekistan",
        agreeWithSendEmail: false,
        gender: "male",
      },
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
  validations() {
    return {
      form: {
        login: {
          required,
          minLength: minLength(3),
          maxLength: maxLength(25),
        },
        email: {
          required,
          email,
        },
        password: {
          required,
          minLength: minLength(8),
        },
      },
    };
  },
};
</script>

<style scoped></style>
