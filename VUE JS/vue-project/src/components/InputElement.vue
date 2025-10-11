<template>
  <div class="flex gap-2">
    <label :for="label" class="capitalize">{{ inputLabel }}</label>
    <input
      :name="inputLabel"
      :id="inputLabel"
      :type="inputType"
      :required="inputRequired"
      :placeholder="inputLabel"
      @input="handleInput(inputLabel, $event.target.value)"
      class="flex-1 px-2"
    />
  </div>
</template>

<script>
export default {
  props: {
    inputLabel: {
      type: String,
      default: "",
    },
    inputType: {
      type: String,
      default: "",
    },
    inputRequired: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      formData: {},
    };
  },
  methods: {
    handleInput(key, value) {
      this.$set(this.formData, key, value);
      this.$emit("input-data", { ...this.formData });
    },
  },
};
</script>

<style lang="scss" scoped></style>
