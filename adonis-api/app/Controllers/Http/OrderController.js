'use strict'

const Order = use('App/Models/Order')

class OrderController {
    async show({auth}) {
        const orders = await Order.query()
            .where('user_id', auth.user.id)
            .fetch()
            
        let parsedOrders = orders.toJSON()

        for (let i = 0; i < parsedOrders.length; i++) {
          parsedOrders[i].products = JSON.parse(parsedOrders[i].products)
        }
        return parsedOrders
    }
    
     async store({request, response, auth}) {
        const products = request.only(['products'])
        const jsonProducts = JSON.stringify(products)
        const order = await Order.create({user_id: auth.user.id, products: jsonProducts})

        return order
    }
}

module.exports = OrderController
