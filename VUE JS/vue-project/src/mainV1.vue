import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import ActiveUser from "./components/ActiveUser.vue";
import UserData from "./components/UserData.vue";
import InputElement from "./components/InputElement.vue";
import FuzzySearch from "./components/FuzzySearch.vue";
import PriceCardUsingSlots from "./components/PriceCardUsingSlots.vue";
import BaseCard from "./components/UI/BaseCard.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import BaseModal from "./components/UI/BaseModal.vue";
const app = createApp(App);

// GLOBAL COMPONENTS REGISTER WITH APP
app.component("active-user", ActiveUser);
app.component("user-data", UserData);
app.component("input-element", InputElement);
app.component("fuzzy-search", FuzzySearch);
app.component("price-card-using-slots", PriceCardUsingSlots);
app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-modal", BaseModal);
app.mount("#app");
