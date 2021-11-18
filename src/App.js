import './App.css';
import {Switch, Route} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Overview from './components/Overview';
import Timeline from './components/Timeline';
import News from './components/News';

function App() {
  return (
    <div className="app-main">
      <Sidebar/>
      <Switch>
        <Route exact path="/" component={Overview}/>
        <Route exact path="/overview" component={Overview}></Route>
        <Route exact path="/timeline" component={Timeline}></Route>
        <Route exact path="/news" component={News}></Route>
      </Switch>
    </div>
  );
}

export default App;
