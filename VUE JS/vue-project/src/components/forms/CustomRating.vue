<template>
  <div class="flex gap-4">
    <button
      mode="filled"
      type="button"
      @click="setRatingSelected('poor')"
      :class="{ active: modelValue === 'poor' }"
    >
      Poor
    </button>
    <button
      mode="filled"
      type="button"
      @click="setRatingSelected('average')"
      :class="{ active: modelValue === 'average' }"
    >
      Average
    </button>
    <button
      mode="filled"
      type="button"
      @click="setRatingSelected('good')"
      :class="{ active: modelValue === 'good' }"
    >
      Good
    </button>
  </div>
</template>

<script>
export default {
  props: ["modelValue"],
  emits: ["update:modelValue"],
  methods: {
    setRatingSelected(rating) {
      this.$emit("update:modelValue", rating);
    },
  },
};
</script>

<style scoped>
.active {
  border: 2px solid black;
  background-color: yellow;
  color: black;
  font-weight: bold;
}
button {
  background-color: green;
  padding: 4px 6px;
  color: white;
}
</style>
