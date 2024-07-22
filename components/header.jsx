const style = {
  display: "flex",
  alignItems: "center",
  position: "absolute",
  width: "100vw",
  height: "50px",
  left: "166px",
  top: "16px",
};

const Header = () => {
  return (
    <header style={style}>
      <div className="logo font-sans">Brainwave.io</div>
      <div>
        <ul className="menu font-sans">
          <li>Demos</li>
          <li>Pages</li>
          <li>Support</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <button className="button font-sans">GET started a project</button>
      </div>
    </header>
  );
};
export default Header;
