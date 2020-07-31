import React from'react'
import ReactDOM from 'react-dom'

import Pai from './componentes/pai'
import Filho from './componentes/filho'

ReactDOM.render(
    <div>
      <Pai nome="Paulo" sobrenome="Silva" >
         <Filho nome="Pedro" /> 
         <Filho nome="Ana" /> 
         <Filho nome="Maria" /> 
         
      </Pai>   
    </div>


, document.getElementById('root'))