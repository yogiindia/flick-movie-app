<script>
    export let title = ''
</script>

<li class="cursor-pointer text-gray-500 hover:text-lime-200">
    <div class="flex flex-col justify-center items-center ">                    
        <span class="text-5xl">
            <slot></slot>
        </span>
        <p class="uppercase text-sm">{title}</p>
    </div>
</li>