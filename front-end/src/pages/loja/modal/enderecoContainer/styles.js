import styled from 'styled-components';

export const Container = styled.div`
  display: grid;


  margin: 5px auto 15px 5px;

  grid-template-columns: 1fr 1fr;
  gap: 10px;

  width: 500px;
`

export const TextContainer = styled.div`
    display: flex;

    text-indent: 5px;
    color: #414040;

    background-color: #f2f2f2;
    padding: 5px;

    border-radius: 3px;
`

export const AlertContainer = styled.div`
    margin: 5px auto 1px 7px;

    h1{
        color: #df253c;

        font-size: 15pt;
        font-family: Arial, Helvetica, sans-serif;
        
    }
`

export const Input = styled.input`
    height: 30px;

    color: #414040;

    width: ${props => props.width}px;

    border: solid 2px #d2d2d2;
    border-radius: 5px;

    text-indent: 5px;

`
