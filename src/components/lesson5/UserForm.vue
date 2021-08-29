<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <h3 class="mt-3 text-center">User Form</h3>
        <div
          class="mb-3"
          v-for="(formValue, formLabel, index) in formFields"
          :key="index"
        >
          <label :for="formLabel" class="form-label">{{ formLabel }}:</label>
          <input
            type="text"
            class="form-control"
            :id="formLabel"
            v-model="formFields[formLabel]"
          />
        </div>
        <button type="button" class="btn btn-primary">Save</button>
        <div class="my-3">
          <label for="extraField" class="form-label"> Extra Field: </label>
          <input
            type="text"
            class="form-control"
            id="extraField"
            v-model="additionalField"
          />
        </div>
        <button type="button" class="btn btn-primary" @click="addNewField()">
          Add
        </button>
      </div>
      <div class="col-6">
        <h3 class="mb-5 mt-3">Form Show</h3>
        <p
          class="mb-5"
          v-for="(formValue, formLabel, index) in formFields"
          :key="index"
        >
          <strong>{{ formLabel }}: </strong>
          <span>{{ formValue }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserForm",
  data() {
    return {
      formFields: {
        firstName: "",
        secondName: "",
        lastName: "",
      },
      test: ["firstName", "secondName", "lastName"],
      additionalField: "",
    };
  },
  methods: {
    addNewField() {
      console.log(this.test);
      this.test[2] = this.additionalField;
      console.log(this.formFields);
      // this.$set(this.formFields, this.additionalField, "");
      this.formFields[this.additionalField] = "";
    },
  },
};
</script>

<style scoped></style>
