import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter,faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer(){
    return (
        <footer>
          <p>BENJAMIN T</p>
          <div className="Icon">
            <a href="https://www.linkedin.com/in/benjamin-tuyisenge-119457284" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x" color="#D6B11C" style={{ margin: "0 10px" }}/></a>
            <a href="https://github.com/tuyisenge250" target='_blank'><FontAwesomeIcon icon={faGithub} color="#D6B11C" size="2x"/></a>
            <a href="https://www.facebook.com/benjimin.mukapa" target='_blank'><FontAwesomeIcon icon={faFacebook} size="2x" color="#D6B11C" style={{ margin: "0 10px" }} /></a>
            <a href="https://x.com/BenjaminTu80699?t=nMDyczXoFh2CwUwjPUnbsA&s=09" target='_blank'><FontAwesomeIcon icon={faTwitter} size="2x" color="#D6B11C" style={{ margin: "0 10px" }} /></a>
          </div>
        </footer>
        
    )
}
