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
const { createApp } = Vue;
const app = Vue.createApp();
console.log(app);
createApp({
  data() {
    return {
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
  },
}).mount("#app");
