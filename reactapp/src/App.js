
import Accueil from './components/Accueil';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Gender from './components/Gender';
import Result from './components/Result';


//redux
import firstName from './reducers/firstname';
import lastName from './reducers/lastname';
import gender from './reducers/gender';
import age from './reducers/age';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
const store = createStore(combineReducers({ firstName, lastName, gender, age }));



function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Accueil} />
          <Route exact path="/gender" component={Gender} />
          <Route exact path="/result" component={Result} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
