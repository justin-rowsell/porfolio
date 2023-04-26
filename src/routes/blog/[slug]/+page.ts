import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types.js';
import { pb } from '$lib/pocketbase.js';
import type { Blog } from '$lib/blog/blog.js';
import { marked } from 'marked';


export async function load({ params }) {
    const slug = params.slug;
    if (slug != undefined) {
        const blog = await pb.collection('blogs').getOne<Blog>(slug);
        if (blog != undefined) {
            return {
                blog,
                content: marked.parse(blog.content)
            }
        }
    }
    throw error(404, 'Not found');
}