import styled,{css} from 'styled-components';

export const barHeight = css`
  height: 60px;
`

export const Container = styled.div`
  display: flex;

  position: fixed;

  z-index: 10;

  justify-content: center;
  align-items: center;

  ${barHeight}
  width: 100%;

  background-color: #e0e2eb;

  h1{
    color: #414141;

    transition: 1s;
    
    a:link{
        text-decoration: none;
    }

  a{
    text-decoration: none;
    color: #414141;
    transition: 300ms;

    :hover{
      color: #cf3a24;
    }
  }

    :hover{
      color: #cf3a24;
    }
  }

  img{
    margin: auto;

    height: 98%;
  }

  div{
    margin: auto;
  }
`;

export const SocialContainer = styled.div`
  display:flex;
  width: 130px;

  margin: auto;
  right: 5px;

  justify-content: right;
  align-items: right;

  position: absolute;

  
  h1{
    margin-right: 20px;

    align-self: right;
  }

  @media(max-width: 600px){
        justify-content: right;
        align-items: right;
        right: 5px;
       
        
      }
`

export const LogoContainer = styled.div`
  
  left: 20px;
  ${barHeight}
  width: 40%;
  justify-content: left;
  align-items: left;
  position: absolute;

  

  @media(max-width: 600px){
        position: absolute;
        align-self: auto;

        z-index: 2;
       
      }
`
