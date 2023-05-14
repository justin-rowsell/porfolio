import type { IContent } from "./interfaces/i-content";

export abstract class BaseConent implements IContent {
    public id: string | undefined;
    public title: string | undefined;
    public content: string | undefined;
    public description: string | undefined;
    public image: string | undefined;
    public publish_date: Date | undefined;
    public formatted_date(): string {
        if (this.publish_date != undefined) {
            return new Date(this.publish_date).toLocaleDateString();
        }
        return '';
    }
} 