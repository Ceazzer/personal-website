import { HomeTemplateContainer } from "./styles";

interface IHomeTemplateProps {
    children: React.ReactNode // TODO: change to support limited types
}
export function HomeTemplate(props: IHomeTemplateProps) {
    return (
        <HomeTemplateContainer>
            {props.children}
        </HomeTemplateContainer>
    );
}