import React from 'react'

function Card(props) {
  return (
    <div className = 'card'>
        <img src={props.images} alt="" className = 'cardPic'/>
    </div>
  )
}

export default Card