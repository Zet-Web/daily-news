import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home';
import Header from './components/header';
import MainLayout from './hoc/mainLayout';
import Contact from './components/contact';
const Routes = () => (
  <BrowserRouter>
    <Header />
    <MainLayout>
      <Switch>
        <Route path='/contact' component={Contact} />
        <Route path='/' component={Home} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
);

export default Routes;
