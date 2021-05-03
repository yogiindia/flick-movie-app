<script>
    import Card from './Card.svelte'
    import store from '../store'
    import { getGenreById } from '../helper';
    import Pagination from './Pagination.svelte'
    import Skeleton from './Skeleton.svelte';

    let base_url = `https://image.tmdb.org/t/p/w500/`;

    let page = 1;
    
    $: category = $store.category;
    $: genre = $store.genre;
    $: items = $store.items;
    $: loading = $store.loading;
    $: page = $store.page;
    $: title = getGenreById(genre).title
    $: totalItems = $store.total_items

    $: {
        store.fetchData(category,genre,page);
        console.log(category,genre,page)
    }

</script>


<div class="px-6">
    <div>
        <h1 class="font-bold text-3xl tracking-wide my-6">{title}</h1>
    </div>
    <div>
        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {#if !loading}
                {#each items as {id,title,vote_average,poster_path} (id)}
                    <li class="cursor-pointer">
                        <Card
                            rating = {vote_average}
                            imageSrc = {`${base_url+poster_path}`}
                            {title}
                        />
                    </li>
                {/each}      
            {:else}
                {#each Array(20) as item,index (index)}
                <Skeleton/>
                {/each}
            {/if}
        </ul>
    </div>
    <Pagination 
        {totalItems}
        activePage = {page} 
        on:pageSelected={(event)=>store.updateStore({type:"page",payload:event.detail})}/>
</div>