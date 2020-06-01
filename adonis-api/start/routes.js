'use strict'
const Route = use('Route')

Route.get('/checkaddress/:cep', 'AddressController.checkAddress')
Route.post('/register', 'AuthController.register')
Route.post('/authenticate', 'AuthController.authenticate')
Route.get('/app', 'AppController.index').middleware(['auth'])

Route.group( ()=>{
  Route.resource('tweets', 'TweetController')
    .apiOnly()
    .except('update')
}).middleware(['auth'])
