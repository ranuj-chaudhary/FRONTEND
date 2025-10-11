<template>
  <div class="p-6 bg-amber-900 w-content h-auto">
    <button class="btn" @click="toggleDetails">
      {{ detailsAreAvaible ? "Hide" : "Show" }} User Details
    </button>
    <div v-show="detailsAreAvaible">
      <p><span> Name: </span>{{ user.name }}</p>
      <p><span> Age: </span>{{ user.age }}</p>
      <p><span>Email: </span>{{ user.email }}</p>
      <p><span>Phone Number: </span>{{ user.phoneNumber }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
  },
  data() {
    return {
      detailsAreAvaible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreAvaible = !this.detailsAreAvaible;
    },
  },
};
</script>

<style lang="css" scoped>
.user {
  border: 2px solid white;
}

span {
  font-weight: bold;
}
</style>
