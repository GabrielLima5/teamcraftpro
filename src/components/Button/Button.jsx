import './Button.css'

const Button = ({ onClick, color, children }) => {
    return(
        <button className="button" onClick={onClick} style={{backgroundColor: `${color}`}}>{children}</button>
    )
}

export default Button