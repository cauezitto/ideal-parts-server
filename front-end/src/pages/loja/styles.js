import styled, {css} from 'styled-components';


const modalRed = '#df253c'

const modalGrey = '#'

const selected = css`
      background-color: #f1f1f1;
      border: 1px solid #d2d2d2;
`

export const Container = styled.div`
  display: flex;
  margin: auto;
  margin-top: 10px;
  width: 95vw;
`;

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 20%;
  max-height: 700px;

  padding-bottom: 15px; 

  overflow:auto;

  border: 1px solid #d2d2d2;

  align-items: center;

  background-color: #fafafa;
`;

export const SettingsHeader = styled.div`

  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  display: flex;

  align-items: center;
  

  width: 100%;
  height: 50px;

  margin-top: 10px;

  svg{
    margin: auto 1px 21px 10px;
  }

  h1{
      color: #414040;
      font-weight: bold;
      font-size: 20px;
      text-indent: 10px;
      font-family: 'Roboto', sans-serif;
    }
`

export const SearchContainer = styled.div`
  display: flex;

  margin-top: 20px;
  margin-left: 5px;

  background-color: blue;


  justify-content: center;

  align-items: center;

  width: 100%;
  height: 50px;

  svg{
    margin: auto;

    margin-right: 5px;
    color: #414040;
    cursor: pointer;

  }
`

export const Search = styled.input`
  width: 200px;
  height: 30px;
  border: 1px #d2d2d2 solid;

  text-indent: 10px;

  border-radius: 2px;

  color: #6d7680;
`

export const List = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  
  width: 90%;
  height: 30px;

  text-align: left;

  text-indent: 10px;

  color: #6d7680;

  font-family: 'Roboto', sans-serif;
  font-weight: bolder;
  font-size: 20px;

  margin-bottom: 10px;

  cursor: pointer;

    :hover{
      ${selected}
    }

    ${props=>props.selected && selected}


`

export const QuoteContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  display: flex;

  align-items: center;

  justify-content: center;
  
  width: 90%;
  height: 30px;

  margin-bottom: 5px;

  p{
    margin: auto auto auto 5px;
    font-size: 15px;
    color: #6d7680;
  }

  h1{
    
    margin: auto 5px 30px auto;

    cursor: pointer;

    transition: 200ms;

    :hover{
      color: #df253c;
     
    }
  }
`

export const QuoteControllersContainer = styled.div`
  margin: auto 5px auto;

  display: flex;

  align-items: center;

  width: 55px;

  svg{
    margin: auto;
    color: #6d7680;

    transition: 200ms;

    cursor: pointer;

    :hover{
      color: ${modalRed};
    }
  }
`

export const ProductsListContainer = styled.div`
  display: grid;
  gap: 20px;

  margin: 0 auto;

  grid-template-columns: repeat(auto-fit, minmax(285px, 1fr));

  width: 78%;
  

  size: inherit;
`;

export const ProductButtonContainer = styled.div`
  display: flex;

  width: 100%;

  align-items: center;

  svg, div{
    margin: auto;

    cursor: pointer;

    color: #414040;

    transition: 500ms;

    :hover{
      transform: translateY(-6px);
    }

    :active{
      opacity: 0;
      transition: 500ms;
      
    }
    
  }

`;

export const PageSelectorContainer = styled.div`
  display: flex;

  height: 50px;
  width: 350px;

  justify-content: center;
  align-items: center;

  margin: 30px auto;

  div{
    margin: auto;
    padding:2px 5px;
    border: solid 2px #414040;

    p{
    cursor: pointer;
    margin: auto;
    font-weight: 550;
    color: #414040;
  }

  transition: 300ms;

  :hover{
    transform: translateY(-5px)
  }
    
  }

  svg, h1{
    margin: auto;
    color: #414040;
  }
`



