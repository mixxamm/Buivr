<template>
  <div>
    <v-card width="350" :loading="loading">
      <v-img
        class="white--text align-end"
        height="200px"
        :src="bib.foto"
        :contain="bib.contain ? true : false"
      >
        <v-card-title :style="{ color: '#' + bib.tekstkleur }">{{
          bib.naam
        }}</v-card-title>
      </v-img>

      <div class="kolom">
        <v-card-subtitle
          class="pb-0"
          :style="[
            (bib.aanwezigen.length < bib.capaciteit * 0.6 &&
              bib.capaciteit <= 6) ||
            (bib.aanwezigen.length < bib.capaciteit * 0.7 && bib.capaciteit > 6)
              ? {}
              : { color: 'red' }
          ]"
          ><v-progress-circular :value="(bib.aanwezigen.length/bib.capaciteit) * 100">{{ bib.aanwezigen.length }}</v-progress-circular></v-card-subtitle
        >
        <div class="kolom chips">
          <v-chip
            v-if="ingecheckt"
            class="ma-2"
            color="green"
            text-color="white"
            >Ingecheckt</v-chip
          >
          <v-chip
            class="ma-2"
            :color="bib.open ? 'primary' : 'red'"
            outlined
            pill
            >{{ bib.open ? "Open" : "Gesloten" }}</v-chip
          >
        </div>
      </div>

      <v-card-text class="text--primary">
        <div class="flex">
          <v-icon>place</v-icon>
          <div>
          {{ bib.adres.straat }} {{ bib.adres.nummer }},
          {{ bib.adres.postcode }}
          {{ bib.adres.plaats }}
          </div>
        </div>
      </v-card-text>
      
      <v-card-actions>
        <v-btn
          v-if="!ingecheckt"
          color="orange"
          text
          :disabled="!bib.open"
          @click="checkIn()"
          >Inchecken</v-btn
        >
        <v-btn
          v-if="ingecheckt"
          color="red"
          text
          @click="checkUit()"
          >Uitchecken</v-btn
        >
        <v-btn color="orange" text @click="meerInfo(bib._id)"
          >Meer informatie</v-btn
        >
      </v-card-actions>
    </v-card>
    <QrSheet :id="bib._id" :aanwezigen="bib.aanwezigen" />
    <v-snackbar
      v-model="snackbar"
      :bottom="y === 'bottom'"
      :color="color"
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :right="x === 'right'"
      :timeout="timeout"
      :top="y === 'top'"
      :vertical="mode === 'vertical'"
    >
      {{ text }}
      <v-btn dark text @click="snackbar = false">Sluiten</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import QrSheet from "@/components/QrSheet.vue";
export default {
  components: {
    QrSheet
  },
  name: "Bib",
  props: ["bib"],
  data() {
    return {
      sheet: false,
      loading: false,
      id: "",
      color: "error",
      mode: "",
      snackbar: false,
      text: "Al ingecheckt in een andere bib",
      timeout: 6000,
      x: null,
      y: "bottom"
    };
  },
  methods: {
    meerInfo: function(id) {
      //this.sheet = false; //dit moet om ervoor te zorgen dat de state sws wordt gewijzigd.
      // this.sheet = true;
      this.$store.commit("setSheet", { id: id, visible: true });
      this.id = id;
    },
    checkIn: function() {
      this.loading = true;
      this.axios
        .post(`${this.$store.state.api_ip}/bib/${this.bib._id}/checkin`, {
          naam: this.$store.state.naam
        })
        .then(response => {
          console.log(response.data);
          if (response.data.error == true) {
            this.loading = false;
            this.snackbar = true;
          } else {
            this.bib = response.data;
            this.loading = false;
          }
        })
        .catch(e => {
          this.errors.push(e);
        });
    },
    checkUit: function() {
      this.loading = true;
      this.axios
        .post(`${this.$store.state.api_ip}/bib/${this.bib._id}/checkuit`, {
          naam: this.$store.state.naam
        })
        .then(response => {
          this.bib = response.data;
          this.loading = false;
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  },
  computed: {
    ingecheckt: function() {
      return this.bib.aanwezigen.includes(this.$store.state.naam);
    }
  }
};
</script>

<style scoped>
.kolom {
  display: flex;
  justify-content: space-between;
}
.chips {
  justify-content: space-around;
}
.flex{
  display: flex;
}
</style>
