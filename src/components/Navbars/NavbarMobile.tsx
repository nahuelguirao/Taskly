import { useState } from "react";
import { useHandleLogout } from "../../hooks/useHandleLogout";
import { handleLogoutNotification } from "../../helpers/handleLogoutNotification";
import { Link } from "react-router-dom";

interface NavbarMobileProps {
  handleMenuToggle: () => void;
}

export function NavbarMobile({ handleMenuToggle }: NavbarMobileProps) {
  const { user, handleLogout } = useHandleLogout();
  const [showLogoutMessage, setShowLogoutMessage] = useState(false);

  const handleLogoutClick = () => {
    handleLogoutNotification(handleLogout, setShowLogoutMessage);
  };

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
