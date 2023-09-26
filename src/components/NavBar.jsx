import logo from "../assets/airbnb-logo.png";

export function Navbar() {
  return (
    <nav className="nav">
      <img src={logo} alt="image" className="nav--logo" />
    </nav>
  );
}
