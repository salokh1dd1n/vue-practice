<template>
  <div class="card my-3">
    <img :src="imgUrl" class="card-img-top" alt="bla" />
    <div class="card-body">
      <h5 class="card-title">Model: {{ title }}</h5>
      <p class="card-text">Price: {{ price }}$</p>
      <p class="card-text">Amount: {{ amount }}</p>
      <a href="#" class="btn btn-primary w-100">Book</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: ["title", "price", "imgUrl", "amount"],
};
</script>

<style scoped></style>
