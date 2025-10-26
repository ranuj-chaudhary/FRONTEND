<template>
  <section class="mx-auto w-lg">
    <base-form-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-form-button>Load Submitted Experiences</base-form-button>
      </div>
      <ul>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-form-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  props: ['results'],
  components: {
    SurveyResult,
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>