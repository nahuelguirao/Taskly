import { useNavbarToggle } from "../hooks/useNavbarToggle";
import { MenuIcon } from "../components/UI/MenuIcon";
import { NavbarDesktop } from "./Navbars/NavbarDesktop";
import { NavbarMobile } from "./Navbars/NavbarMobile";
import { Link } from "react-router-dom";
import "../styles/header.css";

export function Header() {
  //Menu controls and state
  const { isMenuOpen, handleMenuToggle } = useNavbarToggle();

  return (
    <header>
      <Link to={"/"}>
        <h2 className="h2Header">
          <span className="importantWord">T</span>askly!
        </h2>
      </Link>
      <MenuIcon handleMenuToggle={handleMenuToggle} isMenuOpen={isMenuOpen} />

      {/* If the device is < 800px */}
      {isMenuOpen && <NavbarMobile handleMenuToggle={handleMenuToggle} />}

      {/* If the device is > 800px */}
      <NavbarDesktop />
    </header>
  );
}
