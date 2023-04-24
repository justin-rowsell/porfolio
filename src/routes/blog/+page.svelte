<script lang="ts">
    import { onMount } from 'svelte';
	import type { Blog } from '$lib/blog/blog';
	import BlogPreview from '$lib/blog/blog-preview.svelte';
	import type { PageData } from './$types';    
    export let data: PageData;

    let blogs: Blog[] = [];

    onMount(async () => {
        blogs = data.blogs;
	});
</script>

<!--Home page for my personal blog. Landing page section at top of page and list the blogs below-->
<!--Using tailwaindcss extended colors. blogPrimary is for text, blogSecondary for the bg-->
<div class="bg-blogSecondary text-blogPrimary h-screen md:px-20 px-4">
    <div class="container mx-auto pb-16">
        <div class="flex flex-col items-center justify-center">
            <h1 class="text-4xl m-12 md:text-5xl md:m-16 font-bold text-center ">Justin Rowsell's Blog</h1>
            <p class="text-md md:text-lg text-left text-blogPrimary">
                In 2022, I left my 9-5 job to use my skills to make a difference. Since then, I’ve transitioned to freelancing with climate tech companies and decided I need to understand the issues better if I’m going to contribue. I created this blog to share what I learn as I go. I'm selling anything here, just sharing information I hope you find helpful.
            </p>
        </div>
    </div>
    <!--Blog list-->
    <div class="container mx-auto">
        {#each blogs as blog}
            <BlogPreview blog={blog}></BlogPreview>
        {/each}
    </div>
</div>

