import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {


    render() {

        return (

            // ************
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" className="navbar-brand" >ExerciseTracker</Link>



                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="
                     navbar-nav  mr-auto">
                        <li className="nav-item ">
                            <Link to="/" className="nav-link" >Exercise </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/create" className="nav-link" >Create Exercise log</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/user" className="nav-link" >Create user</Link>
                        </li>

                    </ul>
                </div>
            </nav>
            // ****************


        )
    }



}