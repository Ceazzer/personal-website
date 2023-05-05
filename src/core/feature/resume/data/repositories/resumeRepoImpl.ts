import { Usecase } from "../../../../shared/domain/usecases/base";
import { Avatar } from "../../presentation/domain/entities/avatar";
import { ResumeDatasource } from "../domain/datasource/resumeDatasource";
import { AvatarDTO } from "../domain/models/avatar";
import { ResumeRepo } from "../domain/repositories/resumeRepo";

export class ResumeRepoImpl implements ResumeRepo {
    constructor(
        public readonly resumeDatasource: ResumeDatasource
    ) {}

    public async getAvatar(): Promise<Avatar> {
        return AvatarDTO.New(await this.resumeDatasource.getAvatar());
    }

    public static New(resumeDatasource: ResumeDatasource): ResumeRepoImpl {
        return new this(resumeDatasource);
    }
}
