import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './containers/Home/Home';
import Signup from './containers/Signup/Signup';
import Login from './containers/Login/Login';
import FullArticle from './containers/Articles/FullArticle/FullArticle';
import AddArticle from './containers/Articles/AddArticle/AddArticle';
import EditArticle from './containers/Articles/EditArticle/EditArticle';
import NavigationBar from './containers/NavigationBar/NavigationBar';

class App extends Component {
  render(){
    return (
      <div className="container-fluid">
        <NavigationBar />
        <Switch>
          <Route exact path="/article/add" component={AddArticle} />
          <Route path="/article/edit" component={EditArticle} />
          <Route path="/article/:id" component={FullArticle} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );  
  }
}

export default App;
