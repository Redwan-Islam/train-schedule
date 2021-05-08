import "./App.css";
import Home from "./component/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dtn from "./component/Dtn/Dtn";
import Ntd from "./component/Ntd/Ntd";
import NoMatch from "./component/NoMatch/NoMatch";
import Dtnh from "./component/Dtnh.js/Dtnh";
import Ticpur from "./component/Ticpur/Ticpur";
import Tpr from "./component/Tpr/Tpr";
import Contus from "./component/Contus/Contus";
import Aboutus from "./component/Aboutus/Aboutus";
import Ntdh from "./component/Ntdh/Ntdh";
import Ntdticket from "./component/Ntdticket/Ntdticket";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Home">
            <Home></Home>
          </Route>
          <Route path="/Dtn">
            <Dtn></Dtn>
          </Route>
          <Route path="/Ntd">
            <Ntd></Ntd>
          </Route>
          <Route path="/Dtnh">
            <Dtnh></Dtnh>
          </Route>
          <Route path="/Ticpur">
            <Ticpur></Ticpur>
          </Route>
          <Route path="/Tpr">
            <Tpr></Tpr>
          </Route>
          <Route path="/Contus">
            <Contus></Contus>
          </Route>
          <Route path="/Aboutus">
            <Aboutus></Aboutus>
          </Route>
          <Route path="/Ntdh">
            <Ntdh></Ntdh>
          </Route>
          <Route path="/Ntdticket">
            <Ntdticket></Ntdticket>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
