import { useState } from "react";
import { useHandleLogout } from "../../hooks/useHandleLogout";
import { handleLogoutNotification } from "../../helpers/handleLogoutNotification";
import { Link } from "react-router-dom";

export function NavbarDesktop() {
  const { user, handleLogout } = useHandleLogout();
  const [showLogoutMessage, setShowLogoutMessage] = useState(false);

  const handleLogoutClick = () => {
    handleLogoutNotification(handleLogout, setShowLogoutMessage);
  };

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
          <a className="navLink" onClick={handleLogoutClick}>
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

      {showLogoutMessage && (
        <div className="logoutMessage">
          <p>Logged out!</p>
        </div>
      )}
    </>
  );
}
