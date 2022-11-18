import logo from "../../assets/img/logo.svg";
import "./styles.css";

function Header() {
  return (
    <header>
        <div className="header-logo-container">
            <img src={logo} alt="EstudoJava" />
            <h1>EstudoJava</h1>
            <p>
              Desenvolvido por
              <a href="localhost"> @gaaica</a>
            </p>
        </div>
    </header>
  )
}

export default Header