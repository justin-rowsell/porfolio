import { error } from '@sveltejs/kit';
import { pb } from '$lib/pocketbase.js';
import type { Blog } from '$lib/models/blog/blog.js';
import { marked } from 'marked';


export async function load({ params }) {
    const slug = params.slug;
    if (slug != undefined) {
        // replace hyphens with spaces
        const blogName = slug.replace(/-/g, ' ');
        const blog = await pb.collection('blogs').getFirstListItem<Blog>(`title = '${blogName}'`);
        if (blog != undefined && blog.content != undefined) {
            const pojo = structuredClone(blog);
            return {
                blog: pojo,
                content: marked.parse(blog.content)
            };
        }
    }
    throw error(404, 'Not found');
}