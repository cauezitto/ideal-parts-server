import styled, {css} from 'styled-components';

const fontTitle = css`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
`

export const IconContainer = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
    display: flex;
    height: 520px;
    width: 350px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 100px 30px 100px 30px;
    border-radius: 20px;
    background-color: #f2f2f2;

    transition: all 1s;

    h1{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
        color: #df253c;
        font-size: 20pt;
    }

    :hover{
        transition: 0.9s;
        -webkit-transform: scale(1.2);
        transform: scale(1.1);

        div{
            background-color: #e0e2eb;
        transition: 0.9s;
        -webkit-transform: rotateZ(360deg) scale(1.1);
        transform: rotateZ(360deg) scale(1.1);
        }

        }

`

export const IconItem = styled.div`
    display: flex;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    border-color: #6a74b7;
    align-items: center;
    justify-content: center;
    background-color: #d0d3d1;
    margin-bottom: 80px;
    margin-top: 30px;
    

    transition: all 1s;

    :hover{
        background-color: #e0e2eb;
        transition: 0.9s;
        -webkit-transform: rotateZ(360deg) scale(1.5);
        transform: rotateZ(360deg) scale(1.5);

        }
    
    
`

export const Container = styled.div`

    display: flex;
    align-items: center;
    width:100%;

    background-color: #e0e2eb;

    justify-content: center;
    text-align: center;


    p{
       font-size: 1.7rem;
        color: #6d7680;
        padding: 15px;
        font-family: Arial, Helvetica, sans-serif;
    }

    button{
        font-size: 2rem;
        margin-bottom: 15px;
    }

    @media(max-width: 1024px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;

        div{
            margin-top: 30px;


        }
    }

    @media(max-width: 800px){
        display: flex;
        flex-direction: column;
    }

`
export const Divisor = styled.h2`
    font-weight: lighter;
    color: purple;
`