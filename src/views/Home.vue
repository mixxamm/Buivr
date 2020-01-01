<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div class="flex">
      <div class="bib" v-for="bib in bibs" v-bind:key="bib._id">
        <v-card max-width="350">
          <v-img
            class="white--text align-end"
            height="200px"
            :src="bib.foto"
            :contain="bib.contain ? true : false"
            @load="load(bib)"
          >
            <v-card-title :style="{ color: '#' + bib.tekstkleur }">
              {{ bib.naam }}
            </v-card-title>
          </v-img>

          <div class="kolom">
            <v-card-subtitle
              class="pb-0"
              :style="[
                bib.aanwezigen.length < bib.capaciteit * 0.6
                  ? {}
                  : { color: 'red' }
              ]"
              >{{ bib.aanwezigen.length }}/{{ bib.capaciteit }}</v-card-subtitle
            >
            <v-chip
              class="ma-2"
              :color="bib.open ? 'primary' : 'red'"
              outlined
              pill
              >{{ bib.open ? "Open" : "Gesloten" }}</v-chip
            >
          </div>

          <v-card-text class="text--primary">
            <div>{{ bib.beschrijving }}</div>
            <div>
              <v-icon>place</v-icon>
              {{ bib.adres.straat }} {{ bib.adres.nummer }},
              {{ bib.adres.postcode }} {{ bib.adres.plaats }}
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn color="orange" text :disabled="!bib.open">Inchecken</v-btn>

            <v-btn color="orange" text :to="`bib/` + bib._id"
              >Meer informatie</v-btn
            >
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    //HelloWorld
  },
  data() {
    return {
      bibs: [],
      loading: true
    };
  },
  mounted() {
    this.axios
      .get(`http://192.168.43.97:3000/bib`)
      .then(response => {
        const bibs = response.data.map(bib => {
          bib.loading = true;
          return bib;
        });
        this.bibs = bibs;
      })
      .catch(e => {
        this.errors.push(e);
      });
  },
  methods: {
    load(bib) {
      console.log(bib);
      //bib.loading = false;
    }
  }
};
</script>
<style scoped>
.bib {
  margin: 16px auto;
}
.flex {
  display: flex;
  justify-content: center;
}
.kolom {
  display: flex;
  justify-content: space-between;
}
@media (orientation: portrait) {
  .flex {
    display: flex;
    flex-direction: column;
  }
}
</style>
