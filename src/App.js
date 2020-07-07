import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import CourseList from "./components/CourseList/CourseList";
import Navbar from "./components/Navbar/Navbar";
import SavedList from "./SavedList/SavedList";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route path='/home' component={CourseList} />
        <Route path='/saved' component={SavedList} />
        <Redirect from='/' to='/home' />
        <Redirect to='/home' />
      </Switch>
    </Fragment>
  );
}

export default App;
