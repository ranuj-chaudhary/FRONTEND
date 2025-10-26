<template>
  <div class="bg-blue-900 text-black gap-4">
    <the-header title="Https Request"></the-header>
    <div class="text-black p-4">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
        minus reprehenderit consequuntur ea magnam eum atque, incidunt
        blanditiis dignissimos laboriosam, asperiores alias quasi nisi culpa
        quod pariatur dolorum voluptatem ad!
      </p>
    </div>
    <the-header title=" Forms Basics"></the-header>
    <div class="text-black">
      <the-form @submit-form="submitForm"></the-form>
    </div>
    <the-header
      title="Practicing All the Important Concepts of Vue.js"
    ></the-header>
    <!-- Practicing All the Important Concepts of Vue.js -->
    <h2 class="font-bold text-4xl p-6">
      Dynamic Component, inject, emmit, dynamic styling, naming components,
      Customizable Dialogue
    </h2>
    <the-resources></the-resources>
    <h2 class="font-bold text-3xl p-6">
      Learning native events, v-for, named slot , default slot, reusable card
      with slot
    </h2>
    <div class="w-2/5 pt-10">
      <!-- emit to execute function passed through component -->
      <user-data @add-user="addUser" />
    </div>
    <div
      class="w-3/5 flex items-start flex-wrap content-start gap-2 h-[400px] overflow-y-auto"
    >
      <!-- loop vfor to render array data or object data -->
      <active-user
        v-for="(user, index) in users"
        :key="user.name"
        :user="user"
      />
    </div>
    <!-- using vlots -->
    <div class="">
      <h1 class="text-center text-4xl">Named Slots</h1>
      <price-card-using-slots>
        <!-- Card Header -->
        <template v-slot:header>
          <div class="text-black text-2xl">
            <h1>Premium Plan</h1>
          </div>
        </template>
        <!-- Default content -->
        <ul>
          <li v-for="(item, index) in 5" :key="index">
            Plan Pricing : {{ item }}
          </li>
        </ul>
        <!-- Card Footer -->
        <template v-slot:footer>
          <div class="text-black text-2xl">
            <button
              class="px-4 py-3 bg-blue-800 text-white border-none rounded-md"
            >
              Buy Plan
            </button>
          </div>
        </template>
      </price-card-using-slots>
    </div>
  </div>
</template>

<script>
import TheResources from "./components/learning-resources/TheResources.vue";
import StoredResources from "./components/learning-resources/StoredResources.vue";
import TheHeader from "./components/layouts/TheHeader.vue";
import TheForm from "./components/forms/TheForm.vue";
export default {
  components: {
    StoredResources,
    TheHeader,
    TheResources,
    TheForm,
  },
  data() {
    return {
      users: [
        {
          id: 1,
          name: "Ranuj Chaudhary",
          email: "ranujchoudhary@gmail.com",
          phoneNumber: "8755933763",
          age: 34,
        },
        {
          id: 2,
          name: "Raneesh Chaudhary",
          email: "raneeshchoudhary@gmail.com",
          phoneNumber: "9410455872",
          age: 31,
        },
      ],
    };
  },

  methods: {
    addUser(user) {
      this.users.push(user);
    },
    submitForm({ userName, referrer, interest, userAge, howToLearn, rating }) {
      const inputData = {
        id: new Date().toISOString(),
        userName,
        userAge,
        interest,
        referrer,
        howToLearn,
        rating,
      };
      console.log(inputData)
    },
  },
};
</script>

<style scoped></style>
