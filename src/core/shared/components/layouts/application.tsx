import { Footer } from "../footer";
import { Header } from "../header";
import { StyledApplicationContainer, StyledApplicationContent } from "./styles";

export function ApplicationLayout({children}) {
    return (
        <StyledApplicationContainer>
            <Header />
            <StyledApplicationContent>
                {children}
            </StyledApplicationContent>
            <Footer />
        </StyledApplicationContainer>
    );
}