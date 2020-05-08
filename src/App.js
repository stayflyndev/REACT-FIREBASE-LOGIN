import React, {Component}from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import {auth, addUserDocument} from './firebase'

class App extends Component {
  constructor(){
    super();

    this.state={
      currentUser: null
    }
  }

  componentDidMount() {
    this.unsubsribe = auth.onAuthStateChanged(async (authenticated) => {
      if (authenticated) {
        // User is signed in.
        addUserDocument(authenticated)
        console.log(authenticated)
      } else {
        // No user is signed in.
      }
    });
  }

  componentWillUnmount() {
    this.unsubsribe();
  }
  

  render(){
    return (
      <div className="App">
       <Home />
      </div>
    );
  }
  }


export default App;
