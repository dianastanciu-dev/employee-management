import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook
  } from "@fortawesome/free-brands-svg-icons";

function Footer(){
    return(

<div className="footer">

<p>Connect with us</p>
<div className="social">
<a href="https://www.youtube.com/"
  className="youtube">
  <FontAwesomeIcon icon={faYoutube} size="2x" />
</a>
<a href="https://www.facebook.com/"
  className="facebook">
  <FontAwesomeIcon icon={faFacebook} size="2x" />
</a>
</div>

</div>
)

}

export default Footer;