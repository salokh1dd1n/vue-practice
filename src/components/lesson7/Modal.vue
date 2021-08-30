<template>
  <div class="modal fade show">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ title }}</h5>
          <button
            type="button"
            class="btn-close"
            @click="closeModal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body" ref="modalBody" @scroll="onBodyScroll">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
            <button type="button" class="btn btn-secondary" @click="closeModal">
              Close
            </button>
            <button
              :disabled="!isScrolledFully"
              type="button"
              class="btn btn-primary"
            >
              Save changes
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isScrolledFully: false,
    };
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    onBodyScroll() {
      let modalBody = this.$refs.modalBody;
      if (
        modalBody.scrollHeight ===
        modalBody.scrollTop + modalBody.clientHeight
      ) {
        this.isScrolledFully = true;
      }
    },
  },
};
</script>

<style scoped>
.modal {
  display: block;
}
</style>
