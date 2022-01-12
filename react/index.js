


function Header(){
  return(
    <div>
      <header>
        <nav className="nav">
          <img src="./react-logo.png" className="nav-logo" />
          <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

function MainContent(){
  return(
    <div>
      <h1>Reasons I'm excited to learn React</h1>
          <ol>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
          </ol>
    </div>
  )
}

function Footer(){
  return(
    <div>
      <footer>
        <small>c 2022 Early development. All rights reserved.</small>
      </footer>
    </div>
  )
}

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