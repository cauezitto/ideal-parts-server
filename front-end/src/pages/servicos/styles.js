import styled, {css} from 'styled-components';

export const opacity = css`
    opacity: 0.5;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  z-index: 0;
`;

export const ImageContainer = styled.div`
  display: flex;

  margin: auto;
  margin-top: 50px;

  cursor: pointer;

  background-color: #fafafa;

  background-image: url(${props => props.img});
  background-position: 50% 60%;
  background-size: cover;
  background-repeat: no-repeat;

  height: 200px;
  width: 90%;

  border-radius: 10px;

  align-items: center;
  justify-content: center;

  transition: 1s;

  h1{
      transition: 1s;
  }
  
  :hover{

      transition: 1s;
      transition: 0.9s;
    -webkit-transform: scale(1.01);
    transform: scale(1.01);


      h1{
          transition: 1s;
      }
  }


 
  `

export const FolderContainer = styled.div`
display: flex;

margin: auto;
margin-top: 50px;

cursor: pointer;

width: 100%;



align-items: center;
justify-content: center;

@media (min-width: 1024px){
    div{
        height: 84rem;
        width: 60rem;

    }
}
`

export const Folder = styled.div`
display: flex;

margin: auto;
margin-top: 50px;

cursor: pointer;

background-color: #fafafa;

background-image: url(${props => props.img});
background-position: 50% 60%;
background-size: cover;
background-repeat: no-repeat;

height: 56rem;
width: 40rem;

border-radius: 10px;

align-items: center;
justify-content: center;

transition: 1s;

:hover{

    transition: 1s;
    transition: 0.9s;
  -webkit-transform: scale(1.01);
  transform: scale(1.01);
}
`

export const FristImage = styled.img`
    max-height: 250px;

    max-width: 100vw;

    border-radius: 5px;

    margin: auto;
`

export const Overlay = styled.div`

    display: flex;

    height: 100%;
    width: 100%;

    background-color: rgba(0,0,0,0.5);

    align-items: center;
    justify-content: center;

    border-radius: 10px;

    text-align: center;

    padding: 30px;

            h1{
                color: #f2f2f2;
            }

            li{
                font-size: 14pt;
                font-weight: bold;
                text-align: justify;
                margin-top: 10px;
               
            }

            @media (max-width: 1300px) {
      flex-direction: column;

      img{
          width: 90%;
      }

      div{
          width: 90%;

          li{
              text-align: left;
              font-size: 12pt;
          }
      }

      @media(max-width: 600px){
          div{
              width: 100%;
          }

      }
       
  }
`;

export const CardsContainer = styled.div`
  display:grid;

  gap: 30px;

  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));

  align-items: center;
  justify-content: center;

  width: 90vw;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 50px;
`

export const SkillsDiv = styled.div`
display: flex;

margin: auto;
margin-bottom: 0;


background-color: #fafafa;

border-top-left-radius: 10px;
border-top-right-radius: 10px;

width: 110px;
height: 90px;

padding: 30px;

align-items: center;
justify-content: center;

cursor: pointer;

${props => !props.state && opacity}

h1{
    transition: 1s;

    :hover{
        transition: 0.9s;
        -webkit-transform: scale(1.1);
    }
}

`

export const SkillsDivsContainer = styled.div`
  display: flex;

margin: auto;

width: 90%;

justify-content: center;

`

export const ValuesContainer = styled.div`
  display: flex;

margin: auto;

background-color: #fafafa;

width: 95%;

padding: 30px;

border-radius: 10px;

align-items: center;
justify-content: center;

@media(max-width: 600px){
    width: 100%;
    border-radius: 0;

    p{
        margin: 5px;
    }
}

`
