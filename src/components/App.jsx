import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Page404 from './pages/Page404';
import Weather from './weather/Weather';


const App = () => {
  return (
    <div className="ui container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/city/:id" component={Weather} />
        <Route component={Page404} />
      </Switch>
    </div>

  );
};


export default App;
