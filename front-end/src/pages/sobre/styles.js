import styled, {css} from 'styled-components';

export const opacity = css`
    opacity: 0.5;
`

export const Container = styled.div`
  z-index: 0;

  display: flex;
  flex-direction: column;

  justify-content: center;
  `

export const ImageContainer = styled.div`
  display: flex;

  margin: auto;
  margin-top: 50px;


  background-color: #fafafa;

  width: 90%;

  padding: 30px;

  border-radius: 10px;

  align-items: center;
  justify-content: center;

  div{
 
            height: 250px;
            width: 500px;

            align-items: center;
            justify-content: center;

            margin: auto;

            li{
                font-size: 14pt;
                color: #6d7680;
                text-align: justify;
                margin-top: 10px;
               
            }
        }

  @media (max-width: 1300px) {
      flex-direction: column;

      img{

          margin-top: 30px;
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
  `

export const FristImage = styled.img`
    max-height: 250px;

    max-width: 100%;

    border-radius: 5px;

    margin: auto;
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

export const ListContainer = styled.div`
    display: flex;

    justify-content: center;
    align-items: center;

    width: 90%;

    margin: 10px auto auto auto;

    li{
        margin: 30px;

        font-size: 14pt;
        color: #6d7680;
    }

    @media(max-width: 945px) {
        flex-direction: column;

        li{ margin: 5px;}
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

text-align: justify;

div{
    align-self: center;
}

@media(max-width: 600px){
    width: 100%;
    border-radius: 0;
}

`
