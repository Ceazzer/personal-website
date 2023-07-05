import { StyledButtonContainer, StyledButtonText } from "./styles";

interface IRaisedButtonProps {
    text?: string;
}

export default function RaisedButton(props: IRaisedButtonProps) {
    return (<>
        <StyledButtonContainer>
            <StyledButtonText>{props.text ?? 'Text'}</StyledButtonText>
        </StyledButtonContainer>
    </>)
}