<script>
    import Rating from './Rating.svelte'

    export let rating = "0";
    export let title = "";
    // export let 
</script>


<div class="border border-gray-200 shadow-md">
    <div class="">
        <img src="./static/images/listing-1.jpg" alt="" class="w-full">
    </div>
    <div class="px-5 py-4 flex justify-between">
        <h3 class="text-gray-800 text-sm capitalize self-center hover:text-lime-400" style="font-family: 'Montserrat', sans-serif;">{title}</h3>
        <div class="">
           <Rating value={rating} outerStroke="#3f6d2b" innerStroke="#cbf0bb" strokeWidth="3" size="40" fontSize="12px" />
        </div>
    </div>
</div>