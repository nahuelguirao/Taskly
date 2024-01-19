import { Link } from "react-router-dom";

interface NavbarMobileProps {
  handleMenuToggle: () => void;
}

export function NavbarMobile({ handleMenuToggle }: NavbarMobileProps) {
  return (
    <>
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
    </>
  );
}
