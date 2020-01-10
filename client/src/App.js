import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./views/header";
import Home from "./views/home";
import AddTshirt from "./components/addTshirt";
import Footer from "./views/footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/addTshirt" component={AddTshirt} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
