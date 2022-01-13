import logo from "./react-logo.png"

export default function Header(){
  return(
    <div>
      <header>
        <nav className="nav">
          <img src="./react-logo.png" className="logo" alt="" />
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