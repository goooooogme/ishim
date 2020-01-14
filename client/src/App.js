import React from 'react';
import Header from './components/header/header.jsx'
import Section from './components/section/section.jsx'
import Footer from './components/footer/footer.jsx'
import './App.css'

function App() {
  return (
    <div className="wrap">
      <Header />
      <Section />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
