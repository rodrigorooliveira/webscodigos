import React from 'react'

function ChildrenWithProps(props) {
    return React.Children.map(props.Children, child => {
        return React.cloneElement(child, {
            ...props, ...child.props
        })
    })
}

export default props =>
  <div>
      <h1>{props.nome} {props.sobrenome}</h1>
      <h2>Filhos</h2>
     <ul>
       {ChildrenWithProps(props)}
     </ul>
  </div>