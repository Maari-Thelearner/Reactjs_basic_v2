import React from 'react';
import ReactDOM from 'react-dom';
function AppBar() {
  return  <div>
    <h1>This is Appbar of the react js</h1>
  </div>
}
function SideBar() {
  return <div>
    <h2>This is Side bar of the react js</h2>
  </div>
}
function NavBar() {
  return <div>
    <h3>This is Nav bar of the react js</h3>
  </div>
}
function Mywebsite() {
  return  <div>
    <AppBar />
  <SideBar />
  <NavBar />
  </div>
}
ReactDOM.render(
<Mywebsite />,
document.getElementById('root'),
);




/*import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/
