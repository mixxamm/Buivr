<template>
  <v-app id="inspire">
    <div>
      <v-toolbar color="amber">
        <v-toolbar-title>Buivr</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items>
          <v-btn text to="/">Bibs</v-btn>
          <v-btn text to="/account">Account | {{ naam }}</v-btn>
        </v-toolbar-items>

        <!-- <template v-if="$vuetify.breakpoint.smAndUp">
          <v-btn icon>
            <v-icon>mdi-export-variant</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-delete-circle</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-plus-circle</v-icon>
          </v-btn>
        </template> -->
      </v-toolbar>
    </div>
    <router-view></router-view>
    <NaamDialog />
  </v-app>
</template>
<script>
//import HelloWorld from "./components/HelloWorld";
import NaamDialog from "./components/NaamDialog";

export default {
  name: "App",

  components: {
    // HelloWorld
    NaamDialog
  },
  created: function() {
    this.$store.commit("setNaam", localStorage.getItem("naam"));
  },
  data: () => ({
    //
  }),
  computed: {
    naam() {
      return this.$store.state.naam;
    }
  }
};
</script>
