<template>
  <button type="button" class="btn btn-outline-primary" @click="openModal">
    Send something
  </button>
  <modal
    v-if="isModalOpen"
    title="Too important information"
    @close="closeModal"
  >
    <ul>
      <li>List #1</li>
      <li>List #2</li>
    </ul>
    <template v-slot:footer>
      <button type="button" class="btn btn-secondary" @click="closeModal">
        Close Modal
      </button>
      <button type="button" class="btn btn-primary">Submit</button>
    </template>
  </modal>
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
