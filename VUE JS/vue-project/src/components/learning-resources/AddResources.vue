<template>
  <base-card>
    <form @submit.prevent="submitFormData" class="[&>input]:focus:text-black">
      <div class="form-control">
        <label for="title">Enter Title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="enter title"
          ref="resourceTitle"
        />
      </div>
      <div class="form-control">
        <label for="description">Enter Description</label>
        <textarea
          name="description"
          id="description"
          placeholder="enter description"
          ref="resourceDescription"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Enter Link Url</label>
        <input
          type="text"
          id="link"
          placeholder="enter link url"
          ref="resourceLinkUrl"
        />
      </div>
      <base-button
        type="submit"
        class="!px-8 !py-4 rounded-md transform"
        mode="filled"
        >Add New resource</base-button
      >
    </form>
    <base-modal
      title="Invalid Input"
      v-if="isInputValid"
      @close="handleCloseModal"
    >
      <div>
        <ul class="list-disc font-bold p-4">
          <li>One of the input in empty.</li>
          <li>Input value should be english alphabets.</li>
          <li>Cannot Left any field empty.</li>
          <li>All the fields are required to be filled.</li>
        </ul>
      </div>
    </base-modal>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      isInputValid: false,
    };
  },
  methods: {
    submitFormData() {
      const resourceTitle = this.$refs.resourceTitle.value;
      const resourceDescription = this.$refs.resourceDescription.value;
      const resourceLinkUrl = this.$refs.resourceLinkUrl.value;
      if (
        resourceTitle.trim() === "" ||
        resourceDescription.trim() === "" ||
        resourceLinkUrl.trim() === ""
      ) {
        console.log("clicked");
        this.isInputValid = true;
        return;
      }
      this.addNewResources(resourceTitle, resourceDescription, resourceLinkUrl);
    },
    handleCloseModal() {
      this.isInputValid = false;
    },
  },

  inject: ["addNewResources"],
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.3rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
}

.form-control {
  margin: 1rem 0;
}
</style>
