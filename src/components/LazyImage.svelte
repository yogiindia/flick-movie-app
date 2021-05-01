<script>
    import Skeleton from 'svelte-skeleton'
    import {onMount} from 'svelte'
    export let src;
    let loaded = false;

    onMount(()=>{
        const img = new Image();
		img.src = src;
        img.onload = () => {
            loaded = true;
        };
    })
</script>

{#if loaded}
    <img src={src} alt="poster" class="w-full">
{:else}
    <Skeleton height="400" width="100%">
        <rect width="100%" height="400" x="0" y="0" rx="0" ry="0" />
    </Skeleton>
{/if}