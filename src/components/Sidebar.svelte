<script>
    import {onMount,onDestroy} from 'svelte'
    import Icon from 'fa-svelte'
    import {faTv,faFilm, faPlayCircle, faTicketAlt, faClock} from '@fortawesome/free-solid-svg-icons'
    import SidebarItem from './SidebarItem.svelte';
    import {categories} from '../helper'
    import store from '../store'

    let unsubscribe;
    let selected = $store.category;

    onMount(()=>{
        unsubscribe = store.subscribe(({category})=>{
            selected = category
        })
    })

    onDestroy(()=>{
        unsubscribe()
    })

    function onSelected(id) {
        store.updateStore({type:"category",payload:id})
    }

</script>

<div class="fixed h-screen border-r pt-28 hidden md:block">
    {#each categories as {id,icon,title} (id)}
        <SidebarItem {title} active={selected === id} on:selected={()=>onSelected(id)} >
            <Icon {icon} />
        </SidebarItem>
    {/each}
</div>