import { Avatar } from "../../../presentation/domain/entities/avatar";

export abstract class ResumeRepo {
    abstract getAvatar(): Promise<Avatar>;
}