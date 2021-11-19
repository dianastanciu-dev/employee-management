import './Header.css';
import {Nav, Navbar} from 'react-bootstrap';


function Header(){
    return(
<div>

<p className="logo">
    <span style={{ color: '#84a59d' }}> Employee</span>
    <span style={{ color: '#adf7b6'}}>Up.</span>

</p>

       
<Navbar>
 
        <Nav className="header">

            <Nav.Link href="/" className="active">Home</Nav.Link>
            <Nav.Link href="/Solutions.js" className="inactive">Solutions</Nav.Link>
            <Nav.Link href="/Pricing.js" className="inactive">Pricing</Nav.Link>
            <Nav.Link href="/Contact.js" className="inactive">Contact</Nav.Link>
        </Nav>
    
</Navbar>
</div>
    )

}

export default Header;