import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import CreatExercise from "./components/create-exercise.component";
import CreatUser from "./components/create-user.component";
import EditExercise from "./components/edit-exercises.component";



function App() {
  return (
    <Router>
      <div className="container">

        <Navbar />
        <br />
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreatExercise} />
        <Route path="/user" component={CreatUser} />

      </div>



    </Router>



  );
}

export default App;
