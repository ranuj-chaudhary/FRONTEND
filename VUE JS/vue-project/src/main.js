import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import ActiveUser from "./components/ActiveUser.vue";
import UserData from "./components/UserData.vue";
import InputElement from "./components/InputElement.vue";
import FuzzySearch from "./components/FuzzySearch.vue";
const app = createApp(App);

app.component("active-user", ActiveUser);
app.component("user-data", UserData);
app.component("input-element", InputElement);
app.component("fuzzy-search", FuzzySearch);
app.component("fuzzy-search", FuzzySearch);
app.mount("#app");
