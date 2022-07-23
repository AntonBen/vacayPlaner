
<script lang="ts">
import Day from "$lib/Day.svelte"
export let activity;
const week = ['07', '08', '09', '10', '11', '12', '13', '14']
const activityMap = new Map();
activity.forEach(act => {
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

<h1>Planera Barca Resan!</h1>
<div class="flex gap-2 px-4 m-5" >  
  {#each week as day}
    <Day activites={activityMap.get(day)} date={day} />
  {/each}
  <div style="min-width: 20px;"></div>
</div>

