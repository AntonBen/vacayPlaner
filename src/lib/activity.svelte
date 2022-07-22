<script>
import { openModal } from "svelte-modals";
import Modal from "./Modal.svelte";


    export let activity

function handleOpen() {
    openModal(Modal, { 
        date: activity.date,
        method: 'put',
        activity: activity
    })
}
</script>

<div on:click={handleOpen} class="bg-orange-400 text-white font-bold rounded-md flex-1 p-1" >
    {activity.title}
</div>