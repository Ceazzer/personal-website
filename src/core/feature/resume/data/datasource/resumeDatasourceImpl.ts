import { ResumeDatasource } from "../domain/datasource/resumeDatasource";

export class ResumeDatasourcedImpl implements ResumeDatasource {
    constructor() {}

    public async getAvatar(): Promise<string> {
        return "/avatar1.png";
    }

    public static New(): ResumeDatasourcedImpl {
        return new this();
    }
}