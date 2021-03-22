import React from 'react';
import { HashRouter, Route, Switch, Redirect, withRouter } from 'react-router-dom';

import NoMatch from '../pages/NoMatch';
import Login from '../pages/login';
import Home from '../pages/home';
import Lesson1 from '../pages/lesson1';
import Lesson2 from '../pages/lesson2';
import Lesson3 from '../pages/lesson3';
import Lesson4 from '../pages/lesson4';
import Lesson5 from '../pages/lesson5';
import Lesson6 from '../pages/lesson6';
import Lesson7 from '../pages/lesson7';
import Lesson8 from '../pages/lesson8';
import Lesson9 from '../pages/lesson9';
import Lesson10 from '../pages/lesson10';
import App from '../App';

class BasicRoute extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <HashRouter>
            <Switch>
              <Route exact path="/login" component={Login} />
              {/* <Route exact path="/home" component={Home} /> */}
              <Route path="/" render={() =>
                <Home>
                  <Route exact path="/lesson1" component={Lesson1} />
                  <Route path="/lesson2" component={Lesson2} />
                  <Route path="/lesson3" component={Lesson3} />
                  <Route path="/lesson4" component={Lesson4} />
                  <Route path="/lesson5" component={Lesson5} />
                  <Route path="/lesson6" component={Lesson6} />
                  <Route path="/lesson7" component={Lesson7} />
                  <Route path="/lesson8" component={Lesson8} />
                  <Route path="/lesson9" component={Lesson9} />
                  <Route path="/lesson10" component={Lesson10} />
                </Home>
              } />
              {/* <Route exact path="/about" component={About} />
              <Route exact path="/lesson1" component={Lesson1} />
              <Route exact path="/lesson2" component={Lesson2} /> */}
              {/* <Redirect to="/home" /> */}
              <Route component={NoMatch} />
            </Switch>
          </HashRouter>
        </App>
      </HashRouter>
    )
  }
}
export default withRouter(BasicRoute);


