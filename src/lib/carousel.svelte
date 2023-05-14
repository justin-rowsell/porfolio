<script lang="ts">
	import type { IContent } from "$lib/models/interfaces/i-content";

    export let data: IContent[];
</script>

<div class="flex flex-row">
    {#each data as item}
        <div class="">
            <img src="{item.image}" alt="{item.description}"/>
        </div>
    {/each}
</div>