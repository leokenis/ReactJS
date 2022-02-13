import logo from "./img/logo.png";
import cart from "./img/cart.png";

export const NavBar = () => {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark navbar-color">
      <div className="container-fluid navbar-app">
        <img className="logo" src={logo} alt="logo"></img>
        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" href="#">Accesorios</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">Jeans</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">Chaquetas</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">Remeras</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Nosotros</a>
          </li>
          <img className="nav-link cart" src={cart} alt="cart"></img>
        </ul>
      </div>
    </nav>
  );
}