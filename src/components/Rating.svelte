<script>
    import {onMount} from 'svelte';
	
    export let value;
    export let size = 70;
    export let strokeWidth = 1;
    export let innerStroke = `rgba(0,0,0,.5)`;
    export let outerStroke = `rgb(0,0,0)`;
    export let fontSize = '10px';
    export let color = '#000';
   
    $: {
        console.log(radius)
    }

    $:radius = (size / 2) - (strokeWidth * 2)
    $:circumference = radius * 2 * Math.PI;
    $:offset = circumference - value/10 * circumference;
    $:origin = size/2;
</script>

 <svg width={size} height={size}>
    <circle
        fill="transparent"
        stroke-width={strokeWidth}
        stroke = {innerStroke}
        r={radius}
        cx={origin}
        cy={origin}/>
    <circle
        class="circle"
        stroke-width={strokeWidth}          
        stroke = {outerStroke}   
        stroke-dasharray={`${circumference} ${circumference}`}
        stroke-dashoffset= {offset}                
        fill="transparent" 
        r={radius}
        cx={origin}
        cy={origin}/>
    <text x="50%" y="50%" fill={color} text-anchor="middle" dy=".3em" font-size={fontSize} font-weight="bold" font-family="'Montserrat', sans-serif">{value}</text>
</svg>

<style>
   
    .circle {
        transition: 0.35s stroke-dashoffset;
        transform: rotate(-90deg);
        transform-origin: 50% 50%;
    }
</style>