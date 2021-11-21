import './Header.css';
import {Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Header(){
    return(
<div>

<p className="logo">
    <span style={{ color: '#84a59d' }}> Employee</span>
    <span style={{ color: '#adf7b6'}}>Up.</span>

</p>

       
<Navbar>
 
        <div className="header">

            <Link exact to="/" activeClassName="active" className="menu-link">Home</Link>
            <Link to="/Solutions.js" activeClassName="active" className="menu-link">Solutions</Link>
            <Link to="/Pricing.js" activeClassName="active" className="menu-link">Pricing</Link>
            <Link to="/Contact.js" activeClassName="active" className="menu-link">Contact</Link>
        </div>
    
</Navbar>
</div>
    )

}

export default Header;