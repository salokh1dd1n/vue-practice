<template>
  <div class="card my-3">
    <img :src="imgUrl" class="card-img-top" alt="bla" />
    <div class="card-body">
      <h5 class="card-title">Model: {{ title }}</h5>
      <p class="card-text">Price: {{ price }}$</p>
      <p class="card-text">Amount: {{ amount }}</p>
      <a href="#" class="btn btn-primary w-100" @click="addToBasket">Book</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    title: {
      type: String,
      validator(value) {
        return value.length < 50;
      },
    },
    price: {
      type: Number,
      required: true,
    },
    imgUrl: {
      type: String,
      default:
        "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg",
    },
    amount: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    addToBasket() {
      this.$emit("basket");
    },
  },
};
</script>

<style scoped></style>
