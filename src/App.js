import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '@views/Home/Home';
import Music from '@views/Music/Music';
import Code from '@views/Code/Code';
import SNavbar from '@components/SNavbar/SNavbar';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Container fluid className="py-2 px-3 app-container">
        <Row className="h-100">
          <Col sm={3}>
            <SNavbar />
          </Col>

          <Col>
            <div className="content-container px-4 py-3">
              <Switch>
                <Route path='/'>
                  <Home />
                </Route>

                <Route path='/music'>
                  <Music />
                </Route>

                <Route path='/code'>
                  <Code />
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
