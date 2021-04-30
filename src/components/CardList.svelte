<script>
    import {onMount,onDestroy} from 'svelte'
    import Card from './Card.svelte'
    import store from '../store'
    import { getGenreById, getMoviesByGenres } from '../helper';

    let base_url = `https://image.tmdb.org/t/p/w500/`;
    
    $: category = $store.category;
    $: genre = $store.genre;
    $: items = $store.items;
    $: loading = $store.loading;
    $: title = getGenreById(genre).title

    $: {
        store.fetchData(category,genre)
    }

</script>


<div class="px-6">
    <div>
        <h1 class="font-bold text-3xl tracking-wide my-6">{title}</h1>
    </div>
    <div>
        {#if !loading}
        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {#each items as {id,title,vote_average,poster_path} (id)}
                <li class="cursor-pointer">
                    <Card
                        rating = {vote_average}
                        imageSrc = {`${base_url+poster_path}`}
                        {title}
                    />
                </li>
            {/each}      
        </ul>
        {:else}
            <span>Loading</span>
        {/if}
    </div>
</div>