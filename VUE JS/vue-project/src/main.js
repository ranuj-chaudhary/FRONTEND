import { createApp } from 'vue';

import BaseFormButton from './components/UI/BaseFormButton.vue';
import BaseFormCard from './components/UI/BaseFormCard.vue';
import App from './App.vue';

const app = createApp(App);

app.component('base-form-card', BaseFormCard);
app.component('base-form-button', BaseFormButton);

app.mount('#app');
