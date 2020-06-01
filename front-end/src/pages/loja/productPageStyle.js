import styled from 'styled-components';

export const Container = styled.div`

  display: flex;

  justify-content: center;
  align-items: center;

  width: 90vw;
  height: 500px;
  padding: 30px 0;

  margin: 0 auto auto auto;
  
  border-bottom: solid 2px #d2d2d2;
`;


export const SubContainer = styled.div`
  display: flex;

  margin: auto;

  flex-direction: column;

  height: 100%;

  align-items: center;
  justify-content: center;


`

export const ImageContainer = styled.div`

  display: flex;

  justify-content: center;
  align-items: center;

  width: 405px;
  height: 425px;

  margin: auto;

  margin-bottom: 40px;

  background-color: #fff;

  border: solid 1px #d2d2d2;

  img{

    margin: auto;

    width: 90%;
  }
`
export const InfoContainer = styled.div`

  display: flex;

  margin: auto;

  width: 700px;
  height: 400px;
`

export const Info = styled.div`

  display: flex;

  margin: auto;

  margin-bottom: 50px;

  width: 100%;
  height: 170px;

  background-color: #fff;

  border: solid 1px #d2d2d2;
`

export const TextContainer = styled.div`

  display: flex;

  margin: auto auto auto 30px;

  justify-content: center;
 
  text-align: left;

  flex-direction: column;

  height: 180px;
  width: 300px;

  margin-bottom: 30px;

  h1{
    margin: 10px auto auto 0;
    font-size: 15pt;
    color: #414040;

    font-family: Arial, Helvetica, sans-serif;
  }

  p{
    margin: auto auto auto 0;

    color: #414040;

    font-weight: bolder;

    font-family: Arial, Helvetica, sans-serif;

  }

`

export const BrandContainer = styled.div`
  display: flex;

  text-align: left;

  width: 300px;

  margin-bottom: 10px;

  p{
    margin: 0 auto auto 0;
  }

  h1{
    margin: 1px auto auto 1px;
  }
`

export const QuoterContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 160px;
  height: 90px;

  margin: auto 0;

  padding: 10px;

  color: #414040;

  border-bottom: #d2d2d2 solid 1px;

  transition: 500ms;


  h1{
    color: #414040;

    font-size: 14pt;

    font-weight: bolder;

    font-family: Arial, Helvetica, sans-serif;
  }
`

export const QuoterControllerContainer = styled.div`
  display:flex;

  margin: auto;

  width: 100%;

  align-items: center;

  svg{
    
    margin: auto;
    margin-top: 5px;
    cursor: pointer;

    color: #414040;

    transition: 500ms;

    :hover{
      color: grey;
    }
  }
`

export const QuantRegulators = styled.div`
  display: flex;
  flex-direction: column;

  margin: auto auto;

  margin-left: 10px;

  justify-content: center;

  height: 70px;


  svg{
    
    margin: auto;
    margin-top: 5px;
    cursor: pointer;

    color: #414040;

    transition: 500ms;

    :hover{
      color: grey;
    }
  }
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: auto 0;

  height: 85%;
  width: 200px;

  border-left: 1px solid #d2d2d2;

  overflow:auto;
`