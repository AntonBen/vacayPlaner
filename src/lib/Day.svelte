<script >
import Activity from "./activity.svelte";
import Modal from "./Modal.svelte";
import { Modals, openModal } from 'svelte-modals'

export let activites;
export let date;
const newDate = new Date(`2022-08-${date}`);
const stringDate = newDate.toLocaleDateString("sv-se", {weekday: 'long'});

function handleOpen() {
    openModal(Modal, { 
        date: newDate,
        method: 'post'
    })
}
</script>

<div class="flex-1">
    <p class="font-bold capitalize" >{stringDate}</p>
    <div class="flex min-w-40 bg-white flex-col gap-2 h-96 flex-1 border-solid border-2 p-1 rounded-md justify-end" >
        {#if activites}
            {#each activites as activity }
                <Activity activity={activity} />
            {/each}
        {/if}
        <div>
            <button on:click={handleOpen} class="bg-sky-600 text-white w-full font-bold flex justify-between px-2 p-1 rounded-md">Add<span>+</span></button>
        </div>
    </div>
</div>