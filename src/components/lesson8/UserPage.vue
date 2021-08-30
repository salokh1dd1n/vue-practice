<template>
  <button type="button" class="btn btn-outline-primary" @click="openModal">
    Send something
  </button>
  <modal
    v-if="isModalOpen"
    title="Too important information"
    @close="closeModal"
  >
    <div class="information">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
        fugit illum nisi quisquam recusandae? Ad ducimus est mollitia nisi rem
        reprehenderit sit velit? Ab, beatae minus nostrum obcaecati repellat
        velit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
        fugit illum nisi quisquam recusandae? Ad ducimus est mollitia nisi rem
        reprehenderit sit velit? Ab, beatae minus nostrum obcaecati repellat
        velit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
        fugit illum nisi quisquam recusandae? Ad ducimus est mollitia nisi rem
        reprehenderit sit velit? Ab, beatae minus nostrum obcaecati repellat
        velit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
        fugit illum nisi quisquam recusandae? Ad ducimus est mollitia nisi rem
        reprehenderit sit velit? Ab, beatae minus nostrum obcaecati repellat
        velit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
        fugit illum nisi quisquam recusandae? Ad ducimus est mollitia nisi rem
        reprehenderit sit velit? Ab, beatae minus nostrum obcaecati repellat
        velit.
      </p>
    </div>
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
