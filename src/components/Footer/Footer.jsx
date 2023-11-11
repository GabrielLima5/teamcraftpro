import './Footer.css'
import FacebookLogo from '../../assets/fb.png'
import InstagramLogo from '../../assets/ig.png'
import TwitterLogo from '../../assets/tw.png'
import OrganoLogo from '../../assets/logo.png'

export default function Footer(){
    return(
        <footer className="footer">
            <div className="social-media">
                <img src={FacebookLogo} alt="Facebook" />
                <img src={TwitterLogo} alt="Twitter" />
                <img src={InstagramLogo} alt="Instagram" />
            </div>
            <div className="organo-logo">
                <img src={OrganoLogo} alt="Organo" />
            </div>
            <div className="credits">
                <span>Desenvolvido por Gabriel Lima <br /> (Curso React Alura)</span>
            </div>
        </footer>
    )
}