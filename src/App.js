import React, { Component } from 'react';
import { HashRouter as Router, Route} from "react-router-dom";

import Home from "./components/pages/Home";
import Resume from "./components/pdf/resume";
import Referrences from "./components/pdf/referrences";
import Reviews from './components/pages/reviews';

import Container from "react-bootstrap/esm/Container";




class App extends Component {
  render() {
    return (
      <Router basename="/">
        <Container>
          <Route  exact path={["/", `/home`]} component={Home} />
          <Route path="/resume" component={Resume} />
          <Route path="/reviews" component={Reviews} />
          <Route path="/referrences" component={Referrences} />
        </Container>
      </Router>
    );
  }
}

export default App;