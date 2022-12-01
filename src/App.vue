<template>
  <the-header></the-header>
  <!-- <google-map></google-map> -->
  <!-- <router-view></router-view> -->
  <router-view />
</template>

<script>
/* import GoogleMap from './components/GoogleMap.vue'; */
import TheHeader from './UI/TheHeader.vue';

export default {
  components: {
    /* GoogleMap, */
    TheHeader
  },
}
</script>

