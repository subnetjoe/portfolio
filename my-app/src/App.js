import React from "react"
import ReactDOM from 'react-dom';
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
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

ReactDOM.render(<App />, document.getElementById('root'));