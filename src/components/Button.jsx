import React from 'react'

function Button(props) {
  return (
    <button onClick= {props.changePic}>{props.symbols}</button>
  )
}

export default Button