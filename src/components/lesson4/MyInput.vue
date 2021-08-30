<template>
  <input
    type="text"
    class="form-control"
    placeholder="Search for model..."
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  name: "MyInput",
  model: {
    prop: "value",
    event: "input",
  },
  data() {
    return {
      search: "test",
    };
  },
};
</script>

<style scoped></style>
