<script lang="ts">
import { invalidate } from '$app/navigation';

  import { closeModal, closeAllModals, modals } from 'svelte-modals'
  import { fly } from 'svelte/transition';
  import { enhance } from './form';

  export let isOpen: boolean
  export let date: Date
  export let method: string
  export let activity = {title: '', description: '', id: ''}

  const deleteActivity = async (event:MouseEvent) => {
    console.log("delete " + activity.id )
    try {
      const response = await fetch(`/planer/${activity.id}?_method=DELETE`, {
        method: 'POST',
        headers: {
          accept: 'application/json'
        }
      });

      if (response.ok) {
        console.log("delete")
        closeModal();
        window.location.href = window.location.href
      }
    } catch (e) {
      console.error(e)
    }
  }

</script>
  
  {#if isOpen}
    <div class="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" role="dialog" transition:fly={{ y: 50 }} on:introstart on:outroend>
      <div class="contents">
        <form
            action="/planer"
            use:enhance={{
            result: async ({ form, data }) => {
                form.reset();
                closeModal();
                window.location.href = window.location.href
            }
            }}
            class="flex flex-col"
        >
        <div class="shadow sm:rounded-md sm:overflow-hidden">
          <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div class="grid grid-cols-3 gap-6">
              <div class="col-span-3 sm:col-span-2">
                <label for="title" class="block text-sm font-medium text-gray-700"> Rubrik </label>
                <div class="mt-1 flex rounded-md shadow-sm">
                  <input value={activity.title} type="text" name="title"  class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300" placeholder="Rubrik" required>
                </div>
              </div>
            </div>
            <div>
              <label for="description" class="block text-sm font-medium text-gray-700"> Beskrivning </label>
              <div class="mt-1">
                <textarea value={activity.description} name="description" rows="3" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="you@example.com"></textarea>
              </div>
            </div>
          </div>
          <input type="hidden" name="date" value={date} />
          <input type="hidden" value={1} name="color" >
          <input type="hidden" value={activity.id} name="id" >
          <input type="hidden" name="_method" value={method} />
          <div class="px-4 py-3 bg-gray-50 flex flex-row-reverse justify-between sm:px-6">
            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              {method === 'post' ? 'Add' : 'Update'}
            </button>
            {#if method === 'put'}
            <button type="button" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" on:click={deleteActivity}> Delete</button>
            {/if}
            
          </div>
        </div>
        </form>
      </div>
    </div>
  {/if}