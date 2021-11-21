import './Header.css';
import {Navbar} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

function Header(){
    return(
<div>

<p className="logo">
    <span style={{ color: '#84a59d' }}> Employee</span>
    <span style={{ color: '#adf7b6'}}>Up.</span>

</p>

       
<Navbar>
 
        <div className="header">

            <NavLink exact to="/"  className="menu-link">Home</NavLink> {/*NavLink pentru active className*/}
            
            <NavLink to="/Solutions.js" className="menu-link">Solutions</NavLink>

            <NavLink to="/Pricing.js"  className="menu-link">Pricing</NavLink>
            
            <NavLink to="/Contact.js"  className="menu-link">Contact</NavLink>
        </div>
    
    
</Navbar>
</div>
    )

}

export default Header;