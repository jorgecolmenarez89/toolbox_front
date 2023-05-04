
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = ( { title } ) => {
  return (
		<Navbar bg="dark" variant="dark" expand="lg" data-testid="header" >
      <Container>
        <Navbar.Brand href="#home">{ title}</Navbar.Brand>
      </Container>
    </Navbar>
	) 
}

export default Header