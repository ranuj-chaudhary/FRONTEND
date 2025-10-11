<template>
  <div
    class="flex  bg-blue-900 h-screen text-white p-4 min-w-7xl gap-4 justify-center "
  >
    <div class="w-2/5">
      <user-data @add-user="addUser" />
    </div>
    <div
      class=" w-3/5  flex items-start flex-wrap content-start  gap-2 h-[400px] overflow-y-auto"
    >
      <active-user
        v-for="(user, index) in users"
        :key="user.name"
        :user="user"
      />
    </div>
  </div>
</template>

<script>
export default {
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
      console.log(user);
      this.users.push(user);
    },
  },
};
</script>

<style scoped></style>
