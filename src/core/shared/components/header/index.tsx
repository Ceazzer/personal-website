import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavButton } from "../buttons/nav";
import { StyledHeaderContainer, StyledIconContainer, StyledLogoContainer, StyledNavContainer } from "./styles";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export function Header() {
    return (
        <StyledHeaderContainer>
            <StyledLogoContainer>
                K
            </StyledLogoContainer>
            <StyledNavContainer>
                <NavButton label="Home" />
                <NavButton label="Resume"/>
                <NavButton label="Contact"/>
            </StyledNavContainer>

            <StyledIconContainer>
                <FontAwesomeIcon icon={faBars} size="xl" style={{color: "lightgray"}} />
            </StyledIconContainer>


        </StyledHeaderContainer>
    );
}