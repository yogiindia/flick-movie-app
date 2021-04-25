<script>
    import Icon from 'fa-svelte'
    import {faTv,faFilm, faPlayCircle, faTicketAlt, faClock} from '@fortawesome/free-solid-svg-icons'
    import SidebarItem from './SidebarItem.svelte';
</script>

<div class="fixed h-screen border-r pt-28 hidden md:block">
    <!-- sidebar -->
    <SidebarItem title = "tv series">
        <Icon icon={faTv}/>
    </SidebarItem>
    <SidebarItem title = "movies">
        <Icon icon={faFilm}/>
    </SidebarItem>
    <SidebarItem title = "playlists">
        <Icon icon={faPlayCircle}/>
    </SidebarItem>
    <SidebarItem title = "new arrivals">
        <Icon icon={faTicketAlt}/>
    </SidebarItem>
    <SidebarItem title = "coming soon">
        <Icon icon={faClock}/>
    </SidebarItem>
</div>