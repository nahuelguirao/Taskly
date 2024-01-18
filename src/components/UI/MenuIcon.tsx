interface MenuIconProps {
  handleMenuToggle: () => void;
}

export function MenuIcon({ handleMenuToggle }: MenuIconProps) {
  return (
    <>
      <input className="check-icon" id="check-icon" type="checkbox" />
      <label
        className="icon-menu"
        htmlFor="check-icon"
        onClick={handleMenuToggle}
      >
        <div className="bar bar--1"></div>
        <div className="bar bar--2"></div>
        <div className="bar bar--3"></div>
      </label>
    </>
  );
}
