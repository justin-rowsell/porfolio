<script lang="ts">
    import { onMount } from 'svelte';
	import type { Blog } from '$lib/models/blog/blog';
	import BlogPreview from '$lib/blog/blog-preview.svelte';
	import type { PageData } from './$types';    
    export let data: PageData;

    let blogs: Blog[] = [];

    onMount(async () => {
        blogs = data.blogs;
	});
</script>
<svelte:head>
  <title>Justin's Blog | Home</title>
  <meta name="description" content="Home page for Justin Rowsell's personal blog" />
</svelte:head>
<!--Home page for my personal blog. Landing page section at top of page and list the blogs below-->
<!--Using tailwaindcss extended colors. blogPrimary is for text, blogSecondary for the bg-->
<div class="bg-blogSecondary text-blogAccent min-h-screen> md:px-20 px-4">
    <div class="container mx-auto pb-16">
        <div class="flex flex-col items-center justify-center">
            <h1 class="text-4xl m-12 md:text-5xl md:m-16 font-bold text-center">Justin Rowsell's Blog</h1>
        </div>
    </div>
    <!--Blog list-->
    <div class="container mx-auto">
        {#each blogs as blog}
            <BlogPreview blog={blog}></BlogPreview>
        {/each}
    </div>
</div>

