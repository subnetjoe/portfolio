import React from "react"
import ReactDOM from 'react-dom';
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
// import logo from './logo.svg';
import './index2.css';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);