import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

interface MenuIconProps {
  handleMenuToggle: () => void;
  isMenuOpen: boolean;
}

export function MenuIcon({ handleMenuToggle, isMenuOpen }: MenuIconProps) {
  return (
    <>
      {isMenuOpen ? (
        <IoMdClose onClick={handleMenuToggle} className="menuIcon" />
      ) : (
        <IoMenuOutline onClick={handleMenuToggle} className="menuIcon" />
      )}
    </>
  );
}
