import React from "react";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Nav from './Components/Navigation';
import BackgroundVideo from './Components/Background';
import 'semantic-ui-css/semantic.min.css';

import './App.css';


function App() {
  return (
    <>
      <BackgroundVideo />
      <Header />
      <Nav />
      <Footer />
    </>
  );
}

export default App;
