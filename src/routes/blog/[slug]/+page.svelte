<script lang="ts">
	import type { Blog } from '$lib/models/blog/blog.js';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
    
    export let data: PageData;
    let blog: Blog | undefined;
    let showBlogNotFound: boolean = false;
    let content: string | undefined;
    let formattedBlogDate: string | undefined;
    
    onMount(async () => {
        blog = data.blog;
        content = data.content;
        if (blog && blog.publish_date != undefined) {
            formattedBlogDate = new Date(blog.publish_date).toLocaleDateString();
        } else {
            //if blog not found set flag to show not found html
            showBlogNotFound = true;
        }
	});
</script>
<svelte:head>
  <title>{blog?.title ?? "Justin's Blog"}</title>
  <meta name="description" content={blog?.description ?? ""} />
</svelte:head>
{#if blog != undefined}
    <div class="flex flex-col items-center justify-center w-full max-h-44 overflow-hidden">
        <img src={blog.image} alt={blog.title} />
    </div>
    <div class="container h-full mx-auto w-7/8 sm:w-3/4">
        <!--render the blog header-->
        <div class="mx-auto p-4">
            <div class="flex flex-col items-center justify-center">
                <h1 class="text-5xl font-bold text-center p-8 text-blogAccent">{blog.title}</h1>
            </div>
        </div>
        <!--render the markdown for the blog-->
        <div class="mx-auto px-4 text-md flex-col">
            <div class="flex">
                <div class="flex-grow"></div>
                <div class="flex-none text-blogAccent text-sm">
                    {formattedBlogDate}
                </div>
            </div>
            <div class="flex">
                <div class="flex-grow"></div>
                <div class="flex-none text-blogAccent text-sm pb-8">
                    Justin Rowsell
                </div>
            </div>
            <div class="[&>h1]:text-2xl [&>h1]:py-4 [&>h1]:text-blogAccent 
                [&>h2]:text-xl [&>h2]:py-4 [&>h2]:text-blogAccent 
                [&>h3]:text-lg [&>h3]:py-4 [&>h3]:text-blogAccent 
                [&>p]:text-blogPrimary [&>p]:text-md
                pb-8 hover:text-blue-800 visited:text-purple-600">
                {@html content}
            </div>
        </div> 
    </div>
{:else}
    <div class="container h-screen ">

    </div>
{/if}
{#if showBlogNotFound}
        <!--Else blog not found. Show not found  message and button to return to /blog-->
        <div class="bg-blogSecondary text-blogPrimary">
            <div class="container mx-auto px-4">
                <div class="flex flex-col items-center justify-center">
                    <h1 class="text-5xl font-bold text-center">Blog not found</h1>
                    <p class="text-2xl text-center">
                        Sorry, I couldn't find the blog you were looking for.
                    </p>
                    <a href="/blog" class="btn btn-primary text-blogAccent hover:text-blue">Return to blog</a>
                </div>
            </div>
        </div>
    {/if}