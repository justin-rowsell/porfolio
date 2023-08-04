<script lang="ts">
	import { onMount } from "svelte";
	import type { Blog } from "../models/blog/blog";
    export let blog: Blog;
    let formattedBlogDate: string | undefined;
    let slugName: string;
    onMount(async () => {
        if (blog && blog.publish_date != undefined && blog.title != undefined) {
            formattedBlogDate = new Date(blog.publish_date).toLocaleDateString();
            slugName = blog.title.replace(/\s+/g, '-');
        }
    });
</script>
<!--Horizontal preview for a blog. Square preview of the blog photo on the left side of the block, with text in larger font to the right and the description displayed below-->
<div class="flex flex-col items-start justify-start pb-8">
    <div class="flex flex-row items-start justify-start">
        <img src={blog.image} alt={blog.title} class="w-1/4 pr-4" />
        <div class="flex flex-col items-start justify-start ">
            <h1 class="text-xl font-bold text-left text-blogAccent pb-2">{blog.title}</h1>
            <p class="text-md text-left text-blogPrimary">{blog.description}</p>
            <a href="blog/{slugName}" class="justify-end items-end mt-auto"> 
                <span class="text-md text-right underline text-blogAccent hover:text-blogPrimary">Read More</span>
            </a>
        </div>
        <div class="flex">
            <p class="text-md text-left text-blogPrimary">{formattedBlogDate}</p>
        </div>
    </div>
</div>