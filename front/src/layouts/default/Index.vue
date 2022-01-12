<template>
  <v-app id="inspire">
    <DefaultAppBar />
    <v-main class="grey lighten-3">
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import DefaultAppBar from "./AppBar";
export default {
  name: "DefaultLayout",
  components: {
    DefaultAppBar,
  },
};
</script>
