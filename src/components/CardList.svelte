<script>
    import {onMount,onDestroy} from 'svelte'
    import Card from './Card.svelte'
    import store from '../store'
    import { getGenreById } from '../helper';

    let unsubscribe;
    let category = $store.category;
    let genre = $store.genre;

    $:title = getGenreById(genre).title

    onMount(()=>{
        unsubscribe = store.subscribe((data)=>{
            category = data.category;
            genre = data.genre;
        })
    })


    onDestroy(()=>{
        unsubscribe()
    })

</script>


<div class="px-6">
    <div>
        <h1 class="font-bold text-3xl tracking-wide my-6">{title}</h1>
    </div>
    <div>
        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <li class="">
                <Card />
            </li>            
        </ul>
    </div>
</div>