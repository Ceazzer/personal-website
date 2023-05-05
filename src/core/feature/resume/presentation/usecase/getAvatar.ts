import { Usecase } from "../../../../shared/domain/usecases/base";
import { ResumeRepo } from "../../data/domain/repositories/resumeRepo";
import { Avatar } from "../domain/entities/avatar";
import { AvatarBloc } from "../state/avatar";

export class GetAvatar implements Usecase<Avatar> {
    constructor(
        private resumeRepo: ResumeRepo,
        private avatarState?: AvatarBloc
    ) {
        this.execute();
    }

    async execute(): Promise<Avatar> {
        const avatar =  await this.resumeRepo.getAvatar();
        if (this.avatarState) {
            this.avatarState.setAvatarUrl(avatar.url);
        }
        console.log("Avatar: ", avatar);
        return avatar;
    }

    public static New(resumeRepo: ResumeRepo, avatarState?: AvatarBloc): GetAvatar {
        return new this(resumeRepo, avatarState);
    }
}


