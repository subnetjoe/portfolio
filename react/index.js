import React from "React"
import ReactDOM from "React-dom"
import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

ReactDOM.render(<Page />, document.getElementById("root"))