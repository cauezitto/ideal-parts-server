import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home  from './pages/home/home'
import Sobre from './pages/sobre/sobre'
import Servicos from './pages/servicos/servicos'
import Suporte from './pages/suporte'
import Peças from './pages/loja/peças/peças'
import PeçaProduto from './pages/loja/peçaProduto/peçaProduto'
import Elevadores from './pages/loja/elevadores/elevadores'
const Routes =() =>(
    <BrowserRouter>
        <Switch>
            <Route exact path = '/' component = {Home}/>
            <Route exact path = '/sobre' component = {Sobre}/>
            <Route exact path = '/servicos' component = {Servicos}/>
            <Route exact path = '/suporte' component = {Suporte}/>
            <Route exact path = '/peças' component = {Peças}/>
            <Route exact path = '/peça/:id' component = {PeçaProduto}/>
            <Route exact path = '/elevadores' component = {Elevadores}/>
        </Switch>
    </BrowserRouter>
)

export default Routes