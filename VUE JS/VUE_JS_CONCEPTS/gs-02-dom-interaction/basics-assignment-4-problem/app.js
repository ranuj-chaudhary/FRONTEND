const app = Vue.createApp({
  data() {
    return {
      user: "",
      userStyle1: false,
      userStyle2: false,
      toggle: true,
      color: "",
    };
  },
  methods: {
    handleToggle() {
      this.toggle = !this.toggle;
    },
  },
  watch: {
    user(value) {
      if (value === "user1") {
        this.userStyle1 = true;
      } else if (value === "user2") {
        this.userStyle2 = true;
      } else {
        this.userStyle1 = false;
        this.userStyle2 = false;
      }
    },
  },
});

app.mount("#assignment");
