import {Container,Form,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'

// import { useEffect } from 'react';
// import{fetcher} from 'react'
// import { useLocation } from 'react-router-dom';


//fare fetch all'interno della weatherSection 
function NavBar() {

// const city = useSelector((state)=> state.DataWeather.city)
const dispatch = useDispatch()
  return (
    <Container >
    <Navbar bg="info" style={{borderRadius:"1em", marginTop:"3em"}} expand="lg">
      <Container fluid>
        <Navbar.Brand><Link to={"/"} className="text-dark text-decoration-none" >WeatherCode</Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link><Link to={"/"} className="text-dark text-decoration-none">Home</Link></Nav.Link>
            <NavDropdown title="Profilo" id="navbarScrollingDropdown">
              <NavDropdown.Item >Registrati/Login</NavDropdown.Item>
              <NavDropdown.Item >
                Opzioni
              <NavDropdown.Divider />
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex"
          onSubmit={(e)=>{
            e.preventDefault();
            dispatch({
              type:"ADD_CITY",
              payload:e.target[0].value
            })
            console.log(e.target[0].value)
          }}>
            <Form.Control 
              type="search"
              placeholder="Search"
              className="me-5"
              aria-label="Search"
            
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Container>
  );
}

export default NavBar;

    // function cityLocatin(params) {
        
    // }
    // useEffect(()=>{
    //     fetcher()
    // },[] )

    // let fetchWeather = async function () {
    //     try {
    //         let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=milano&appid=fa7b9a2ce77dd7bb132aea33b8576f05`)
    //         console.log(res)
    //         if(res.ok){
    //             let data = await res.json()
    //             console.log('data',data)
    //         } 
    //     }catch (error) {
    //             console.log(error)
    //         }
    // }
    // fetchWeather()