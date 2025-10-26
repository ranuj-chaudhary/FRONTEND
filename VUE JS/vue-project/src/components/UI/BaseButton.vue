<template>
  <button  :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: { type: String, default: "filled" },
    mode: { type: String, default: "filled" },
  },
};
</script>

<style scoped>
button {
  color: white;
  padding: 8px 8px;
  cursor: pointer;
  background-color: green;
}
.flat {
  background-color: transparent;
}
.flat:hover, .flat:active{
  background-color: rgb(121, 121, 121);
}
.flat:active {
  transform: scale(98%);
}
</style>
