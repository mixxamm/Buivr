<template>
  <v-app id="inspire">
    <div>
      <v-toolbar color="amber">
        <v-toolbar-title>Buivr</v-toolbar-title>
        <v-spacer></v-spacer>
        {{this.$store.state.user.data.displayName}}
      </v-toolbar>
      <transition name="fade">
        <router-view class="router"></router-view>
      </transition>
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
      </v-toolbar>-->
      <Navbar/>
    </div>
    <vue-ins-progress-bar></vue-ins-progress-bar>
    <NaamDialog />
  </v-app>
</template>
<script>
//import HelloWorld from "./components/HelloWorld";
import NaamDialog from "./components/NaamDialog";
import Navbar from "./components/Navbar";

export default {
  name: "App",

  components: {
    // HelloWorld
    NaamDialog,
    Navbar
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
.router {
  margin-bottom: 56px;
}
.fade-enter-active {
  transition: all .6s cubic-bezier(0.39, 0.575, 0.565, 1);
}

.fade-enter /* .fade-leave-active below version 2.1.8 */ {
  /*transform: scale(0.98);*/
  opacity: 0;
}

span.v-btn__content{
  height: 56px!important;
}

</style>