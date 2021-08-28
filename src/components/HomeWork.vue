<template>
  <div id="root" class="container">
    <div class="row">
      <div class="col-6">
        <img src="../assets/logo.png" alt="Vue Logo" :style="imgStyles" />
      </div>
      <div class="col-6 mt-4">
        <form>
          <h3 class="mb-3">Image Filters</h3>
          <div class="mb-3">
            <label for="width" class="form-label">
              Width {{ imgSizes.currentWidth }}:
            </label>
            <input
              class="form-range"
              type="range"
              id="width"
              :value="this.imgSizes.currentWidth"
              @input="this.imgSizes.currentWidth = $event.target.value"
              :min="imgSizes.minWidth"
              :max="imgSizes.maxWidth"
            />
          </div>
          <div class="mb-3">
            <label for="height" class="form-label">
              Height {{ imgSizes.currentHeight }}:
            </label>
            <input
              class="form-range"
              type="range"
              id="height"
              :value="imgSizes.currentHeight"
              @input="imgSizes.currentHeight = $event.target.value"
              :min="imgSizes.minHeight"
              :max="imgSizes.maxHeight"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeWork",
  data() {
    return {
      imgSizes: {
        maxWidth: 200,
        maxHeight: 200,
        minWidth: 50,
        minHeight: 50,
        currentWidth: 200,
        currentHeight: 200,
      },
    };
  },
  computed: {
    imgStyles: function () {
      return {
        width: `${this.imgSizes.currentWidth}px`,
        height: `${this.imgSizes.currentHeight}px`,
      };
    },
  },
};
</script>

<style scoped></style>
