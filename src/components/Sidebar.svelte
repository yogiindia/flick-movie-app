<script>
    import Icon from 'fa-svelte'
    import SidebarItem from './SidebarItem.svelte';
    import {categories} from '../helper/util'
    import store from '../store'

    $:selected = $store.category;

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