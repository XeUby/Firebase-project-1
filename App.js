import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import * as firebase from 'firebase';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


export default class App extends Component {
  componentDidMount() {
    const db = firebase.database();
    console.log(db)
  }
render(){
  return (
    <div className="login_block">
      <input type="text" placeholder="Sähköposti" />
      <input type="password" placeholder="Salasana" />
      <input type="submit" />

    </div>
  )
}
}