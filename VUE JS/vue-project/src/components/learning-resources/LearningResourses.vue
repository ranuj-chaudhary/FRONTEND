<template>
  <li class="">
    <base-card>
      <header class="flex justify-between">
        <h3 class="text-xl font-bold">
          {{ title }}
        </h3>
        <base-button
          mode="flat"
          class="cursor-pointer"
          @click="deleteResource(id)"
        >
          Delete
        </base-button>
      </header>
      <p>{{ description }}</p>
      <nav>
        <a :href="link" class="my-4 text-orange-400">View Resources</a>
      </nav>
    </base-card>
  </li>
</template>

<script>
export default {
  props: ["title", "description", "link", "id"],
  setup() {
    return {};
  },
  inject: ["deleteResource"]
};
</script>

<style lang="scss" scoped></style>
