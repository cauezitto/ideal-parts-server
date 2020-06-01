import styled,{css} from 'styled-components';


const fontTitle = css`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
`
export const Container = styled.div`
    
    margin: auto;
    width: 100vw;

    display: flex;
    flex-direction: column;
    
    background-color: #f2f2f2;

    align-items: center;
    justify-content: center;

   
  
`;

export const SubContainer = styled.div`
        margin: auto;

        margin-top: 30px;
        
        display: grid;
        gap: 20px;

        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

        width: 100%;
        border-radius: 10px;
        

`

export const ListItem = styled.div`
   
   margin: auto;



    cursor: pointer;

    background-image: url(${props => props.image});

    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;

    border-radius: 7px;

    height: 350px;
    width: 280px;

    transition: all 1s;

    :hover{
        transition: 0.9s;
        -webkit-transform: scale(1.1);
        transform: scale(1.1);

        }

`

export const Overlay = styled.div`

    width: 280px;
    height: 350px;

    display: table-cell;

    line-height: 300px;

    vertical-align: middle;

    text-align: center;

    background-color: rgba(0,0,0,0.4);

    border-radius: 7px;

    a{
        
       
    }

    h1{
        
        color: #f2f2f2;
        
        
    }

`

export const Divisor = styled.h2`
    font-weight: lighter;
    color: purple;
`