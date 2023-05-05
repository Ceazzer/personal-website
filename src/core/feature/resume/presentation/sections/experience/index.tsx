import { Details } from "./details";
import { Header } from "./header";
import { StyledDetailsContainer, StyledExperienceContainer } from "./styles";

export function Experience() {
    return (
        <StyledExperienceContainer>
            <Header />
            
            <StyledDetailsContainer>
                <Details title="Back-End Development" />
                <Details title="Front-End Development" />
            </StyledDetailsContainer>

            <StyledDetailsContainer>
                <Details title="Architect" />
                <Details title="Tech Lead" />
            </StyledDetailsContainer>
        </StyledExperienceContainer>
    )
}