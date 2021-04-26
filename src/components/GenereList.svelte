<script>
import GenreItem from './GenreItem.svelte';
import {Action,Adventure,Animation,Comedy,Romance,SciFi,Thriller,Western,Horror,Fantasy,Drama,Documentary} from './SvgIcons'
</script>

<div class="border-b border-gray-200 broder-top pt-28">
    <ul class="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-4 justify-items-center px-6 py-2 mx-auto w-full text-center">        
        <GenreItem title="action">
            <Action/>
        </GenreItem>
        <GenreItem title="adventure">
            <Adventure/>
        </GenreItem>
        <GenreItem title="animation">
            <Animation/>
        </GenreItem>
        <GenreItem title="comedy">
            <Comedy/>
        </GenreItem>
        <GenreItem title="documentary">
            <Documentary/>
        </GenreItem>
        <GenreItem title="drama">
            <Drama/>
        </GenreItem>
        <GenreItem title="fantasy">
            <Fantasy/>
        </GenreItem>
        <GenreItem title="horror">
            <Horror/>
        </GenreItem>
        <GenreItem title="romance">
            <Romance/>
        </GenreItem>
        <GenreItem title="sci & fic">
            <SciFi/>
        </GenreItem>
        <GenreItem title="thriller">
            <Thriller/>
        </GenreItem>
        <GenreItem title="western">
            <Western/>
        </GenreItem>
    </ul>
</div>