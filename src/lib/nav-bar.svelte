<script lang="ts">
  import logo from '$lib/assets/LogoTransparent.png';  
</script>

<nav class="flex items-center justify-between flex-wrap p-6 mb-5">
    <div class="flex items-center flex-shrink-0 mr-6">
      <a href="/">
        <img class="h-6 mr-3 sm:h-9" src="{logo}" alt="Easy as logo"/>
      </a>
    </div>
    <div class="block sm:hidden">
      <button class="flex items-center px-3 py-2 border rounded text-main border-main hover:text-white hover:border-white">
        <svg class="fill-main h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div class="w-full block flex-grow md:flex md:items-center md:w-auto sm:hidden">
        <div class="text-sm md:flex-grow">
          <a href="https://github.com/justin-rowsell/portfolio" target="_blank" rel="noreferrer" 
          class="block mt-4 sm:inline-block sm:mt-0 text-main hover:text-darkAccent mr-4 font-mono">
            <span class="material-symbols-outlined align-bottom text-base">code</span> 
            <span class="text-md cursor-pointer">Source Code</span>
          </a>
        </div>
    </div>
</nav>