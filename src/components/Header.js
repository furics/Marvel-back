import { Link } from "react-router-dom";

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
        <Link to="/" className="menu">
          personnages
        </Link>
        <Link to="/comics" className="menu">
          comics
        </Link>
        <Link to="/favoris" className="menu">
          favoris
        </Link>
      </div>
    </div>
  );
};

export default Header;
