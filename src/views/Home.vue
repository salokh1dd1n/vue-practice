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
    <div class="searching mt-2">
      <h2>Searching Engine:</h2>
      <input type="text" v-model="search" />
      <p>search term - {{ search }}</p>
      <div v-for="name in matchingNames" :key="name">{{ name }}</div>
    </div>
  </div>
</template>

<script>
import { computed, reactive, ref, watch, watchEffect } from "vue";

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

    const search = ref("");
    const names = ref([
      "salokhiddin",
      "najmiddin",
      "kamoliddin",
      "isroil",
      "samandar",
      "azim",
      "sanjar",
    ]);
    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });
    watch(search, () => {
      // console.log("watch function ran Search term - " + search.value);
    });
    watchEffect(() => {
      // console.log("watchEffect function ran Search term - " + search.value);
    });
    return {
      devOne,
      updateDevOne,
      devTwo,
      updateDevTwo,
      matchingNames,
      search,
    };
  },
};
</script>
