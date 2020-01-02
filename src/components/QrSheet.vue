<template>
  <div class="text-center">
    <v-bottom-sheet v-model="this.$store.state.sheet.visible" inset>
      <v-sheet class="text-center" height="400px">
        <qrcode :value="id" :options="{ width: 300 }"></qrcode>
        <p>Aanwezigen: {{ aanwezigen.toString() }}</p>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script>
export default {
  name: "QrSheet",
  props: ["id", "aanwezigen"]
};
</script>

<style></style>
