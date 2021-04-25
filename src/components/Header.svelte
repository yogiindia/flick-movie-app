<script>
import Logo from './Logo.svelte';
import Search from './Search.svelte'
</script>

<header class="fixed flex flex-col w-full bg-white">
    <div class="w-full border-b flex items-center justify-center">
        <div class="w-44 p-6 lg:py-6 lg:px-10 flex items-center justify-center">
          <Logo/>
        </div>
        <div class="flex items-center w-full justify-end md:justify-start lg:justify-start  p-6  border-0 lg:border-l">               
            <div class="block md:hidden">
                <button class="focus:outline-none">
                    <span class="text-2xl">   
                        <i class="fas fa-bars"></i>
                    </span>
                </button>
            </div>
            <div class="md:px-0 md:ml-10 lg:px-10 hidden md:block w-1/2">
               <Search/>
            </div>
        </div>
    </div>      
</header>