import { Link } from "react-router-dom";

export function NavbarDesktop() {
  return (
    <>
      <nav className="navbarDesktop">
        <Link className="navLink" to={"/"}>
          My tasks
        </Link>
        <Link className="navLink" to={"/addTask"}>
          Add Task
        </Link>
        <Link className="navLink" to={"/login"}>
          Login
        </Link>
        <Link className="navLink" to={"/singin"}>
          Sign in
        </Link>
      </nav>
    </>
  );
}
