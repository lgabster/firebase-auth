<template>
  <the-header></the-header>
  <!-- <google-map></google-map> -->
  <router-view />
</template>

<script>
/* import GoogleMap from './components/GoogleMap.vue'; */
import TheHeader from './UI/TheHeader.vue';
import { isAuthenticated, getAuthUser } from './auth';

export default {
  components: {
    /* GoogleMap, */
    TheHeader
  },
  created() {
    isAuthenticated.value = !!getAuthUser()
  }
}
</script>

