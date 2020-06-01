import React from 'react';
import {Jumbotron} from 'react-bootstrap'

import {Link} from 'react-router-dom'

import { Title,
        Container,
        IconItem,
        IconContainer,
        Divisor} from './styles';

import {Button} from 'react-bootstrap'

import {FaTools, FaRegClock, FaHeadset} from 'react-icons/fa'
import {GiMoneyStack, GiGears} from 'react-icons/gi'

export default function About() {
  return (
   <Container>
       <IconContainer>
            <IconItem>
                <FaTools size = "50" />
            </IconItem>
            <h1>Serviço de qualidade</h1>
            <Divisor>___</Divisor>
            <p>

            Queremos oferecer a solução ideal aos nossos clientes!
            Sempre dentro dos padrões de qualidade e segurança.
            
            </p>
            <Link to = '/servicos' >
            <Button size = 'lg' variant="outline-danger" >Saiba mais</Button>{' '}
            </Link>
        </IconContainer>

        <IconContainer>
            <IconItem>
                <GiMoneyStack size = "55"/>
            </IconItem>
            <h1>Preço justo</h1>
            <Divisor>___</Divisor>
            <p>
            Orçamento apertado? Não se preocupe!
            Queremos atender à todas as suas necessidades, até as do seu bolso.  
            </p>
            <Link to = {'/'/*'/loja'*/} >
            <Button size = 'lg' variant="outline-danger" >Saiba mais</Button>{' '}
            </Link>
        </IconContainer>

        <IconContainer>
            <IconItem>
                <GiGears size = "50"/>
            </IconItem>
            <h1>Peças multimarcas</h1>
            <Divisor>___</Divisor>
            <p>
                Contamos com a parceria de fabricantes de diversas marcas como: Atlas, Schindler, Addtech e outras. Entre em contato! 
            </p>
            <Link to = {'/'/*'/peças'*/} >
            <Button size = 'lg' variant="outline-danger" >Saiba mais</Button>{' '}
            </Link>
        </IconContainer>

        <IconContainer>
            <IconItem>
                <FaHeadset size = "50" />
            </IconItem>
            <h1>Suporte 24 horas</h1>
            <Divisor>___</Divisor>
            <p>
                Conte com a gente! 
                Assistência técnica 24 horas por dia e 7 dias por semana. 
                Estamos aqui quando você mais precisa.
            </p>
            <Link to = {'/sobre'/*'/suporte'*/} >
            <Button size = 'lg' variant="outline-danger" >Saiba mais</Button>{' '}
            </Link>
        </IconContainer>


       
   </Container>
  );
}
