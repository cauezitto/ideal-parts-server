import styled, {css} from 'styled-components';

const borderError = css`
    border-color: #df253c;
`

export const Container = styled.div`
    display: flex;
`

export const InputsContainer = styled.div`
    display: flex;

    flex-direction: column;
`;

export const Input = styled.input`
    height: 30px;

    color: #414040;

    width: ${props => props.width}px;

    border: solid 2px #d2d2d2;
    border-radius: 5px;

    text-indent: 5px;

    margin: 0 auto 15px 5px;

    ${props=>props.error && borderError}
`

export const SelectorsContainer = styled.div`
    display: flex;

    margin: auto auto 1px 5px;

    label, input{
        color: #6d7680;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 10pt;

        

        margin: auto 5px;
    }
`

export const DocumentInputContainer = styled.div`
    display: flex;

    margin: auto auto 1px 0;

    h1{
        margin-left: 5px;

        font-size: 15pt;
        color: #df253c;
    }

`
