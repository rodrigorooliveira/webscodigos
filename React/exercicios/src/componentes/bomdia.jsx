import React, {fragment}  from  'react'

     export default props =>  [
         <h1 key='h1'>Bom dia {props.nome}!</h1>,
         <h2 key='h2'>Até Breve!!</h2>
     ]
      
    

  /* export default props => 
      <fragment>
        <h1>Bom dia {props.nome}!</h1>
        <h2>Ate Breve!!!</h2>
      </fragment> */
        