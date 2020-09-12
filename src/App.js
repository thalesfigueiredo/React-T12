import React from "react";
import "./App.css";
import Postagens from "./components/Postagens";
import PostagemCreate from "./components/PostagemCreate";
import PostagemShow from "./components/PostagemShow";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <div>
          <Switch>
            <Route path="/" exact component={Postagens}></Route>
            <Route path="/postagens" component={Postagens}></Route>
            <Route
              path="/postagem/create"
              component={PostagemCreate}
            ></Route>
            <Route path="/postagem/show/:id" component={PostagemShow}></Route>
          </Switch>
          </div>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
