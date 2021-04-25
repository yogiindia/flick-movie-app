<script>
    import Icon from 'fa-svelte'
    import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch'
    import {faAngleDown} from '@fortawesome/free-solid-svg-icons/faAngleDown'
    import {searchMovie} from '../helper/request';

    export let placeholder = "Search for Movies or TV Series";
    let movie = '';

    async function search(event) {
        const response = await searchMovie(movie);
        console.log(response.data)
    }
</script>

<div class="px-4 py-1 flex items-center w-full">
    <div class="flex cursor-pointer">
        <span class="text-gray-400 mr-1 text-sm pt-1">
            <Icon icon={faAngleDown}  />       
        </span>
        <span class="text-gray-400 text-lg">
            <Icon icon={faSearch}/>
        </span>
    </div>
    
    <input  class="text-xl text-gray-400 py-3 px-1  ml-2 focus:outline-none w-full" type="search" placeholder={placeholder}/>
</div>