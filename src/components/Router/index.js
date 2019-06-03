import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import SinglePage from '../pages/SinglePage';

export default function () {
  return (
    <Switch>
      <Route exact path='/' component={MainPage} />
      <Route path='/page/:id' component={SinglePage} />
    </Switch>
  )
}