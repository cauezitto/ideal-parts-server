'use strict'
const Route = use('Route')

    Route.get('/checkaddress/:cep', 'AddressController.checkAddress')
    Route.get('/peaces', 'PartController.index')
    Route.get('/peaces/:id', 'PartController.show')
    Route.get('/checkdocument', 'DocumentController.documentValidator')

    Route.get('/my-orders', 'OrderController.show').middleware(['auth'])
    Route.post('/create-order', 'OrderController.store').middleware(['auth'])

    Route.post('/peaces', 'PartController.store')
    Route.post('/register', 'AuthController.register')
    Route.post('/authenticate', 'AuthController.authenticate')

    Route.group( ()=>{
      Route.resource('tweets', 'TweetController')
        .apiOnly()
        .except('update')
    }).middleware(['auth'])
