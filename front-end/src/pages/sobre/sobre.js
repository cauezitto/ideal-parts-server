import React, {useState, useEffect} from 'react';

import NavBar from '../../components/navbar/navbar'
import InitImage from '../../components/initImage/initImage'

import initImage from '../../assets/sobre.jpg'
import secondImage from '../../assets/blueLadder.jpg'
//import secondImage from '../../assets/banner3.jpeg'

// import { Container } from './styles';
import TextBox from '../../components/textBox/textBox'

import {Container,
        ImageContainer,
        FristImage,
        ValuesContainer,
        SkillsDivsContainer,
        SkillsDiv,
        ListContainer} from './styles'

import {FiTarget} from 'react-icons/fi'

import {FaEye, FaBalanceScale, FaRegLightbulb} from 'react-icons/fa'

export default function Sobre() {

  const [state1, setState1] = useState(true)
  const [state2, setState2] = useState(false)
  const [state3, setState3] = useState(false)
  const [state4, setState4] = useState(false)
  
  useEffect(()=>{
    window.scroll(0,1)
  }, [])

  return (
    <>
     <NavBar></NavBar>
      <Container style = {{zIndex: 0}} >
        <InitImage img = {initImage} text = 'Sobre nós'/>
        <TextBox title = 'Quem somos?' 
        text = {'É com grande satisfação que nós da Ideal Elevadores, apresentamos nossa empresa. Temos como objetivo oferecer a solução ideal aos nossos clientes! sempre dentro dos padrões de qualidade e segurança'}
         />
      <ImageContainer>

        <div>
          <li>
            Atendimento 24 horas, inclusive feriados 
          </li>

          <li>
            Registrada no CREA -BA
          </li>

          <li>
            Seguro de Responsabilidade Civil
          </li>

          <li>
            Agilidade no atendimento. Principalmente em caso de resgate de passageiros
          </li>

          <li>
            Modernização técnica e estética de elevadores e escadas rolantes
          </li>
        </div>

        <FristImage src= {secondImage} alt=""/>
      </ImageContainer>
        <TextBox text = 'Atuamos no segmento de elevadores e escadas rolantes desde 2012. Contamos com uma equipe de profissionais qualificados e capacitados na área técnica e com larga experiência no ramo, de modo a prestar serviços de qualidade, visando a plena satisfação de nossos clientes.'
        />
      <SkillsDivsContainer>

        <SkillsDiv state = {state1} onClick = {() =>{setState1(true)
                                    setState2(false)
                                    setState3(false)
                                    setState4(false)}} >
          <h1>
          <FiTarget size = '40' />
          </h1>
        </SkillsDiv>

        <SkillsDiv state = {state2} onClick = {() =>{setState1(false)
                                    setState2(true)
                                    setState3(false)
                                    setState4(false)}} >
          <h1>
          <FaEye size = '40' />
          </h1>
        </SkillsDiv>

        <SkillsDiv state = {state3} onClick = {() =>{setState1(false)
                                    setState2(false)
                                    setState3(true)
                                    setState4(false)}} >
          <h1>
          <FaBalanceScale size = '40' />
          </h1>
        </SkillsDiv>

        <SkillsDiv state = {state4} onClick = {() =>{setState1(false)
                                    setState2(false)
                                    setState3(false)
                                    setState4(true)}} >
          <h1>
          <FaRegLightbulb size = '40' />
          </h1>
        </SkillsDiv>

      </SkillsDivsContainer>
      <ValuesContainer>
        { 
          state1 && <TextBox title = 'Missão'
          text = 'Gerar soluções personalizadas e viáveis para nossos clientes, tornando-se referência em qualidade, inovação, serviços e produtos para elevadores e escadas rolantes' />
        } 
        { 
          state2 && <TextBox title = 'Visão'
          text = 'Incentivar cada vez mais a diversificação do setor criando uma relação de trasparência e honestidade com nossos clientes, colaboradores e concorrentes' />
        } 
        { 
          state3 && <div> <TextBox title = 'Valores'
          text = 'Os valores que motivam as nossas atitudade e ações são:' />
      <ListContainer>
          <li>Honestidade</li>
          <li>Comprometimento</li>
          <li>Busca de excelência</li>
          <li>Cooperação</li>
      </ListContainer>  
        </div> 
        } 
        { 
          state4 && <TextBox title = 'Inovação'
          text = 'Estamos em constante renovação! Sempre investindo em tecnologia, novas técnicas e capacitando nossos profissionais para as novas necessidades da industria, do comércio e da sua residência' />
        } 
      </ValuesContainer>
      </Container>
    </>
  );
}
