import reactLogo from "./images/react-logo.png";

export default function Header(){
  return(
    <div>
      <header>
        <nav className="nav">
          <img src={reactLogo} className="nav-logo" alt="React Logo" />
          <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </header>
    </div>
  )
}