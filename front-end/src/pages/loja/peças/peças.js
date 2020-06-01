import React, {Component, useEffect} from 'react';

import api from '../../../services/api'

import {FaListUl, FaShoppingCart, FaTrashAlt, FaThList, FaSearch} from 'react-icons/fa'

import {IoIosArrowForward, IoIosArrowRoundBack} from 'react-icons/io'

import {MdDescription} from 'react-icons/md'

import {FiPlusCircle, FiMinusCircle} from 'react-icons/fi'

import NavBar from '../../../components/navbar/navbar'

import {Button, Card, Modal} from 'react-bootstrap'

import {Link} from 'react-router-dom'

 import { Container,
          ProductsListContainer,
          SettingsContainer,
          SettingsHeader,
          List,
          QuoteContainer,
          ProductButtonContainer,
          QuoteControllersContainer,
          PageSelectorContainer,
          Search,
          SearchContainer} from '../styles';

//import Lottie from 'react-lottie';

import cartAnimation from '../../../animations/cartAnimation.json'


class Peças extends Component{


  constructor(props) {
    super(props);
    this.state = {
      products: [],
      marcas:[
        {
          selected: false,
          title:'Todas'},
        {
          selected: false,
          title:'Atlas'},
        {
          selected: false,
          title:'Alfa'},
        {
          selected: false,
          title:'Schindler'},
        {
          selected: false,
          title:'Thyssen'},
        {
          selected: false,
          title:'Otis'}
      ],
      cotas:[],
      paused: true,
      clickDisable: false,
      pagination: {},
      brand: '',
      search: ''
    };
  }

 async loadProducts(pagination){

  window.scroll(0,1)

  let response

  if(pagination){
    response = await api.get(`/peaces?page=${pagination}`)
  }
  else{
    response = await api.get(`/peaces`)
  }
    

    const {page, limit, pages} = response.data

    console.log(response.data)

    this.setState({products: response.data.docs})
    this.setState({pagination: {
      page: Number(page),
      limit,
      pages
    }})
  }

  async brandFilter(brand, pagination = 1){

    let marca = this.state.marcas

    this.setState({search: ''})

    for(let i=0; i< marca.length; i++){
      marca[i].selected = false
      this.setState({marcas: marca})

      if(this.state.marcas[i].title === brand){
        marca[i].selected = true
        this.setState({marcas: marca})
      }
    }
    
    const brandToLowCase = brand.toLowerCase()

    this.changeBrand(brand)

    if(brand === 'Todas'){
      this.loadProducts()
      this.changeBrand('')
      return
    }

    const response = await api.get(`/peaces/${brandToLowCase}?page=${pagination}`)

    const {page, limit, pages} = response.data

    console.log(response.data)

    this.setState({products: response.data.docs})
    this.setState({pagination: {
      page: Number(page),
      limit,
      pages
    }})

  }

  componentDidMount(){
    this.loadProducts()

    //console.log(this.state.pagination)

    const quoteBuffer = localStorage.getItem('@idealPartsCart')

    

    if(quoteBuffer !== undefined && quoteBuffer !== null){
      this.setState({cotas: JSON.parse(quoteBuffer)})
      console.log(JSON.parse(quoteBuffer))
    }

    window.scroll(0,1)
    
  }

  handleEnter(event){
    console.log(event)

    if(event.code === 'Enter'){
      console.log(this)
    }
  }

 async handleAdd(product, value){

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

   handleSub(product, value){
    for(let i=0; i< value.length; i++){
      if(value[i].title === product.title){
       //setCotas(prevState => [prevState[i].quant++, ...prevState])
       let newValue = value
       newValue[i].quant--
       if(newValue[i].quant === 0){
        this.handleDelete(product)
        //localStorage.setItem('@idealPartsCart', JSON.stringify(this.state.cotas))
        return
       }
       this.setState({cotas: newValue})
       localStorage.setItem('@idealPartsCart', JSON.stringify(newValue))
      }
    }
  }

  handleCart(product, value){

    //this.setState({clickDisable: true})

    //alert('pah')

    this.setState({paused: false})

    for(let i=0; i< value.length; i++){
      if(value[i].title === product.title){
        
        console.log(this.state.products)
        console.log(product)
        console.log(value[i])
       
       let newValue = value
       newValue[i].quant++
       this.setState({cotas: newValue})
       //console.log(JSON.stringify(newValue))
       localStorage.setItem('@idealPartsCart', JSON.stringify(newValue))
       return
      }
    }

    let newValue = value

    newValue.push({...product, quant: 1})

    this.setState({cotas: newValue})
    localStorage.setItem('@idealPartsCart', JSON.stringify(newValue))
  }

  handleDelete(product){
    let newValue = this.state.cotas.filter(cota=>cota.title != product.title)
    this.setState({cotas: newValue})
    localStorage.setItem('@idealPartsCart', JSON.stringify(newValue))
  }

  enviaCotas(cotas){
    alert(`as cotas ${cotas.map(cota => `${cota.title} `)} foram enviadas`)
  }

  changeBrand(brand){
    this.setState({brand: brand})
    //console.log(this.state.brand)
  }

  handleSearch(event) {
    this.setState({search: event.target.value});
  }

  async search(){
    
    const response = await api.get(`/peaces/search/${this.state.search}`)

    //console.log(response)

    const {page, limit, pages} = response.data

    this.setState({products: response.data.docs})

    this.setState({pagination: {
      page: Number(page),
      limit,
      pages
    }})
  }

  async paginationSearch(search, pagination){

    const response = await api.get(`/peaces/search/${search}?page=${pagination}`)

    console.log(response.data.page)

    const {page, limit, pages} = response.data

    this.setState({products: response.data.docs})

    this.setState({pagination: {
      page: Number(page),
      limit,
      pages
    }})

  }

  render(){

    const defaultOptions = {
      loop: true,
      autoplay: false, 
      animationData: cartAnimation,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }
    
    const {products, cotas} = this.state

    
  return (
    <>
    <NavBar />

    
    <div style = {{width: '99.9%', height: 155, backgroundColor: '#fafafa'}} />
    <Container >

      <SettingsContainer>
      
      <SettingsHeader>

            <FaSearch style ={{ margin: 'auto 10px auto 7px',
                                cursor: 'pointer',
                                color: '#414040'}}
                                size = '20'
                                onClick = {()=>{this.search()}}
                                />
          
            <Search placeholder = 'Código ou nome da peça'
                    
                    value = {this.state.search}
                    onChange={(e)=>{this.handleSearch(e)}}
                    onKeyPress = {(e)=>{if(e.key === 'Enter'){this.search()}}}
                    id = 'enter'
                    />
          
      </SettingsHeader>

        <SettingsHeader>
          <FaListUl size = "13" color = '#df253c' />

          <h1>
              {' Marcas'}
          </h1>
        </SettingsHeader>
        {
          
          this.state.marcas.map(marca =>(
          <List selected = {marca.selected} key = {marca.title} onClick = {() =>{this.brandFilter(marca.title)}} >
            <IoIosArrowForward color = '#df253c' />
            {marca.title}
            </List>
          ))
        }

      <SettingsHeader>
      <FaShoppingCart size = "13" color = '#df253c' />
          <h1>
              {' Cotações'}
          </h1>
      </SettingsHeader>
      {
          this.state.cotas.map(cota =>(
          <QuoteContainer key = {cota.title} >
            <p style = {{maxWidth: '19ch',
                        overflow:'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap'
                        }} >
            {`${cota.quant}x ${cota.title} `}
            </p>

            <QuoteControllersContainer>
              <FiMinusCircle onClick = {() =>{this.handleSub(cota, this.state.cotas)}}
                             size = '18' />
            
              <FiPlusCircle onClick = {() =>{this.handleAdd(cota, this.state.cotas)}}
                                      size = '18' />
              
              <FaTrashAlt onClick = {() =>{ this.handleDelete(cota)}}
                          size = '14'
                          />
           </QuoteControllersContainer>
            

          </QuoteContainer>
          ))
      }

      <QuoteContainer>
      {
          this.state.cotas[0] && <Button variant="outline-danger" size = 'lg' onClick = { ()=>{ this.enviaCotas(this.state.cotas) } }  >Enviar</Button>
        }

        {
          !this.state.cotas[0] && <p>Suas cotações vão aparecer aqui!</p>
        }
      </QuoteContainer>

      </SettingsContainer>

      <ProductsListContainer>
      
      {
        products && products.map((product) =>(
          <Card  style = {{height: 425, width: 300}} >

            <Card.Header style = {{height: 50}} >
              <Card.Title>{product.title}</Card.Title>
            </Card.Header>

            <Card.Body>
              <Link to = {`peça/${product._id}`} >
                <Card.Img style = {{width: '100%', cursor: 'pointer'}} variant="bottom" src = {product.url} />
              </Link>
            </Card.Body>

            <Card.Footer style = {{height: 50}}  >
              <ProductButtonContainer>
            {/* <div onClick = {()=>{this.handleCart(product, cotas)}} >
              <Lottie options={defaultOptions}
                                height={40}
                                width={40}
                                onClick = {()=>{this.setState({paused: !this.state.paused})}}
                                isClickToPauseDisabled = {this.state.clickDisable}
                                isPaused = {this.state.paused}
                                isStopped = {this.state.paused}
                                speed = {1.3}
                                eventListeners = {[
                                  {
                                    eventName: 'loopComplete',
                                    callback: () => this.setState({paused: true})
                                                     //console.log('component', product)
                                                    ,
                                  }
                                ]}
                                
                                />
                </div>
                              */}
               

                <FaShoppingCart onClick = {() =>{this.handleCart(product, this.state.cotas)}}
                size = '25'/>
              
              <Link to = {`/peça/${product._id}`} style = {{margin: 'auto'}} >
                <MdDescription size = '26' />
              </Link>

              </ProductButtonContainer>
            </Card.Footer>
          </Card>

        ))
      }
      </ProductsListContainer>

    </Container>

    {
        this.state.pagination.page &&
    <PageSelectorContainer >
      
     { this.state.pagination.page !==1 && <div onClick = {()=>{if(this.state.search === '')
                                                                {if(this.state.brand ===''){
                                                                  this.loadProducts(this.state.pagination.page-1)
                                                                  }
                                                                  else{
                                                                  this.brandFilter(this.state.brand, this.state.pagination.page-1)
                                                                  }}
                                                                  else{
                                                                    this.paginationSearch(this.state.search, this.state.pagination.page -1)
                                                                  }}} >
          <p>
          Anterior
        </p>
      </div>}

      { this.state.pagination.page ===1 &&
      
      <div style = {{visibility: 'hidden'}} >
        <p>
          Anterior
        </p>
      </div>}

      <h1>
        {`${this.state.pagination.page} de ${this.state.pagination.pages}`}
      </h1>

      {this.state.pagination.page !== this.state.pagination.pages && 
      
      <div onClick = {() =>{if(this.state.search == '')
                            
                            {
                              if(this.state.brand ===''){

      
                            this.loadProducts(this.state.pagination.page+1)
                            }
                            else{
                            this.brandFilter(this.state.brand, this.state.pagination.page+1)
                            }
                          }

                          else{
                            this.paginationSearch(this.state.search, this.state.pagination.page + 1)
                          }
                            }} >
        <p>
          Próximo
        </p>
      </div>}

      {this.state.pagination.page === this.state.pagination.pages && 
      
      <div style = {{visibility: 'hidden'}} >
        <p>
          Próximo
        </p>
      </div>}
      
      
    </PageSelectorContainer>
    }
    </>
    );
  }
}

export default Peças;