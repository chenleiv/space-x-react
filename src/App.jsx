import './assets/scss/global.scss';
import { HomePage } from '../src/pages/HomePage';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { LandingDetails } from './pages/LandingDetails';
import { AppHeader } from './cmps/AppHeader';

function App() {
  return (
    <Router>
      <div className='App'>
        <header>
          <AppHeader />
        </header>
        <main className='container'>
          <Switch>
            <Route component={LandingDetails} path='/landing/:id' />
            <Route component={HomePage} path='/' />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
