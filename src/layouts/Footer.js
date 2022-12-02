import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Footer() {
  return (
    <>
      <Navbar bg="danger" variant="dark" fixed='bottom'>
        <Container className='text-center text-md-start'>
                <div className="text-center p-4" >
            © 2021 Copyright:
            <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
          </div>       
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;