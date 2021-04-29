<script>

import {createEventDispatcher} from 'svelte'

export let title = ''
export let active = false;

const dispatch = createEventDispatcher();

function onClick() {
    dispatch("selected")
}


</script>

<li class="cursor-pointer text-gray-500 hover:text-lime-200" class:active on:click={onClick}>
    <div class="flex flex-col justify-center items-center ">                    
        <span class="text-5xl">
            <slot></slot>
        </span>
        <p class="uppercase text-sm">{title}</p>
    </div>
</li>


<style type="text/postcss">
.active {
    @apply text-lime-200;
}
</style>