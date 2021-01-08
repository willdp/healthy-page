import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/header/header';
import MainPage from './components/pages/main-page/main-page';
import BestRecipes from './components/pages/recipes/recipes';
import KnowMore from './components/pages/know-more/know-more';
import Blog from './components/pages/blog/blog';
import Join from './components/pages/join/join';
import Register from './components/pages/register/register';

ReactDOM.render(
  <React.StrictMode>
    <Header></Header>
    <MainPage></MainPage>
    <BestRecipes></BestRecipes>
    <KnowMore></KnowMore>
    <Blog></Blog>
    <Join></Join>
    <Register></Register>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
