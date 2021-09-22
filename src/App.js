import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quote from './pages/Quote';
import Header from './components/Header';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header className="header" />
        <Switch>
          <Route exact path="/calculator">
            <div className="calculator-page">
              <h2>Let&lsquo;s do some Math</h2>
              <Calculator />
            </div>
          </Route>
          <Route path="/quotes">
            <Quote />
          </Route>
          <Route path="/">
            <div className="about">
              <p>
                &quot;Math magicians&quot; is a website for all fans of
                mathematics. It is a Single Page App (SPA) that allows users to:
                Make simple calculations. Read a random math-related quote.
              </p>
            </div>
          </Route>
          <Route path="*">
            <h3>No match for this page</h3>
          </Route>
        </Switch>
      </div>
    );
  }
}
