import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledDetailsContainer, StyledFontContainer, StyledText, StyledTextContainer, StyledTitle } from './styles';

interface IProps {
    title: string;
}

export function Details({title}: IProps) {
    return (
        <StyledDetailsContainer>
            
            <StyledFontContainer>
                <FontAwesomeIcon icon={faPencil} />
            </StyledFontContainer>

            <StyledTextContainer>
                <StyledTitle>{title}</StyledTitle>
                <StyledText>
                    fejl kaje l;fj ael ;k jfe; lka jf le
                    fejl kaje l;fj ael ;k jfe; lka jf le
                    fejl kaje l;fj ael ;k jfe; lka jf le
                    fejl kaje l;fj ael ;k jfe; lka jf le
                    fejl kaje l;fj ael ;k jfe; lka jf le
                    fejl kaje l;fj ael ;k jfe; lka jf le
                    fejl kaje l;fj ael ;k jfe; lka jf le
                    fejl kaje l;fj ael ;k jfe; lka jf le
                    fejl kaje l;fj ael ;k jfe; lka jf le
                    fejl kaje l;fj ael ;k jfe; lka jf le
                    fejl kaje l;fj ael ;k jfe; lka jf le
                </StyledText>
            </StyledTextContainer>

        </StyledDetailsContainer>
    );
}