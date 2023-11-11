import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Form from './components/Form/Form';
import Team from './components/Teams/Team';
import Footer from './components/Footer/Footer';
import Button from './components/Button/Button';
import { myTeam } from './data/myTeam'
import { BsArrowDown } from 'react-icons/bs'
import './App.css'

function App() {
  const teams = [
    { 
      name: 'Goleiro',
      primaryColor: '#57c278',
      secondaryColor: '#d9f7e9'
    },
    { 
      name: 'Zagueiro',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    { 
      name: 'Meio-campista',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    { 
      name: 'Atacante',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    { 
      name: 'Técnico',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5'
    }
  ]

  const teamNames = teams.map(team => team.name)
  const [players, setPlayers] = useState(myTeam)
  
  const addPlayer = (player) => {
    setPlayers(players => [...players, player])
  }

  const deleteAll = (e) => {
    e.preventDefault()
    setPlayers([])
  }

  return (
    <div className="App">

      <Banner />

      <div className="top">
        <h1>TeamCraftPro</h1>
        <Button color="red" onClick={deleteAll}>Deletar todos os jogadores</Button>
      </div>

      <Form onRegister={addPlayer} teams={teamNames} />

      {teams.map(team => (
        <Team key={team.name} name={team.name} players={players} primaryColor={team.primaryColor} secondaryColor={team.secondaryColor} />
      ))}

      <div className="redirect-button">
          <a href="#team">
            <Button>
              <BsArrowDown />
            </Button>
          </a>
      </div>

      <Footer />
    </div>
  );
}

export default App;
