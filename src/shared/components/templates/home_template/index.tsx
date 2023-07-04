import { Item, StyledPageContainer, StyledPageContent } from "./styles"

export function HomeTemplate() {
    return (
        <StyledPageContainer>
            <StyledPageContent>
            <Item $primary="left-0">Test 1</Item>
            <Item $primary="right-0">Test 2</Item>
            </StyledPageContent>
        </StyledPageContainer>
    )
}

HomeTemplate.Nav = function() {
    return (
        <StyledPageContent>
            
        </StyledPageContent>
    )
}


export default HomeTemplate