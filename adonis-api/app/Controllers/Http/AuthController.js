'use strict'

const User = use('App/Models/User')
const Order = use('App/Models/Order')

class AuthController {

    async quote(auth, products){
        const order = await Order.create({user_id: auth.user.id, ...products})

        return order
    }

    async register({request, response, auth}){
        const data = request.only(['username','email', 'password', 'cep', 'phone', 'document'])
        console.log(data)
        const products = request.only(['products'])

        const user = await User.create(data)
        const token = await auth.attempt(data.email, data.password)
        if(products){
           const order = this.quote(auth, products)

           return response.json({user, token, order})
        }
        else{
            return response.json({user, token})
        }
    }

    async authenticate({request, auth}){
        const {email, password} = request.all()

        const token = await auth.attempt(email, password)

        return token
    }
}

module.exports = AuthController
