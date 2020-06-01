'use strict'

const cepPromise = use('cep-promise')

class AddressController {
    async checkAddress({params}){
        const {cep} = params
        const res = await cepPromise(cep)

        return res
    }
}

module.exports = AddressController
