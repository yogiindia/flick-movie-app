<script>
    import {createEventDispatcher} from 'svelte'
    import Icon from 'fa-svelte'
    import {faAngleLeft,faAngleRight,faEllipsisH} from '@fortawesome/free-solid-svg-icons'
    import {paginate} from '../helper'
    
    
    export let totalPages = 1;
    export let pageSize = 20;
    export let maxPage = 5;

    let activePage = 1;
    let showPages = paginate(totalPages,activePage,pageSize,maxPage).pages;
    

    const dispatch = createEventDispatcher()

    function onPageClick(page) {
        const {pages,currentPage} = paginate(totalPages,page,pageSize,maxPage);
        showPages = pages;
        activePage = currentPage;
        dispatch("pageSelected",activePage)
    }

</script>

<div class="flex justify-center items-center my-10">
    <div class="page icon" on:click={()=>onPageClick(activePage-1)}>
        <Icon icon={faAngleLeft}/>
    </div>

    {#each showPages as page (page)}
        <div class="page" class:active={page==activePage} on:click={()=>onPageClick(page)}>{page}</div>
    {/each}
    
    <div class="page icon" on:click={()=>onPageClick(activePage+1)}>
        <Icon icon={faAngleRight}/>
    </div>
</div>

<style type="text/postcss">
    .page{
        @apply bg-white text-gray-400 border border-gray-200 w-10 h-10 rounded flex justify-center items-center cursor-pointer mx-1 hover:bg-gray-200;
    }

    .active {
       @apply bg-lime-400 text-white border-none cursor-default hover:bg-lime-400;
    }

    .icon {
        @apply text-lg text-gray-500 hover:text-lime-400 cursor-pointer border-none hover:bg-white;
    }
</style>