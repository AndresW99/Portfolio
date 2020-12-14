import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import { Projects } from '../components/About/Projects';
import { Contact } from '../components/Contact/Contact';
import { Home } from '../components/Home/Home';
import { NavBar } from '../components/NavBar/NavBar';
  
  export const AppRouter = () => {

    return (

      <Router>

        <NavBar />

        <div className="container-fluid" >

      
            <Switch>

              <Route 
                exact 
                path="/"
                component={ Home }
              />

              <Route 
                exact
                path="/projects"
                component={ Projects }
              />

              <Route 
                exact
                path="/contact"
                component={ Contact }
              />

              <Redirect to="/" />

            </Switch>

        </div>

      </Router>
    );
  }