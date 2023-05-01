import { NavButton } from "../buttons/nav";
import { StyledHeaderContainer, StyledLogoContainer, StyledNavContainer } from "./styles";

export function Header() {
    return (
        <StyledHeaderContainer>
            <StyledLogoContainer>
                K
            </StyledLogoContainer>
            <StyledNavContainer>
                <NavButton />
                <NavButton />
                <NavButton />
            </StyledNavContainer>
        </StyledHeaderContainer>
    );
}