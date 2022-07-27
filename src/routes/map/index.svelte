<script lang="ts">
import { onMount } from "svelte";

import { Loader } from "@googlemaps/js-api-loader"

const loader = new Loader({
  apiKey: "AIzaSyD89g1DjJnWXBgC2opZ5E-pt9yWMcvMHRM",
  version: "weekly",
});

onMount(() => {
  loader.load().then(() => {
  const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: { lat: 41.38238990003848, lng: 2.1785550644179175 },
    zoom: 16,
  });

  const marker = new google.maps.Marker({
    position: { lat: 41.38238990003848, lng: 2.1785550644179175 },
    map: map,
  });

})
})

</script>


<div class="flex-1 relative" id="map">
  hej
</div>