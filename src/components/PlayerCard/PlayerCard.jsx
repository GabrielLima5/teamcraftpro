import React from 'react'
import './PlayerCard.css'

const PlayerCard = (props) => {
  return (
    <div className="card">
        <div className="header" style={{backgroundColor: props.backgroundColor}}>
            <img src={props.image || 'https://i.pravatar.cc/300/200'} alt={props.name} />
        </div>
        <div className="footer">
            <h4>{props.name}</h4>
            <h5>{props.role}</h5>
        </div>
    </div>
  )
}

export default PlayerCard