import { Provider } from 'mobx-react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { MainRouter } from './routes';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { incomeStore, IncomeStore } from './stores/IncomeStore';

export interface AppState {
  IncomeStore?: IncomeStore
}

const state = {
  IncomeStore: incomeStore
} as AppState;

ReactDOM.render(
  <Provider {...state} url={window.location.hash} >
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


