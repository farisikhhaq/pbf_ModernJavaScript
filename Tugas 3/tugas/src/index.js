import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HelloComponent from './component/HelloComponent';
import LoginComponent from './component/LoginComponent';
import Test from './Test';
import Image from './Image';

// class StateFullComponent extends Component{
//   render(){
//     return <p>StateFullComponent</p>
//   }
// }s

// ReactDOM.render(<Image />, document.getElementById('root'));
// ReactDOM.render(<LoginComponent />, document.getElementById('root'));
// ReactDOM.render(<HelloComponent />, document.getElementById('root'));
ReactDOM.render(<Test />, document.getElementById('root'));

// ReactDOM.render(<StateFullComponent/>, document.getElementById('root'));
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
