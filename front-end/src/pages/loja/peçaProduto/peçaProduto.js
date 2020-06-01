import React, {Component} from 'react';

import api from '../../../services/api'

import NavBar from '../../../components/navbar/navbar'

import {Container,
        SubContainer,
        ImageContainer,
        Info,
        InfoContainer,
        TextContainer,
        BrandContainer,
        QuoterContainer,
        QuoterControllerContainer,
        QuantRegulators,
        ListContainer} from '../productPageStyle'
//import { ImageContainer } from '../../sobre/styles';

// import { Container } from './styles';

import {Button,
        Modal} from 'react-bootstrap'

import {QuoteContainer} from '../styles'

import {FaShoppingCart} from 'react-icons/fa'

import {
        FiMinusCircle,
        FiPlusCircle} from 'react-icons/fi'

import SendModal from '../modal/modal'

/*
class SendModal extends Components {
    render(){
        return(
            <>
            <Modal
            
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            show = {}
            centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() =>{setModalShow(true)}}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
        )
    }
}
*/

class peçaProduto extends Component{

    constructor(props) {
        super(props);

        this.state = {
            products: [],
            product: {},
            quant: 1,
            total: 0,
            show: false
        }
    }

    async loadProduct(){
        const {id} = this.props.match.params

        console.log(id)

        const product = await api.get(`/peace-product/${id}`)

        product.data.brand = product.data.brand.substring(0,1).toUpperCase() + product.data.brand.substring(1)

        this.setState({product: product.data})

        //console.log(brand.substring[i])

        //console.log(product.data.brand[0].toUpperCase())
    }

    componentDidMount(){
        this.loadProduct()

        const products = localStorage.getItem('@idealPartsCart')

        let total = 0
        if(products !== null){
            const jsonProducts = JSON.parse(products)

            this.setState({products: jsonProducts})
            jsonProducts.map(product => total = total + product.quant)
        }

        this.setState({total})
    }

    async handleAdd(product, value, quant){

        for(let i=0; i< value.length; i++){
          if(value[i].title === product.title){
           //setCotas(prevState => [prevState[i].quant++, ...prevState])
           let newValue = value
           newValue[i].quant++
           await this.setState({cotas: newValue})
    
           console.log(this.state.cotas.toString)
           localStorage.setItem('@idealPartsCart', JSON.stringify(newValue))
           return
          }
        }
      }

      handleCart(product, value, quant){

        //this.setState({clickDisable: true})
    
        //alert('pah')
    
        this.setState({paused: false})
    
        for(let i=0; i< value.length; i++){
          if(value[i].title === product.title){
            
            console.log(this.state.products)
            console.log(product)
            console.log(value[i])
           
           let newValue = value
           newValue[i].quant =  newValue[i].quant + quant
           this.setState({products: newValue})
           //console.log(JSON.stringify(newValue))
           localStorage.setItem('@idealPartsCart', JSON.stringify(newValue))

           let total = 0

           newValue.map(item => total = total + item.quant)

           this.setState({total})

            
           return
          }
        }
    
        let newValue = value
    
        newValue.push({...product, quant})
    
        this.setState({products: newValue})
        localStorage.setItem('@idealPartsCart', JSON.stringify(newValue))

        let total = 0

           newValue.map(item => total = total + item.quant)

           this.setState({total})
      }

render(){

    const{product, quant, total, products, show} = this.state

    // console.log(product)
    
return (
<>
    <NavBar />

    
    <div style = {{width: '99.9%', height: 155, backgroundColor: '#fafafa'}} />

    <Container >
        <ImageContainer>
            <img src={product.url}/>
        </ImageContainer>

        <SubContainer>

            <InfoContainer>
                <Info>
                    <TextContainer>
                        <h1>
                            {product.title}
                        </h1>

                        <p>
                            {`Referência: ${product.reference}`}
                        </p>

                        <p>
                            {`Marca: ${product.brand}`}
                        </p>
                    </TextContainer>

                    <QuoterContainer>
                        <h1>
                            {`Quantidade: ${quant}`}
                        </h1>

                        <QuoterControllerContainer>
                            <FaShoppingCart size = '35' onClick = {()=>{this.handleCart(product, products, quant) }}/>
                        </QuoterControllerContainer>

                    </QuoterContainer>


                    <QuantRegulators>
                                <FiPlusCircle size = '22' onClick = {()=> {this.setState({quant: quant +1})
                                                                            console.log(quant)}} />
                                <FiMinusCircle size = '22' onClick = {()=> {if(quant >= 2)
                                                                            {
                                                                                this.setState({quant: quant -1})
                                                                                }
                                                                            }} />
                    </QuantRegulators>

                </Info>
            </InfoContainer>


            <Info>
                <TextContainer>
                {
                    total !== 0 &&   
                        <h1>
                            {`Você tem: ${total} produtos em sua cotação!`}
                        </h1>
                }

                {
                    total === 0 &&   
                        <h1>
                            {'Ops, Você não tem itens adicionados à suas cotações'}
                        </h1>
                }
                    <Button style = {{marginBottom: 30}} variant="outline-danger" size = 'lg' onClick = { ()=>{this.setState({show: true})} }  >Enviar</Button>
                </TextContainer>
                <ListContainer>
                {
                    total === 0 &&   
                        <p>
                            {'Suas cotações irão aparecer aqui'}
                        </p>
                }
                    {  
                        products.map(item =>(
                            <QuoteContainer>
                                <p style = {{maxWidth: '19ch',
                                            overflow:'hidden',
                                            textOverflow: 'ellipsis',
                                            whiteSpace: 'nowrap',
                                            color: '#414040'
                                            }}>
                                    {`${item.quant}X ${item.title}`}
                                </p>
                            </QuoteContainer>
                        ))
                    }
                </ListContainer>
            </Info>
        </SubContainer>

        <SendModal products = {products} show = {show} onHide = {()=>{this.setState({show: false})}} />
    </Container>
        
</>
    );
    }
}

export default peçaProduto;