import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo">Logo</div>
      <div className="nav">
        <ul>
          <li>
            <NavLink to="/home">Trang chu</NavLink>
          </li>
          <li>
            <NavLink to="/category">danh muc</NavLink>
          </li>
          <li>
            <NavLink to="/news">tin tuc</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
