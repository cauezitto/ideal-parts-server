import React, {useState, useEffect} from 'react';

import api from '../../../services/api'

import {Modal, Button} from 'react-bootstrap'

import {
    Container,
    InputsContainer, 
    Input, 
    SelectorsContainer, 
    DocumentInputContainer
} from './style';

import {GoAlert} from 'react-icons/go'

import {cpfMask, telMask, cnpjMask} from '../../../utils/masks/inputsMask'
import {cepMask} from '../../../utils/masks/cepMask'

import EnderecoContainer from './enderecoContainer/enderecoContainer'


function SendModal({show, onHide, products}) {

const [modalShow, setModalShow] = useState(show)

const [nome, setNome] = useState('')
const [email, setEmail] = useState('')
const [fone, setFone] = useState('')
const [cep, setCep] = useState('')
const [documento, setDocumento] = useState('')
const [number, setNumber] = useState('')

const [sendData, setSendData] = useState({})

const [endereco, setEndereco] = useState({})

const [documentType, setDocumentType] = useState({
    cpf: true,
    cnpj: false
})

const [cepError, setCepError] = useState(false)
const [documentError, setDocumentoError] = useState(200)

const [login, setLogin] = useState({
    email: '',
    senha: ''
})

useEffect(()=>

    setSendData({
        nome,
        email,
        fone,
        cep,
        documento
    })
    ,[nome, email, fone, cep, documento])

    useEffect(() =>{
        
        if(cep.length === 10){

            checkCep()

        }
        }, [cep])

    useEffect(() =>{

        checkDocument()

        }, [documento])

async function checkDocument(){
    if(documentType.cpf === true){
        if(documento.length === 14){
            const response = await api.get(`/checkdocument?number=${documento}`)

            console.log(response.data)
            setDocumentoError(response.data.code)
        }
    }
    else if(documentType.cnpj === true){
        if(documento.length === 18){
            const response = await api.get(`/checkdocument?number=${documento}`)

            console.log(response.data)
            setDocumentoError(response.data.code)
        }
    }

    console.log(documento.length)
}

function changeDocumentType(){
    if(documentType.cpf === true){
        setDocumentType({cpf: false,
                         cnpj: true})
    }
    else{
        setDocumentType({cpf: true,
                         cnpj: false})
    }
}

async function checkCep(){
    const response = await api.get(`/cepcheck/${cep}`)

    if(response.data.name !== undefined ){
        alert('CEP INVÁLIDO')
        setCepError(true)
        return
    }
    setEndereco (response.data)
    setCepError(false)

    console.log(response.data)
}

function checkDocumentType(){
    if(documentType.cpf === true){
        return 'seu cpf'
    }
    return 'seu cnpj'
}

 async function sendCotas (){
    const response = await api.post('/quote', {
        nome,
        email,
        cep,
        number,
        documento,
        products
    })

    alert(response.data.code)
  }


  return (
    <>
        <Modal
        
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        show = {show}
        centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Estamos quase lá!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <h4>Cadastre-se ou faça seu login para podermos te retornar depois!</h4>
                <br/>
            <Container>
                <InputsContainer>
                    <Input
                    placeholder = 'Seu nome'
                    width = {300}
                    value = {nome}
                    onChange = {e=>setNome(e.target.value)}
                    />

                    <Input
                    placeholder = 'Seu melhor email'
                    width = {300}
                    value = {email}
                    onChange = {e=>setEmail(e.target.value)}/>

                    <Input
                    placeholder = 'Sua Senha (pelo menos 8 caracteres)'
                    width = {300}
                    onChange = {e=>{}}/>

                    <Input
                    placeholder = 'Repita sua senha'
                    width = {300}
                    onChange = {e=>{}}/>

                    <Input
                    placeholder = 'Seu telefone'
                    name = 'phone'
                    pattern="\d{2}-\d{2}-[a-z]{2}"
                    width = {300}
                    value = {fone}
                    onChange = {e=>setFone(telMask(e.target.value))}
                    maxLength = {14}/>

                    <Input
                    placeholder = 'cep'
                    width = {150}
                    value = {cep}
                    onChange = {e=>setCep(cepMask(e.target.value))}
                    error = {cepError}
                    maxLength = {10}
                    />

                    {
                        endereco.street != undefined && 
                        <EnderecoContainer endereco = {endereco}
                                            setNumber = {e=>setNumber(e.target.value)}/> 
                    }
                    <SelectorsContainer>
                        <label>CPF</label>
                        <Input  type='checkbox'
                                checked = {documentType.cpf}
                                onChange = {()=>{changeDocumentType()}}
                                />

                        <label>CNPJ</label>
                        <Input  type='checkbox'
                                checked = {documentType.cnpj}
                                onChange = {()=>{changeDocumentType()}}
                                />
                    </SelectorsContainer>

                    <DocumentInputContainer>

                    <Input
                    placeholder = {checkDocumentType()}
                    width = {150}
                    value = {documento}
                    onChange = {e=>{
                                    if(documentType.cpf === true){
                                        setDocumento(cpfMask(e.target.value))
                                    }
                                    else if(documentType.cnpj === true){
                                        setDocumento(cnpjMask(e.target.value))
                                    }
                                   // console.log(documentType)
                                }}
                    />

                    {
                        documentError === 404 &&
                            <h1>
                                <GoAlert size = '20' />

                                {' Número de documento inválido'}
                            </h1>
                    }

                    </DocumentInputContainer>
                </InputsContainer>
            </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button size = 'lg' variant = 'danger' onClick={() =>{  sendCotas()
                                                                        onHide() }}>Enviar</Button>

                <Button size = 'lg' variant = 'dark' onClick={() =>{ onHide() }}>Continuar cotando</Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default SendModal
