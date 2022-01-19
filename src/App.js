import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { FlagsProvider } from './components/react/context';
import Loader from './components/ui/Loader';

import Navbar from './components/ui/Navbar';
import Home from './components/ui/pages/Home';
import PaisInfo from './components/ui/pages/PaisInfo';

function App() {
  return (
    <FlagsProvider>
      <Navbar />
      <Loader />
      <Switch>
        <Route exact path='/' render={() => <Home />} />

        <Route exact path='/pais/:contryName' render={(routeProps) => <PaisInfo {...routeProps} />} />
      </Switch>

    </FlagsProvider>
  )
};

export default App;
