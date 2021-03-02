import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Test from './Test';
import reportWebVitals from './reportWebVitals';

function Test2(props) {
  console.log(props);
  return 
  <div>
   <h1>Test2</h1>
    <pre>
    props.param : {props.param}<br/>
    props.something : {props.something}<br/>
    props.papapa : {props.papapa[0]}<br/>
    </pre>
  </div>;
}

function Test3({param, something, papapa}) {
  console.log(param, something, papapa);
  return <h1><pre>
    param : {param}<br/>
    something : {something}<br/>
    papapa : {papapa[0]}<br/>
    </pre></h1>;
}

ReactDOM.render(
  <React.StrictMode>
    <div>
      <App />
      <Test />
      <Test2 param="test" something={true} papapa={["he"]}/>
      <Test3 param="test" something={true} papapa={["he"]}/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
