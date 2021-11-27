import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Header} from './componets/header'
import { Footer} from './componets/footer'
import { Content} from './componets/content'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,Container}from 'react-bootstrap';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { Create } from './componets/create';
import { Read } from './componets/read';
import { edit } from './componets/edit';
class App extends Component {
  render (){
    return(
      <Router>
    <div className="App">

<Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/read">read</Nav.Link>
      <Nav.Link href="/create">Create</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <br/>
  <Switch>
<Route path='/' component={Content} exact/>
<Route path='/Create' component={Create} exact/>
<Route path='/read' component={Read} exact/>
<Route path='/edit/:id' component={edit} exact/>

  </Switch>

     
    </div></Router>
    //Adds a nav bar in & routeing for each section clicking on one will load the corrosponding component
  );
}
}

export default App;
