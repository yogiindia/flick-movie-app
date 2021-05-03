<script>
    import {createEventDispatcher} from 'svelte'
    import Icon from 'fa-svelte'
    import {faAngleLeft,faAngleRight,faEllipsisH} from '@fortawesome/free-solid-svg-icons'
    import {paginate} from '../helper'
    
    
    export let totalItems = 1;
    export let pageSize = 20;
    export let maxPage = 5;
    export let activePage = 1;
    
    let pages = []
    let lastPage = -1;
    
    $: {
        const result = paginate(totalItems,activePage,pageSize,maxPage); 
        activePage = result.currentPage;
        pages = result.pages;
        lastPage = result.totalPages
        console.log(result)
        dispatch("pageSelected",activePage)
    }

    const dispatch = createEventDispatcher()

    function onPageClick(page) {
        activePage =page;        
    }

</script>

<div class="flex justify-center items-center my-10">
    <div class="page icon" on:click={()=>onPageClick(activePage-1)} class:disabled={activePage === 1} >
        <Icon icon={faAngleLeft}/>
    </div>

    {#each pages as page (page)}
        <div class="page" class:active={page==activePage} on:click={()=>onPageClick(page)}>{page}</div>
    {/each}
    
    <div class="page icon" on:click={()=>onPageClick(activePage+1)} class:disabled={activePage === lastPage}>
        <Icon icon={faAngleRight} />
    </div>
</div>

<style type="text/postcss">
    .page{
        @apply bg-white text-gray-400 border border-gray-200 w-10 h-10 rounded flex justify-center items-center cursor-pointer mx-1 hover:bg-gray-200;
    }

    .active {
       @apply bg-lime-400 text-white border-none cursor-default hover:bg-lime-400;
    }

    .disabled {
        @apply text-gray-200 hover:text-gray-200 cursor-not-allowed !important;
    }

    .icon {
        @apply text-lg text-gray-500 hover:text-lime-400 cursor-pointer border-none hover:bg-white;
    }
</style>