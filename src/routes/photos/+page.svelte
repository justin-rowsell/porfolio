<script lang="ts">
    import { onMount } from 'svelte';
	import type { PageData } from './$types';    
	import Carousel from '$lib/carousel.svelte';
    export let data: PageData;

    let photos: Photo[] = [];

    onMount(async () => {
        photos = data.photos;
	});
</script>

<h1 class="text-4xl photosPrimary">My Favorite Photos</h1>
<span class="text-xl">Traveling is one of my passions and I try to do it often. 
    I'm far from a professional photographer, but here are some of my favorites. <br/>
    <span text="italics">Shot on whatever iPhone I had during each trip</span>
</span>
<Carousel data={photos}/>