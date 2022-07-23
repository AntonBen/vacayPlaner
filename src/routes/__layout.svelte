<script>
  import { webVitals } from '$lib/vitals';
  import { browser } from '$app/env';
  import { page } from '$app/stores';
  import '../app.css';

  let analyticsId = import.meta.env.VERCEL_ANALYTICS_ID;

  $: if (browser && analyticsId) {
    webVitals({
      path: $page.url.pathname,
      params: $page.params,
      analyticsId
    })
  }
import { Modals, closeModal } from 'svelte-modals';
import Modal from '$lib/Modal.svelte';
</script>


<main class="main">
  <slot />
</main>

<Modals>
  <div
    slot="backdrop"
    class="backdrop"
    on:click={closeModal}
  />
</Modals>


<style>
  .main {
    flex: 1;
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    box-sizing: border-box;
    overflow: auto;
    min-height: 100vh;
  }

  .backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0,0,0,0.50)
  }
</style>
