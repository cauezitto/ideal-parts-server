'use strict'

const {cpf, cnpj} = use('cpf-cnpj-validator')

const okMessage = {
    message: 'is valid',
    code: 200
}
const errorMessage = {
    message: 'invalid document',
    code: 404
}

class DocumentController {
    async documentValidator({response, request}){
        const {number} = request.qs
            if(number.length <= 14){
                if(cpf.isValid(number) === true){
                    return response.json(okMessage)
                }
                return response.json(errorMessage)
            }

            if(number.length <= 18){
                if(cnpj.isValid(number) === true){
                    return response.json(okMessage)
                }
                return response.json(errorMessage)
            }
         response.notAcceptable()
         return response.json({message: 'what?'})
    }
}

module.exports = DocumentController
