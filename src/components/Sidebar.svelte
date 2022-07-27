<script>
	export let sidebar = false
	const closeSidebar = () => {
		sidebar = false
	}
</script>

<aside class="absolute w-full md:w-1/6 h-full bg-gray-200 border-r-2 shadow-lg" class:sidebar>
	<nav class="p-12 text-xl">
		<a class="block" on:click={closeSidebar} href="/">Home</a>
		<a class="block" on:click={closeSidebar} href="/map">Map</a>
	</nav>
</aside>

<style>
	aside {
		left: -100%;
		transition: left 0.3s ease-in-out;
		z-index: 1;
	}
	
	.sidebar {
		left: 0
	}
</style>