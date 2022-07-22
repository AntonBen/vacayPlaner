
<script lang="ts">
import Day from "$lib/Day.svelte"
export let activity;
const week = ['07', '08', '09', '10', '11', '12', '13', '14']
const activityMap = new Map();
const activityKeys = activity.map(act => {
  const day = act.date.substring(8,10)
  if (activityMap.has(day)) {
    return activityMap.set(day, [...activityMap.get(day), act])
  }
  return activityMap.set(day, [act])
})

</script>

<svelte:head>
  <title>BARCA!</title>
  <meta name="description" content="vacay planer" />
</svelte:head>

<div class="flex bg-slate-50 gap-2 px-4 py-10" >
  {#each week as day}
    <Day activites={activityMap.get(day)} date={day} />
  {/each}
</div>

