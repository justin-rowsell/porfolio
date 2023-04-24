<script lang="ts">
    // load blogs from pocketbase on mount
    import { onMount } from 'svelte';
    import { pb } from '$lib/pocketbase';
	import type { Blog } from '$lib/blog/blog';
	import BlogPreview from '$lib/blog/blog-preview.svelte';
    let blogs: Blog[] = [];
    onMount(async () => {
        try{
            const blogRes = await pb.collection('blogs').getList<Blog>();
            blogs = blogRes.items;
        } catch(error) {
            console.error(error);
            // TODO - snack messages to let the user know to come back later.
        }
	});
</script>

<!--Home page for my personal blog. Landing page section at top of page and list the blogs below-->
<!--Using tailwaindcss extended colors. blogPrimary is for text, blogSecondary for the bg-->
<div class="bg-blogSecondary text-blogPrimary h-screen">
    <div class="container mx-auto px-4">
        <div class="flex flex-col items-center justify-center">
            <h1 class="text-5xl font-bold text-center">Welcome to my personal blog.</h1>
            <p class="text-2xl text-center">
                In 2022, I decided to leave my 9-5 to find a way to make a more meaningful impact with my skillset.
                That decision has led me to trying to understand the climate impacts our increasingly modernized societies have on the world.
                I started this blog as a way for myself to dive deeper into some of the specific climate based problems we face today and share that info with you along the way.<br/>
                (In other words, don't worry, you can read on without being sold anything)
            </p>
        </div>
    </div>
    <!--Blog list-->
    <div class="container mx-auto px-4">
        {#each blogs as blog}
            <BlogPreview blog={blog}></BlogPreview>
        {/each}
    </div>
</div>

