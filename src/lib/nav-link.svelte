<script lang="ts">
    export let link: string;
    export let iconCode: string;
    export let linkText: string;
</script>
<a href="{link}" class="block mt--0 sm:inline-block text-main hover:text-darkAccent mr-4 font-mono">
      <span class="material-symbols-outlined align-bottom text-base">{iconCode}</span> 
      <span class="text-md cursor-pointer">{linkText}</span>
</a>