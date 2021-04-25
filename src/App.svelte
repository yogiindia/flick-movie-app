<script>
import Header from './components/Header.svelte';
import Sidebar from './components/Sidebar.svelte';
</script>

<main>
	<Header/>
	<div class="flex">
		<Sidebar/>
	</div>
</main>


<style global type="text/postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>


