import { Avatar } from "./avatar";
import { StyledProfileAvatarContainer, StyledProfileInfoContainer, StyledProfileSummaryContainer } from "./styles";
import { Summary } from "./summary";

export function ProfileSummarySection() {
    return (
        <StyledProfileSummaryContainer>
            <StyledProfileAvatarContainer>
                <Avatar />
            </StyledProfileAvatarContainer>

            <StyledProfileInfoContainer>
                <Summary />
            </StyledProfileInfoContainer>
        </StyledProfileSummaryContainer>
    );
}