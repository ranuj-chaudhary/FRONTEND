<template>
  <ul class="[&_li]:py-2">
    <learning-resourses
      v-for="item in resources"
      :title="item.title"
      :description="item.description"
      :link="item.link"
      :id="item.id"
      :key="item.id"
    >
    </learning-resourses>
  </ul>
</template>

<script>
import LearningResourses from "./LearningResourses.vue";

export default {
  components: {
    LearningResourses,
  },
  inject: ["resources"],
};
</script>

<style lang="scss" scoped></style>
