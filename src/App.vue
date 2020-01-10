<template>
  <v-app id="inspire">
    <div>
      <v-toolbar color="amber">
        <v-toolbar-title>Buivr</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text class="body-1">{{naam}}</v-text>
      </v-toolbar>
      <router-view class="router"></router-view>
    <NaamDialog />
      <!-- <v-toolbar color="amber">
        <v-toolbar-title>Buivr</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-items>
          <v-btn text to="/">Bibs</v-btn>
          <v-btn text to="/colleges">Colleges</v-btn>
          <v-btn text to="/account">Account | {{ naam }}</v-btn>
        </v-toolbar-items>

         <template v-if="$vuetify.breakpoint.smAndUp">
          <v-btn icon>
            <v-icon>mdi-export-variant</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-delete-circle</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-plus-circle</v-icon>
          </v-btn>
        </template> 
      </v-toolbar> -->
      <v-bottom-navigation
    :value="activeBtn"
    grow
    color="amber"
    fixed
    shift
  >
    <v-btn to="/">
      <span>Bibs</span>
      <v-icon>mdi-library</v-icon>
    </v-btn>

    <v-btn to="/colleges">
      <span>Colleges</span>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn to="/account">
      <span>Account</span>
      <v-icon>mdi-account-circle</v-icon>
    </v-btn>
  </v-bottom-navigation>
    </div>
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
<style scoped>
.router{
  margin-bottom: 56px;
}
</style>