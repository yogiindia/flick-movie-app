<script>
import store from '../store';
import GenreItem from './GenreItem.svelte';
import {getMovieGenres,getSvgIcon} from '../helper'

const genres = getMovieGenres();

$: selected = $store.genre;

</script>

<div class="border-b border-gray-200 broder-top pt-28">
    <ul class="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-4 justify-items-center px-6 py-2 mx-auto w-full text-center">        
        {#each genres as {title,id} (id)}
            <GenreItem {title} active={selected === id} on:selected={()=>store.updateStore({type:"genre",payload:id})}>
                <svelte:component this = {getSvgIcon(title)}/>
            </GenreItem>
        {/each}
    </ul>
</div>