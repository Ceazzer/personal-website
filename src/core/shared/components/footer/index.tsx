import { StyledCopyRightcontainer, StyledFooterContainer, StyledSocialMediaContainer } from "./styles";

export function Footer() {
    return (
        <StyledFooterContainer>
            <StyledSocialMediaContainer>
                <div>
                    SocialMedia
                </div>
                <div>
                    SocialMedia
                </div>
                <div>
                    SocialMedia
                </div>
            </StyledSocialMediaContainer>
            <StyledCopyRightcontainer>
                © 2023 All rights reserved.
            </StyledCopyRightcontainer>
        </StyledFooterContainer>
    );
}