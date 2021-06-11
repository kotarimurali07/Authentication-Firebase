import LoginEmail from "./services/Authentication/components/LoginEmail";
import Signup from "./services/Authentication/components/Signup";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Charts from "./services/Dashboard/components/Charts";
function App() {
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <Switch>
            <Route path="/Login" component={LoginEmail} />
            <Route path="/Signup" component={Signup} />
            <Route exact path="/" component={Charts} />
          </Switch>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
