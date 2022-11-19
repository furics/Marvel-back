const Header = () => {
  return (
    <div className="header">
      <div className="log">
        <button>signup</button>
        <button>login</button>
      </div>
      <img
        src="https://elgeneracionalpost.com/wp-content/uploads/2019/02/maxresdefault.jpg"
        alt="logo"
      />
      <div className="menu-container">
        <p className="menu">personnages</p>
        <p className="menu">comics</p>
        <p className="menu">favoris</p>
      </div>
    </div>
  );
};

export default Header;
