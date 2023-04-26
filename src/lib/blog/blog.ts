export class Blog {
    constructor() {}
    public id: string | undefined;
    public title: string | undefined;
    public content: string | undefined;
    public description: string | undefined;
    public image: string | undefined;
    public created: Date | undefined;
    public updated: Date | undefined;
    public publish_date: Date | undefined;
    public formatted_date(): string {
        if (this.publish_date != undefined) {
            return new Date(this.publish_date).toLocaleDateString();
        }
        return '';
    }
}