<template>
    <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="500">
      <v-card>
        <v-card-title class="headline">Geef je naam</v-card-title>
        <v-container fluid>
        <v-col cols="12" justify="center">
          <v-text-field
            label="Naam" v-model="naam"
          ></v-text-field>
        </v-col>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="setNaam()">Instellen</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
    name: "NaamDialog",
    computed: {
        dialog() {
            return (this.$store.state.naam == null || this.$store.state.naam == "")
        },
    },
    data(){
        return{
            naam: ""
        }
    },
    methods:{
        setNaam(){
            this.$store.commit('setNaam', this.naam)
        }
    }
  }
</script>

<style>

</style>