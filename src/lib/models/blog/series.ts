import type { Blog } from "./blog";

export class Series {
    public id: string | undefined;
    public name: string | undefined;
    public description: string | undefined;
    public image: string | undefined;
    public created: Date | undefined;
    public updated: Date | undefined;
    public blogs: Blog[] | undefined;
}