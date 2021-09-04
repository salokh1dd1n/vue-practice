<template>
  <div class="home container text-center">
    <h3>Home Page</h3>
    <p ref="p">My name is {{ name }} and I am {{ age }} years old</p>
    <div class="d-flex justify-content-center">
      <button class="btn btn-primary me-2" @click="handleClick">
        Click me
      </button>
      <button class="btn btn-primary me-2" @click="age++">Add +1 to age</button>
      <input type="text" class="form-control w-25" v-model="name" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Home",
  setup() {
    let name = ref("Salokhiddin");
    let age = ref(17);
    const handleClick = () => {
      name.value = "Lucas";
      age.value = 23;
    };
    return { name, age, handleClick };
  },
};
</script>
