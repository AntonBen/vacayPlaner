<script>
    import { closeModal, closeAllModals, modals } from 'svelte-modals'
      import { fly } from 'svelte/transition'
import { enhance } from './form';
      
    export let isOpen
    export let date
      
  </script>
  
  {#if isOpen}
      <!-- on:introstart and on:outroend are required to transition 1 at a time between modals -->
    <div class="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" role="dialog" transition:fly={{ y: 50 }} on:introstart on:outroend>
      <div class="contents">
        <form
            action="/planer"
            method="post"
            use:enhance={{
            result: async ({ form }) => {
                form.reset();
            }
            }}
            class="flex flex-col bg-slate-500 gap-4 p-10 rounded-md"
        >
        <div class="flex flex-col">
            <label class="text-white font-bold" for="R"> Rubrik </label>
            <input name="title" placeholder="Rubrik" required />
        </div>
        
        <textarea name="description" placeholder="beskriv lite mer..." required />
        <input type="hidden" name="date" value={date} />
        <input type="time" name="start_date" />
        <input type="hidden" value={1} name="color" >
        <input type="submit" value="done"/>
      </div>
    </div>
  {/if}