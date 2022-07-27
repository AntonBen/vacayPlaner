<script lang="ts">
import Hamburger from "./icons/Hamburger.svelte";


 export let sidebar: boolean = false;
</script>

<header class="flex justify-between bg-gray-200 p-2 items-center text-gray-600 border-b-2">
	<nav class="flex">
		<Hamburger bind:open={sidebar}/>
	</nav>
	
</header>