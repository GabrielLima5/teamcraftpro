import React from 'react'
import './Team.css'
import PlayerCard from '../PlayerCard/PlayerCard'

const Teams = (props) => {
  const filteredPlayers = props.players.filter(player => player.team === props.name)

  return (filteredPlayers.length > 0 && (
    <section className="team" id="team" style={{backgroundColor: `${props.secondaryColor}`}}>
        <h3 style={{borderBottom: `4px solid ${props.primaryColor}`}}>{props.name !== 'Técnico' ? props.name + 's' : props.name}</h3>
        <div className="cards">
          {filteredPlayers.map(player => (
            <PlayerCard key={player.name} backgroundColor={props.primaryColor} image={player.image} name={player.name} />
          ))}
        </div>
    </section>
  ))
}

export default Teams