
import './App.css';
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
        <Router>
      <Switch>
        
          <Header />
        <Route path="/checkout">
          <Checkout />
          {/* <Home /> */}
        </Route>

        <Route path="/">    
          <Home />
        </Route>



      </Switch>
    </Router>
    </div>
        

);
}

export default App;
// http://192.168.43.140:3000  