import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import PostById from "./Components/PostById";
import Profile from "./Components/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Profile} />
          <Route exact path="/post/:id" component={PostById} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
