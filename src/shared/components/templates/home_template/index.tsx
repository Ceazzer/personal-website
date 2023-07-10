import { Parallax } from "react-parallax";
import { BottomSeparator, HomeTemplateContainer } from "./styles";

interface IHomeTemplateProps {
    children: React.ReactNode // TODO: change to support limited types
}
export function HomeTemplate(props: IHomeTemplateProps) {
    return (
        <Parallax strength={500}>
            <HomeTemplateContainer>
                {props.children}
                <BottomSeparator>
                    <p>Separator</p>
                </BottomSeparator>
            </HomeTemplateContainer>
        </Parallax>
    );
}