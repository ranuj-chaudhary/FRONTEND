<template>
  <form @submit.prevent="submitForm">
    <div class="flex">
      <label class="w-1/5" for="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        @input="handleInput('name', $event.target.value)"
        required
      />
    </div>
    <div class="flex">
      <label class="w-1/5" for="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        @input="handleInput('email', $event.target.value)"
        required
      />
    </div>
    <div class="flex">
      <label class="w-1/5" for="age">Age</label>
      <input
        type="text"
        name="age"
        id="age"
        @input="handleInput('age', $event.target.value)"
        required
      />
    </div>
    <div class="flex">
      <label class="w-/5" for="phone-number">Phone Number</label>
      <input
        type="text"
        name="phoneNumber"
        id="phone-number"
        required
        @input="handleInput('phoneNumber', $event.target.value)"
      />
    </div>
    <div class="w-full">
      <button class="btn block mx-auto px-6 py-4" type="submit">Add User</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        phoneNumber: "",
        age: "",
      },
    };
  },
  methods: {
    submitForm() {
      const { name, email, phoneNumber, age } = this.formData;
      if (!name || !email || !phoneNumber) {
        return;
      }
      this.$emit("add-user", {
        ...this.formData,
      });
    },
    handleInput(key, value) {
      this.formData[key] = value;
    },
  },
};
</script>

<style lang="css" scoped>
form {
  padding: 20px;
}
input {
  border: 1px solid white;
  padding: 4px;
  margin-left: 40px;
  flex: 1;
}
form > div {
  margin-bottom: 20px;
}
</style>
