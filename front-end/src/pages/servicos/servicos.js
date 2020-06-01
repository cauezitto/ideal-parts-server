import React, {useState, useEffect}from 'react';

import NavBar from '../../components/navbar/navbar'

import backgroundInit from '../../assets/servicos.jpg'

import InitImage from '../../components/initImage/initImage'

import imageManutencao from '../../assets/entreEmContato.jpg'

import TextBox from '../../components/textBox/textBox'

import folderImage from '../../assets/folder.jpeg'

import {Card,
        CardDeck,
        CardGroup,
        } from 'react-bootstrap'

import { Container,
        ImageContainer,
        FristImage,
        Overlay,
        SkillsDivsContainer,
        SkillsDiv,
        ValuesContainer,
        Folder,
        FolderContainer,
        CardsContainer
      } from './styles';

import {MdAttachMoney} from 'react-icons/md'
import {FiClock} from 'react-icons/fi'
import {IoIosSpeedometer} from 'react-icons/io'
import {FaUserShield, FaTshirt} from 'react-icons/fa'

import botoeiras from '../../assets/botoeiras.jpg'
import chavePAP from '../../assets/chavePAP.jpg'
import limitador from '../../assets/limitador.webp'
import quadro from '../../assets/quadro.jpg'
import inspetor from '../../assets/inspetor.jpg'
import freio from '../../assets/freio.png'


export default function Servicos() {

  const [state1, setState1] = useState(true)
  const [state2, setState2] = useState(false)
  const [state3, setState3] = useState(false)
  const [state4, setState4] = useState(false)

  const [fontSize] = useState(17)

  const [cards] = useState([
    {
      title: 'Botoeiras',
      image: botoeiras
    },
    {
      title: 'Chave PAP',
      image: chavePAP
    },
    {
      title: 'Limitador de velocidade',
      image: limitador
    },
    {
      title: 'Quadro de comando',
      image: quadro
    },
    {
      title: 'Caixa de inspeção',
      image: inspetor
    },
    {
      title: 'Freio',
      image: freio
    }
  ])

  useEffect(()=>{
    window.scroll(0,1)
  }, [])

  return (
    <>
     <NavBar></NavBar>
      <Container style = {{zIndex: 0}} >
        <InitImage img = {backgroundInit} text = 'Serviços' />
        <TextBox
        title = 'Manutenção' text = {'Não deixe para depois! Evite problemas e aumente a vida util dos seus equipamentos. '
        + 'Somente uma empresa especializada pode oferecer com precisão a melhor solução para sua necessidade.'}
        />

<ImageContainer img = {imageManutencao} >
<Overlay>

<h1>Entre em contato e faça um orçamento!</h1>
</Overlay>
</ImageContainer>

      <TextBox text = 'Os prédios comerciais e residenciais têm a obrigação por lei de realizar a manutenção preventiva pelo menos uma vez ao mês. Essa precaução evita imprevistos com seus equipamentos, clientes e funcionários.'
      />

<TextBox title = {`Modernização`} text = 'Instalações antigas? Que tal modernizar seu sistema e mante-lo adequado às normas de segurança? Fazemos reformas estéticas, restaurações e atualizações de segurança em sistemas de elevadores e escadas rolantes.'
      />

{//<Folder img = {folderImage} />
}

<CardsContainer>

  {cards.map(card =>(
    <Card style = {{width: 350, height: 400, margin: 'auto'}} >
    <Card.Header>
      <Card.Title style = {{fontSize: fontSize}} >{card.title}</Card.Title>
    </Card.Header>
    <Card.Img variant="bottom" style = {{width: '100%'}} src= {card.image} />
  </Card>))}

</CardsContainer>

<TextBox title = 'Tudo isso e muito mais !!!'
text = 'Modernizar suas intalações trás uma série de beneficios!'
/>


<SkillsDivsContainer>

<SkillsDiv state = {state1} onClick = {() =>{setState1(true)
                            setState2(false)
                            setState3(false)
                            setState4(false)}} >
  <h1>
  <FaUserShield size = '40' />
  </h1>
</SkillsDiv>

<SkillsDiv state = {state2} onClick = {() =>{setState1(false)
                            setState2(true)
                            setState3(false)
                            setState4(false)}} >
  <h1>
  <IoIosSpeedometer size = '40' />
  </h1>
</SkillsDiv>

<SkillsDiv state = {state3} onClick = {() =>{setState1(false)
                            setState2(false)
                            setState3(true)
                            setState4(false)}} >
  <h1>
  <FaTshirt size = '40' />
  </h1>
</SkillsDiv>

<SkillsDiv state = {state4} onClick = {() =>{setState1(false)
                            setState2(false)
                            setState3(false)
                            setState4(true)}} >
  <h1>
  <MdAttachMoney size = '40' />
  </h1>
</SkillsDiv>

</SkillsDivsContainer>
<ValuesContainer>
{ 
  state1 && <TextBox title = 'Segurança'
  text = 'Com o tempo, alguns mecanismos ficam obsoletos e podem por em risco a segurança dos passageiros e deixar sua instalação irregular. Manter seu elevador em boas condições protege você, seus clientes e o seu bolso.' />
} 
{ 
  state2 && <TextBox title = 'Performance'
  text = 'Sabia que também podemos economizar seu tempo? Uma boa reforma técnica também faz com que seu elevador faça viagens mais rápidas, sem trancos e com paradas suaves' />
} 
{ 
  state3 && <TextBox title = 'Estética'
  text = 'Você pode se surpreender com oque uma reforma ou uma boa restauração podem fazer. Elevadores antigos também são belos quando bem preservados' />
} 
{ 
  state4 && <TextBox title = 'Economia'
  text = 'Peças e componentes antigos ficam cada vez mais difíceis e mais caros de serem consertados, além de gastarem mais energia do que poderiam. Faça um orçamento e compare com seus gastos no ultimo ano! Você vai ver que vale a pena.' />
} 
</ValuesContainer>
      </Container>
    </>
  );
}
