import './Form.css'
import Input from '../Input/Input'
import List from '../List/List'
import Button from '../Button/Button'
import { useState } from 'react'

const Form = (props) => {
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        const employee = {
            name,
            image,
            team
        }
        
        props.onRegister(employee)
        setImage('')
        setName('')
        setTeam('')
    }

    return(
        <section className="form">
            <form onSubmit={handleSubmit}>
                <h2>Você é técnico de um grande clube. Adicione jogadores de elite e monte o seu time!</h2>
                <Input value={name} setValue={setName} name="Nome" required={true} placeholder="Digite o nome do jogador" />
                <Input value={image} setValue={setImage} name="Imagem" required={false} placeholder="Informe o endereço da imagem" /> 
                <List value={team} setValue={setTeam} label="Posição" required={true} items={props.teams} />
                <Button color="green">Criar Card</Button>
            </form>
        </section>
    )
}

export default Form