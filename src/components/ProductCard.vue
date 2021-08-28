<template>
  <div class="container">
    <div class="card" style="width: 18rem">
      <img :src="imgUrl" class="card-img-top" alt="bla" />
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">Amount: {{ amount }}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  data() {
    return {
      title: "Chevrolet Spark",
      price: 5000,
      imgUrl: "https://picsum.photos/500/500",
      amount: 20,
    };
  },
};
</script>

<style scoped></style>
