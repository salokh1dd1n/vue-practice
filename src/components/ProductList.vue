<template>
  <div class="container">
    <p class="display-5 text-center my-3">List of Cars</p>
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
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "./ProductCard";

export default {
  name: "ProductList",
  components: {
    ProductCard,
  },
  data() {
    return {
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
          imgUrl: "https://picsum.photos/500/500",
          amount: 20,
        },
      ],
    };
  },
};
</script>

<style scoped></style>
