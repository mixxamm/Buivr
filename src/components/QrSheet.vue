<template>
  <div class="text-center">
    <v-bottom-sheet v-model="sheet" inset>
      <v-sheet class="text-center" height="400px">
        <qrcode :value="id" :options="{ width: 300 }"></qrcode>
        <p>Aanwezigen: {{ (aanwezigen.length > 0 ? aanwezigenString : "/") }}</p>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script>
export default {
  name: "QrSheet",
  props: ["id", "aanwezigen"],
  computed: {
    sheet: {
      get() {
        const sheet = this.$store.state.sheet.filter(
          sheet => sheet.id == this.id
        );
        if (sheet.length > 0) {
          console.log(sheet, sheet.length);
          return sheet[0].visible;
        } else {
          return false;
        }
      },
      set(value) {
        return this.$store.commit("setSheet", { id: this.id, visible: value });
      }
    },
    aanwezigenString: function(){
      let result = ""
      this.aanwezigen.forEach((naam, i) => {result += naam + (this.aanwezigen.length > i + 1 ? ', ' : '')})
      return result
    }
  }
};
</script>

<style></style>
