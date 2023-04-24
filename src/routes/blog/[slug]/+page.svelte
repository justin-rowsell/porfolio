<script lang="ts">
	import type { Blog } from '$lib/blog/blog.js';
	import { pb } from '$lib/pocketbase.js';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
    
    export let data: PageData;
    let blog: Blog | undefined;
    
    onMount(async () => {
        if (data) {
            blog = data;
        }
	});
</script>
{#if blog != undefined}
    <div>
        <div class="container mx-auto px-4">
            <div class="flex flex-col items-center justify-center">
                <h1 class="text-5xl font-bold text-center">{blog.title}</h1>
                <p class="text-2xl text-center">
                    {blog.description}
                </p>
            </div>
        </div>
    </div>
    <!--render the markdown for the blog-->
    <div class="container mx-auto px-4">
        <div class="markdown">
            {@html blog.content}
        </div>
    </div> 
{:else}
    <!--Else blog not found. Show not found  message and button to return to /blog-->
    <div class="bg-blogSecondary text-blogPrimary">
        <div class="container mx-auto px-4">
            <div class="flex flex-col items-center justify-center">
                <h1 class="text-5xl font-bold text-center">Blog not found</h1>
                <p class="text-2xl text-center">
                    Sorry, we couldn't find the blog you were looking for.
                </p>
                <a href="/blog" class="btn btn-primary">Return to blog</a>
            </div>
        </div>
    </div>
{/if}

