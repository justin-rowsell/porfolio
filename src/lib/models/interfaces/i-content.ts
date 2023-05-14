export interface IContent {
    id: string | undefined;
    title: string | undefined;
    description: string | undefined;
    image: string | undefined;
    publish_date: Date | undefined;
    formatted_date(): string;
}