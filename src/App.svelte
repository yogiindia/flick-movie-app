<script>
	import Header from './components/header.svelte'
	export let name;
</script>

<main>
	<Header {name} />
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>


<style global type="text/postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>


