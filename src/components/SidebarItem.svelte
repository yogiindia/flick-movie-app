<script>
    export let title = ""
</script>

<div class=" flex flex-col items-center justify-center w-44 py-3 border-b cursor-pointer">
    <div>
        <span class="text-3xl text-gray-400">
            <slot></slot>
        </span>
    </div>
    <div class="mt-2">
        <h4 class="capitalize text-lg text-gray-400">{title}</h4>
    </div>
</div>