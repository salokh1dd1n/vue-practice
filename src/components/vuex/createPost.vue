<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Create Post</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body" id="modalBody">
          <div class="mb-3">
            <label for="title" class="form-label">Post title:</label>
            <input
              type="text"
              class="form-control"
              id="title"
              v-model="title"
            />
          </div>
          <div class="mb-3">
            <label for="body" class="form-label"> Post description:</label>
            <textarea
              class="form-control"
              id="body"
              rows="3"
              v-model="body"
            ></textarea>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            ref="closeButton"
          >
            Close
          </button>
          <button type="button" @click="submit" class="btn btn-primary">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "createPost",
  data() {
    return {
      title: "",
      body: "",
      isModalOpen: true,
    };
  },
  methods: {
    ...mapMutations(["createPost"]),
    submit() {
      this.createPost({
        title: this.title,
        body: this.body,
        id: 1,
      });
      this.body = this.title = "";
      this.$refs.closeButton.click();
    },
  },
};
</script>

<style scoped></style>
