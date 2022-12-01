<!-- <template>
    <GMapMap
        :center="{lat: 51.093048, lng: 6.842120}"
        :zoom="7"
        map-type-id="terrain"
        style="width: 100vw; height: 900px"
    >
    </GMapMap>
  </template>
  
  <script >
  export default {
    name: 'App',
    data() {
      return {
        center: {lat: 51.093048, lng: 6.842120},
      }
    }
  }
  </script> -->

  <template>
    <GoogleMap
    api-key="AIzaSyAU8TmfOrcYFnueIKID2uqF9JWlf0yOcrs"
    style="width: 100%; height: 620px"
    :center="center"
    :zoom="15"
    >
      <Marker :options="{ position: center }" />
    </GoogleMap>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  import { GoogleMap, Marker } from 'vue3-google-map'
  
  export default defineComponent({
    components: { GoogleMap, Marker },
    setup() {
      const center = { lat: 40.689247, lng: -74.044502 }
  
      return { center }
    },
  })
  </script>