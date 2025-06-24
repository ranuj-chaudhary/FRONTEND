// Compostion Api
// const { createApp, ref } = Vue;

// createApp({
//   setup() {
//     const input = ref("");
// const messages = ref([
//   "first message",
//   "second message",
//   "third message",
//   "fourth message",
// ]);

//     const addValue = () => {
//       messages.value.push(input.value);
//     };
//     return {
//       input,
//       messages,
//       addValue,
//     };
//   },
// }).mount("#app");

// optional api
const app = Vue.createApp({
  data() {
    return {
      count: 0,
      messages: [
        "first message",
        "second message",
        "third message",
        "fourth message",
      ],
      enterValue: "",
    };
  },
  methods: {
    addValue() {
      this.messages.push(this.enterValue);
    },
    counterUpdate: function (action) {
      if (typeof action !== "string") {
        console.error("Pass string parameter only");
        return;
      }
      if (action === "increase") {
        this.count++;
      } else {
        this.count--;
      }
    },
  },
});

app.mount("#app");
