<template>
  <div class="home container text-center">
    <h2>Refs:</h2>
    <p>{{ devOne.name }} - {{ devOne.age }}</p>
    <button class="btn btn-primary" @click="updateDevOne">
      Updated with Ref
    </button>
    <h2>Reactive:</h2>
    <p>{{ devTwo.name }} - {{ devTwo.age }}</p>
    <button class="btn btn-primary" @click="updateDevTwo">
      Updated with Ref
    </button>
  </div>
</template>

<script>
import { reactive, ref } from "vue";

export default {
  name: "Home",
  setup() {
    const devOne = ref({ name: ref("Salokhiddin"), age: 17 });
    const devTwo = reactive({ name: ref("Lucas"), age: 23 });
    const updateDevOne = () => {
      devOne.value.name = "Berdiyorov Salokhiddin";
    };
    const updateDevTwo = () => {
      devTwo.name = "Just Lucas";
      devTwo.age = 17;
    };
    return { devOne, updateDevOne, devTwo, updateDevTwo };
  },
};
</script>
