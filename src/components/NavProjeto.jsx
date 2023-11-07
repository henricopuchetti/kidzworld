import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavProjeto() {
  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand href="/" className='nav-txt'>Kidz World</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/entrar">Entrar</Nav.Link>
            <Nav.Link href="/cadastro">Cadastro Produto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavProjeto;