import { useNavbarToggle } from "../hooks/useNavbarToggle";
import { MenuIcon } from "../components/UI/MenuIcon";
import { Link } from "react-router-dom";
import "../styles/header.css";

export function Header() {
  const { isMenuOpen, handleMenuToggle } = useNavbarToggle();

  return (
    <header>
      <h2 className="h2Header">
        <span className="importantWord">T</span>askly!
      </h2>
      <MenuIcon handleMenuToggle={handleMenuToggle} />
      {isMenuOpen && (
        <nav className="navbarMobile">
          <Link to={"/"} onClick={handleMenuToggle}>
            My tasks
          </Link>
          <Link to={"/addTask"} onClick={handleMenuToggle}>
            Add Task
          </Link>
          <Link to={"/login"} onClick={handleMenuToggle}>
            Login
          </Link>
        </nav>
      )}
      <nav className="navbarDesktop">
        <Link to={"/"}>My tasks</Link>
        <Link to={"/addTask"}>Add Task</Link>
        <Link to={"/login"}>Login</Link>
      </nav>
    </header>
  );
}
