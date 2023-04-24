<script lang="ts">
	import type { Blog } from "./blog";
    export let blog: Blog;
</script>
<!--Blog item with a small preview of the image, title, and description-->
<div class="flex flex-col items-center justify-center">
    <img src={blog.image} alt={blog.title} />
    <h1 class="text-5xl font-bold text-center">{blog.title}</h1>
    <p class="text-2xl text-center">{blog.description}</p>
    <a href="blog/{blog.id}" class="flex mt--0">
        <span class="material-symbols-outlined align-bottom text-base sm:pr-0 pr-1">right_arrow</span> 
        <span class="text-md cursor-pointer">Read On</span>
</div>