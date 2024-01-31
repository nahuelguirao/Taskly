import { useContext } from "react";
import { TaskStateContext } from "../../context/TaskStateContext";
import { useHandleLogout } from "../../hooks/useHandleLogout";
import { Link } from "react-router-dom";

interface NavbarMobileProps {
  handleMenuToggle: () => void;
}

export function NavbarMobile({ handleMenuToggle }: NavbarMobileProps) {
  //Gets dispatch to realise 'LOGOUT' action
  const { dispatch } = useContext(TaskStateContext);

  //Gets user information + function to logout
  const { user, handleLogout } = useHandleLogout(dispatch);
  return (
    <>
      <nav className="navbarMobile">
        <Link to={"/"} onClick={handleMenuToggle}>
          My tasks
        </Link>
        <Link to={"/addTask"} onClick={handleMenuToggle}>
          Add Task
        </Link>
        {user !== undefined ? (
          <a
            className="navLink"
            onClick={() => {
              handleLogout();
              handleMenuToggle();
            }}
          >
            Logout
          </a>
        ) : (
          <>
            <Link className="navLink" to={"/login"} onClick={handleMenuToggle}>
              Login
            </Link>
            <Link className="navLink" to={"/singin"} onClick={handleMenuToggle}>
              Sign in
            </Link>
          </>
        )}
      </nav>
    </>
  );
}
