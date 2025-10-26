<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="user-name">Your Name</label>
      <input
        id="user-name"
        name="user-name"
        type="text"
        v-model.trim="userName"
      />
    </div>
    <div class="form-control">
      <label for="age">Your Age (Years)</label>
      <input id="age" name="age" type="number" v-model="userAge" />
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>
      <select
        id="referrer"
        name="referrer"
        :value="referrer"
        v-model="referrer"
      >
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
        <input
          id="interest-news"
          name="interest"
          type="checkbox"
          value="interest-news"
          v-model="interest"
        />
        <label for="interest-news">News</label>
      </div>
      <div>
        <input
          id="interest-tutorials"
          name="interest"
          type="checkbox"
          value="interest-tutorials"
          v-model="interest"
        />
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input
          id="interest-nothing"
          name="interest"
          type="checkbox"
          value="interest-nothing"
          v-model="interest"
        />
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input
          id="how-video"
          name="how"
          type="radio"
          value="Video"
          v-model="howToLearn"
        />
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input
          id="how-blogs"
          name="how"
          type="radio"
          value="Blogs"
          v-model="howToLearn"
        />
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input
          id="how-other"
          name="how"
          type="radio"
          value="Other"
          v-model="howToLearn"
        />
        <label for="how-other">Other</label>
      </div>
    </div>
    <div class="form-control">
      <p class="font-extrabold text-2xl py-4">
        Using custom v-modle on component
      </p>
      <custom-rating v-model="rating"></custom-rating>
    </div>
    <div>
      <button type="submit">Save Data</button>
    </div>
  </form>
</template>
<script>
import CustomRating from "./CustomRating.vue";
export default {
  components: {
    CustomRating,
  },
  emits: ["submitForm"],
  data() {
    return {
      userName: "",
      referrer: "wom",
      interest: [],
      userAge: null,
      howToLearn: null,
      rating: "pending",
    };
  },
  methods: {
    submitForm() {
     if(this.userName === '' || this.age < 18){
      alert('enter relivant value')
      return;
     }
      this.$emit("submitForm", {
        username: this.userName,
        referred: this.referrer,
        userAge: this.userAge,
        interest: this.interest,
        howToLean: this.howToLearn,
        rating: this.rating,
      });
    },
  },
};
</script>
<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type="checkbox"],
input[type="radio"] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type="checkbox"] + label,
input[type="radio"] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
input[type="text"],
input[type="number"] {
  border: 1px solid black;
}
</style>
