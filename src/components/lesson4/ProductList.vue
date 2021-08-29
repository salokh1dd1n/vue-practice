<template>
  <div class="container">
    <p class="display-5 text-center my-3">List of Cars</p>
    <div class="input-group mb-3">
      <my-input v-model="searchText" />
      {{ searchText }}
      <button
        class="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
      >
        Search
      </button>
    </div>
    <hr />
    <div class="row justify-content-center">
      <div
        class="col-3"
        style="width: 18rem"
        v-for="(product, index) in products"
        :key="index"
      >
        <product-card
          :img-url="product.imgUrl"
          :title="product.title"
          :price="product.price"
          :amount="product.amount"
          @basket="addToBasket(product)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "./ProductCard";
import MyInput from "./MyInput";

export default {
  name: "ProductList",
  components: {
    ProductCard,
    MyInput,
  },
  data() {
    return {
      searchText: "",
      products: [
        {
          title: "Chevrolet Spark",
          price: 5000,
          imgUrl: "https://picsum.photos/500/500",
          amount: 20,
        },
        {
          title: "Chevrolet Spark",
          price: 5000,
          imgUrl: "https://picsum.photos/500/500",
          amount: 20,
        },
        {
          title: "Chevrolet Spark",
          price: 5000,
        },
        {
          title: "Chevrolet Spark",
          price: 5000,
          imgUrl: "https://picsum.photos/500/500",
          amount: 20,
        },
        {
          title: "Chevrolet Spark",
          price: 5000,
        },
      ],
    };
  },
  methods: {
    addToBasket(value) {
      console.log(value);
    },
  },
};
</script>

<style scoped></style>
