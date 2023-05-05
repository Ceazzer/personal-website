import { StyledSummaryContainer, StyledSummaryContent, StyledSummaryHeader, StyledSummaryButtonContainer } from "./styles";

export function Summary() {
    return(
        <StyledSummaryContainer>
            <StyledSummaryContent>Full Stack Developer</StyledSummaryContent>
            <StyledSummaryHeader>Kareem Pierre</StyledSummaryHeader>
            <StyledSummaryContent>
            I'm an experienced full-stack developer with expertise in a range of programming languages and frameworks, including JavaScript, Python, React, Golang, and Dart. I thrive on delivering high-quality, user-friendly software solutions and collaborating with clients to bring their ideas to life. 
            As an effective communicator and team player, 
            I'm always looking for ways to improve my work and expand my skillset.
            </StyledSummaryContent>
            <StyledSummaryButtonContainer>test</StyledSummaryButtonContainer>
        </StyledSummaryContainer>
    );
}