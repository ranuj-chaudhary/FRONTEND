const { createApp } = Vue;

createApp({
  data() {
    return {
      toggleModal: true,
    };
  },
  methods: {
    handleModalToggle() {
        console.log('clicked')
      this.toggleModal = !this.toggleModal;
    },
  },
}).mount("#app");
