<template>
  <div>
    <p class="error">{{ error }}</p>
    <qrcode-stream
      @decode="onDecode"
      @init="onInit"
      style="max-width: 400px;"
    ></qrcode-stream>
  </div>
</template>

<script>
import { QrcodeStream } from "vue-qrcode-reader";
export default {
  name: "account",
  components: {
    QrcodeStream
  },
  data() {
    return {
      code: "",
      error: ""
    };
  },
  methods: {
    onDecode(decodedString) {
      this.code = decodedString;
      this.$router.push({ name: "bib", params: { id: this.code } });
    },
    async onInit(promise) {
      try {
        await promise;
      } catch (error) {
        if (error.name === "NotAllowedError") {
          this.error = "ERROR: you need to grant camera access permisson";
        } else if (error.name === "NotFoundError") {
          this.error = "ERROR: no camera on this device";
        } else if (error.name === "NotSupportedError") {
          this.error = "ERROR: secure context required (HTTPS, localhost)";
        } else if (error.name === "NotReadableError") {
          this.error = "ERROR: is the camera already in use?";
        } else if (error.name === "OverconstrainedError") {
          this.error = "ERROR: installed cameras are not suitable";
        } else if (error.name === "StreamApiNotSupportedError") {
          this.error = "ERROR: Stream API is not supported in this browser";
        }
      }
    }
  }
};
</script>

<style></style>
