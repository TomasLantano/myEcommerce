// import { Link, NavLink } from 'react-router-dom';

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import CartWidget from '../CartWidget/CartWidget';

// const NavBar = () => {
//     return (
//         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//             <Container>
//                 <Navbar.Brand>
//                   <NavLink to='/' style={{color:"white", textDecoration:"none"}}>Gestion</NavLink>
//                 </Navbar.Brand>
//                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                 <Navbar.Collapse id="responsive-navbar-nav">
//                 <Nav className="me-auto">
//                     <NavLink to="/categoria/gorras" className={({ isActive })=> isActive  ? 'btn btn-primary':'btn btn-outline-primary' } >Productos</NavLink>
//                     <NavLink to="/categoria/remeras" className={({ isActive })=> isActive  ? 'btn btn-primary':'btn btn-outline-primary' } >Remeras</NavLink>
                    
//                 </Nav>
//                 <Nav>
//                     {/* <Nav.Link href="#deets">🛒</Nav.Link> */}
//                     {/* <Nav.Link eventKey={2} href="#memes">
//                     Dank memes
//                     </Nav.Link> */}
//                     <Link to='/cart'>
//                         <CartWidget />
//                     </Link>
//                 </Nav>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     )
// }

// export default NavBar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href='/'>Heladeria</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="/categoria/postres">Postres</NavDropdown.Item>
              <NavDropdown.Item href="/categoria/tortas">
                Tortas
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;