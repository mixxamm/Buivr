<template>
  <v-card max-width="350">
    <v-img
      class="white--text align-end"
      height="200px"
      :src="bib.foto"
      :contain="bib.contain ? true : false"
      @load="load(bib)"
    >
      <v-card-title :style="{ color: '#' + bib.tekstkleur }">{{
        bib.naam
      }}</v-card-title>
    </v-img>

    <div class="kolom">
      <v-card-subtitle
        class="pb-0"
        :style="[
          bib.aanwezigen.length < bib.capaciteit * 0.6 ? {} : { color: 'red' }
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
        {{ bib.adres.straat }} {{ bib.adres.nummer }}, {{ bib.adres.postcode }}
        {{ bib.adres.plaats }}
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn color="orange" text :disabled="!bib.open">Inchecken</v-btn>

      <v-btn color="orange" text :to="`bib/` + bib._id">Meer informatie</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Bib",
  props: ["bib"]
};
</script>

<style></style>
