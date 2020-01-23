<template>
  <v-app>
    <v-app-bar app color="amber" dark>
      <div class="d-flex align-center">
        <!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />-->

        <span class="display-1">Buivr</span>
      </div>

      <v-spacer></v-spacer>
      <span></span>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
    <template>
      <v-bottom-navigation grow color="amber" fixed shift>
        <v-btn to="/">
          <span>Recents</span>
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
    </template>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  })
};
</script>
