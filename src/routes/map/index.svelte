<script lang="ts">
import { onMount } from "svelte";

import { Loader } from "@googlemaps/js-api-loader"

onMount(() => {

  const loader = new Loader({
  apiKey: import.meta.env.VITE_GOOGLE_MAP,
  version: "weekly",
});

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