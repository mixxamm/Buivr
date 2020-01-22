<template>
  <v-bottom-navigation grow color="amber" fixed shift>
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
</template>

<script>
export default {

}
</script>

<style>

</style>