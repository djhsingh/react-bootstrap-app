import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import { Link,useNavigate  } from 'react-router-dom';
function Header({searchText,setSearchText}) {

  const navigate = useNavigate();
  const updateSearchText = (e) =>{
    navigate("/search");
    setSearchText(e.target.value)
    
  }
  return (
    <>
      <Navbar bg="danger" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/users">Users</Link>
            <Link className="nav-link" to="/people">People</Link>
          </Nav>
          <Stack direction="horizontal" gap={3}>
              <Form.Control className="me-auto" placeholder="Add your item here..." value={searchText} onChange={updateSearchText}/>
              <Button variant="secondary">Search</Button>
          </Stack>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;