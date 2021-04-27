<script>
    import Rating from './Rating.svelte'
</script>


<div class="border border-gray-200 shadow-md">
    <div class="">
        <img src="./static/images/listing-1.jpg" alt="" class="w-full">
    </div>
    <div class="px-6 py-6 flex justify-between">
        <h3 class="text-gray-800 text-sm capitalize" style="font-family: 'Montserrat', sans-serif;">The wild things are</h3>
        <div class="">
           <Rating value="5.0" strokeWidth="2" size="32" fontSize="10px" />
        </div>
    </div>
</div>