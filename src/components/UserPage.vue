<template>
  <button type="button" class="btn btn-outline-primary" @click="openModal">
    Send something
  </button>
  <modal
    v-if="isModalOpen"
    title="Too important information"
    @close="closeModal"
  />
</template>

<script>
import Modal from "./Modal";

export default {
  name: "UserPage",
  components: { Modal },
  data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
};
</script>

<style scoped></style>
