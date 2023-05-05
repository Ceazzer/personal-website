import Image from "next/image";
import { StyledAvatarContainer, StyledAvatarContainer2 } from "./styles";

export function Avatar() {
    return (<>
        <StyledAvatarContainer2>
            <Image src="/avatar1.png" alt={"Profile Picture"} width={180} height={180} />
        </StyledAvatarContainer2>

        <StyledAvatarContainer>
            <Image src="/avatar1.png" alt={"Profile Picture"} width={120} height={120} />
        </StyledAvatarContainer>
    </>
    );
}