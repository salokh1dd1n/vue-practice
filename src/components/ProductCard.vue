<template>
  <div class="container">
    <p class="display-5 text-center my-3">List of Cars</p>
    <hr />
    <div class="card" style="width: 18rem">
      <img :src="imgUrl" class="card-img-top" alt="bla" />
      <div class="card-body">
        <h5 class="card-title">Model: {{ title }}</h5>
        <p class="card-text">Price: {{ price }}$</p>
        <p class="card-text">Amount: {{ amount }}</p>
        <a href="#" class="btn btn-primary w-100">Book</a>
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
