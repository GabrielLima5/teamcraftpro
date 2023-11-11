import './Banner.css'
import banner from '../../assets/soccer-design.jpeg'

export default function Banner(){
    return(
        <header className="banner">
            <img src={banner} alt="Banner" />
        </header>
    )
}