import { useEffect, useState } from "react";
import { MenuToggle } from "../types/generalTypes";

export function useNavbarToggle(): MenuToggle {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  //Control close/open mobile menu
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //Checks if the window width is more than 800px at the first time the site is loaded
  useEffect(() => {
    if (window.innerWidth > 800) {
      setIsMenuOpen(true);
    }
  }, []);

  return { isMenuOpen, handleMenuToggle, setIsMenuOpen };
}
