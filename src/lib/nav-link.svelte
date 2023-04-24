<script lang="ts">
    export let link: string;
    export let iconCode: string;
    export let linkText: string;
    export let hoverColor: string;
</script>
<a href="{link}" class="flex mt--0 sm:inline-block hover:{hoverColor} mr-4 font-mono">
      <span class="material-symbols-outlined align-bottom text-base sm:pr-0 pr-1">{iconCode}</span> 
      <span class="text-md cursor-pointer">{linkText}</span>
</a>