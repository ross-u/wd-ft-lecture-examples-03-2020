import React from 'react';
import './App.css';
import ArticlePreview from './components/ArticlePreview';
import Navbar from './components/Navbar';

import Higher from './hoc/Higher'


const articles = [
  { title: 'Help wanted: Autonomous robot guide', description: 'While we are currently embroiled in personal and professional circumstances unimaginable even three months ago, these very challenges will form the basis of incredibly innovative ideas.' },
  { title: 'Building and investing in the ‘human needs economy', description: 'Products and services that have material impact on basic needs and livelihoods and address a coredraw on a consumer’s time, money or energy. For 2020, we are focusing ...' },
  { title: 'Facebook to acquire Giphy in a deal worth $400 million', description: 'Facebook  will acquire Giphy, the web-based animated gif search engine and platform provider, Facebook confirmed today, in a deal worth around $400 million, according to a report.' },
]

function App(props) {
  return (
    <div className={props.mode === "dark" ? "App-dark" : "App"}>
      <Navbar />
      {articles.map((article) => <ArticlePreview {...article} />)}
    </div>
  );
}

export default Higher(App);
