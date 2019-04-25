<template>
  <v-app>
    <Navbar />
    <v-content class="mx-4 mb-4 lighten-4 grey">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

import Navbar from "./components/Navbar";
export default {
  name: 'App',
  components: {
      Navbar
  },
  data () {
    return {
      //
    }
  }
}
</script>
