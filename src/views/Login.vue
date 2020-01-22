<template>
  <div>
    <h1>Login</h1>
    <v-btn @click="login()">Login</v-btn>
  </div>
</template>

<script>
import firebase from "firebase";
var provider = new firebase.auth.GoogleAuthProvider();
export default {
  methods: {
    login() {
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          // ...
          console.log(token)//dit nog opslaan indien nodig voor verder gebruik
          this.$store.commit("setLogin", user)
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
          console.log(errorCode, errorMessage, email, credential);
        });
    }
  }
};
</script>

<style>
</style>