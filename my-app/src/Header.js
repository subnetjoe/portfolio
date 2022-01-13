import Image from "./react-logo.png";

export default function Header(){
  return(
    <div>
      <header>
        <nav className="nav">
          <img src={Image} className="nav-logo" alt="Tag" />
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