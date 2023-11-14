import { BaseConent } from "../base-content";


export class Blog extends BaseConent {
    public created: Date | undefined;
    public updated: Date | undefined;
    public views: number | undefined;
}