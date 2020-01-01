<template>
  <div class="text-center">
    <v-bottom-sheet v-model="sheet" inset>
      <v-sheet class="text-center" height="400px">
        <qrcode :value="id" :options="{ width: 300 }"></qrcode>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script>
export default {
  name: "QrSheet",
  props: ["sheet", "id"]
};
</script>

<style>
</style>