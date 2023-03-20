import styled from "styled-components";

type TInputProps = {
 disable: boolean;
 error: boolean;
}

export const InputContainer = styled.div<TInputProps>`
 border-width: ${props => props.disable ? 0 : '2px'};
 color: ${props => props.disable ? '#1E293B' : '#000000'};
 border-color: ${props => props.error && '#ED3A5A'};
`

export const Input = styled.input<TInputProps>`
 cursor: ${props => props.disable ? 'not-allowed' : 'text'};
`