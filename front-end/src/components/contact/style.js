import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width:100%;

    margin-top: 45px;

    justify-content: center;
    text-align: center;

    border-radius: 20px;
    
`;

export const SubContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    align-items: center;
    justify-content: center;
`

export const TitleContainer = styled.div`

    display: flex;
    
    background-color: #f2f2f2;

    height: 50px;
    width: 220px;

    justify-content: center;
    align-items: center;

    border-radius: 5px;

    margin-bottom: 30px;
    `

export const Title  = styled.h1`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

 font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif ;
 color: #df253c;
 font-size: 20pt;

`;


export const Overlay = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);

    align-items: center;
    justify-content: center;

    border-radius: 20px;

    `
export const Contacts = styled.div`
    
    display: flex;
    align-items: center;
    width:100%;

    justify-content: center;
    text-align: center;

    @media(max-width: 860px){
        flex-direction: column;
    }

    

    h1{
        font-size: 30pt;
        color: #d3d3d3;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif

    }
`

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100px;
    width: 200px;

    justify-content: center;
    align-items: center;

    margin: 50px auto 50px auto;

    p{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 15pt;
        color: #d3d3d3;
        margin-top: 10px;
    }
`
