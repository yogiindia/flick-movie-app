<script>
import CardList from './CardList.svelte';
import GenereList from './GenereList.svelte';
import Header from './Header.svelte';
import Sidebar from './Sidebar.svelte';
</script>
    
<main>
    <Header/>
    <div class="flex">
        <Sidebar/>
        <div class="ml-0 md:ml-44 w-full">
            <GenereList/>
            <CardList/>
        </div>
    </div>
</main>