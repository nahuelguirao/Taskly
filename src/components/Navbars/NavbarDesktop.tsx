import { useContext } from "react";
import { TaskStateContext } from "../../context/TaskStateContext";
import { useHandleLogout } from "../../hooks/useHandleLogout";
import { Link } from "react-router-dom";

export function NavbarDesktop() {
  //Gets dispatch to realise 'LOGOUT' action
  const { dispatch } = useContext(TaskStateContext);

  //Gets user information + function to logout
  const { user, handleLogout } = useHandleLogout(dispatch);

  return (
    <>
      <nav className="navbarDesktop">
        <Link className="navLink" to={"/"}>
          My tasks
        </Link>
        <Link className="navLink" to={"/addTask"}>
          Add Task
        </Link>
        {user !== undefined ? (
          <a className="navLink" onClick={handleLogout}>
            Logout
          </a>
        ) : (
          <>
            <Link className="navLink" to={"/login"}>
              Login
            </Link>
            <Link className="navLink" to={"/singin"}>
              Sign in
            </Link>
          </>
        )}
      </nav>
    </>
  );
}
