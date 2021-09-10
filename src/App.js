import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '@views/Home/Home';
import Music from '@views/Music/Music';
import Code from '@views/Code/Code';
import Blog from '@views/Blog/Blog';
import SNavbar from '@components/SNavbar/SNavbar';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from 'react-router-dom';

function App() {
  // let location = useLocation();

  // console.log(location);

  return (
    <Router>
      <Container fluid className="px-3 app-container">
        <Row className="h-100">
          <Col sm={3} className="py-2">
            <SNavbar />
          </Col>

          <Col className="content-col py-3">
            <div className="content-container px-4 py-3">
              <Switch>
                <Route exact path='/'>
                  <Home />
                </Route>

                <Route path='/music'>
                  <Music />
                </Route>

                <Route path='/code'>
                  <Code />
                </Route>

                <Route path='/blog'>
                  <Blog />
                </Route>
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
