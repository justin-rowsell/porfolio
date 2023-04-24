import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types.js';
import { pb } from '$lib/pocketbase.js';
import type { Blog } from '$lib/blog/blog.js';


export async function load({ params }) {
    try{
        const blogRes = await pb.collection('blogs').getList<Blog>();
        return {
            blogs: blogRes.items.sort((a, b) => {
                // sort blog post by publish date
                if (a.publish_date == undefined) {
                    return 1;
                }
                if (b.publish_date == undefined) {
                    return -1;
                }
                return b.publish_date.getTime() - a.publish_date.getTime();
            })
        };
    } catch(error) {
        throw error(500, 'Something went wrong. Please try again later or let me know my website stinks in the contact form.');
        console.error(error);
    }
}