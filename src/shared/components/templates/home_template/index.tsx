import { HomeTemplateContainer } from "./styles";

interface IHomeTemplateProps {
    children: React.ReactNode // TODO: change to support limited types
}
export default function HomeTemplate(props: IHomeTemplateProps) {
    return (
        <HomeTemplateContainer>
            test
        </HomeTemplateContainer>
    );
}

interface IHomeTemplateSidebarProps {
    children: React.ReactNode // TODO: change to support limited types
}

HomeTemplate.Sidebar = function HomeTemplateSidebar(props: IHomeTemplateSidebarProps) {
    return (
        <HomeTemplateSidebar>
            
        </HomeTemplateSidebar>
    );


}

interface IHomeTemplateContentProps {
    children: React.ReactNode // TODO: change to support limited types
}

HomeTemplate.Content = function HomeTemplateContent(props: IHomeTemplateContentProps) {
    return (
        <HomeTemplateContent>

        </HomeTemplateContent>
    );
}


