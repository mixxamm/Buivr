<template>
  <div class="bib-container">
    <v-card :color="color" dark v-if="!zichtbaar" min-width="560" min-height="315" @click="zichtbaar = !zichtbaar">
      <v-card-title class="headline justify-center align-center">{{titel}}</v-card-title>
      <v-card-text class="headline font-weight-bold justify-center">{{beschrijving}}</v-card-text>
    </v-card>
    <iframe
      v-else
      width="560"
      height="315"
      :src="link"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "College",
  data() {
    return {
      zichtbaar: false
    };
  },
  props: ["link", "titel", "beschrijving", "color"]
};
</script>

<style scoped>
.bib-container{
    margin: 0 25px;
}
</style>