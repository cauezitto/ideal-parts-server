import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    height: 70vh;
    width: 100vw;
    background-image: url(${props =>props.img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;

    justify-content: center;
    align-items: center;

    margin-bottom: 30px;

    div{
        height: 100px;
        width: 80vw;

        border-radius: 5px;
    }
  
`;

export const Overlay = styled.div`
     width: 100%;
    height: 100%;

    display: flex;

    justify-content: center;
    align-items: center;

    background-color: rgba(0,0,0,0.6);

    h1{
        color: #f2f2f2;
        
    }
  
`;
