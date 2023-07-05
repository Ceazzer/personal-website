import { Item, StyledPageContainer, StyledPageContent } from "./styles"

interface IHomeTemplateProps {
    children: React.ReactNode

}
export function HomeTemplate(props: IHomeTemplateProps) {
    return (
        <StyledPageContainer>
            {props.children}
        </StyledPageContainer>
    )
}

interface INavProps {
    children: React.ReactNode
}

HomeTemplate.Nav = function(props: INavProps) {
    return (
        <StyledPageContent>
            {props.children}
        </StyledPageContent>
    )
}


export default HomeTemplate