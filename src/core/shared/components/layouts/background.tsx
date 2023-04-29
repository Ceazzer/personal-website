import { ApplicationLayout } from "./application";
import { StyledBackgroundContainer } from "./styles";

export function BackgroundLayout({children}) {
    return (
        <StyledBackgroundContainer>
            <ApplicationLayout>
                {children}
            </ApplicationLayout>
        </StyledBackgroundContainer>
    );
}