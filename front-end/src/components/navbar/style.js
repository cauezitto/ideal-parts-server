import styled, {css} from 'styled-components';

const height = 60

const clicked = css`
    display: flex;
    flex-direction: column;
`

export const Nav = styled.div`
    display: flex;
    z-index: 10;

    top: ${`${height}px`};

    align-items: center;

    position: fixed;

    background-color: rgba(0,0,0,0.4);

    height: 65px;
    width: 100%;
    transition: 0.5s;



    h1{
        color: #f2f2f2;
        margin: auto;
        margin-left:10px;
        cursor: pointer;

        transition: 0.5s;

        :hover{
            color: #df253c;
        }
    }

    @media(max-width: 800px){
        div div{
            display: block;
        }
    }

`;

export const SubNav = styled.div`
    display: none;

    z-index: 10;

    background-color: rgba(0,0,0,0.4);

    top: ${`${height+65}px`};
    position: fixed;
    height: 180px;
    width: 100%;
    justify-content: right;
    align-items: center;

    transition: all 5s;
    -webkit-transition-delay: 5s; /* adicionado */
    transition-delay: 1s; /* adicionado 1 segundo */

    a:link{
        text-decoration: none;
    }

    a{
        color: #f2f2f2;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: medium;
        line-height: 25pt;
        cursor: pointer;

        align-self: center;

        transition: all 0.5s;

        font-size: 20pt;

        :hover{
            color: #df253c;
        }
    }

    div{
        margin: 30 0 30 0;
    }



    ${props => props.state && clicked}

`

export const IconContainer = styled.div`
    height: 60%;
    width: 65px;

    margin-left: 10px;

    
    background-image: url(${props => props.img});
    background-position: 50% 50%;
    background-size: contain;
    background-repeat: no-repeat;
    padding: 10px;

    border-radius: 7px;

`

export const LinksContainer = styled.div`

    display: flex;

    justify-content: flex-end;
    align-items: center;

    position: absolute;

    width: 60%;
    height: 60px;

    right: 30px;

    a{
        text-decoration: none;
        color: #f2f2f2;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 1.8rem;

        margin: 10px;

        cursor: pointer;

        transition: 0.6s;

        :hover{
            color: #df253c;
        }
    }

    a:link{
        text-decoration:none;
    }

    @media(max-width: 800px){
        
        a{
            display: none;
        }
        div{
            display: inline;
        }
    }
`

export const Contact = styled.div`
    display: flex;
    height: 30px;
    width: 70px;
    align-items: left;
    text-align: left;
    left: 20px;
    h1{
        margin: auto;
    }

    @media(max-width:600px){
        margin-left: 1px;
    }
`

export const ContactNumber = styled.div`
    display: flex;
    height: 30px;
    width: 125px;
    align-items: left;
    text-align: left;
    margin-left: 1px;
    h1{
        margin: auto;

        font-size: 12pt;

        font-family: Arial, Helvetica, sans-serif;
        font-weight: 3px;
    }

    @media(max-width:600px){
        margin-left: 1px;
    }
`

export const TollIcon = styled.div`
    display: none;
    height: 30px;
    width: 30px;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 10px;
    h2{
        color:#f2f2f2 ;
        transition: 0.5s;

        :hover{
            color: #df253c;
        }
    }
`


