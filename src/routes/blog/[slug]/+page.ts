import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types.js';
import { pb } from '$lib/pocketbase.js';
import type { Blog } from '$lib/blog/blog.js';


export async function load({ params }) {
    const slug = params.slug;
    if (slug != undefined) {
        
        const blogId = params.slug;
        const blog = await pb.collection('blogs').getOne<Blog>(blogId);
        console.log(blog);
        if (blog != undefined) {
            return blog;
        }
    }
    throw error(404, 'Not found');
}