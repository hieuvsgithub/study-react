import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo">Logo</div>
      <div className="nav">
        <ul>
          <li>
            <Link to="/home">Trang chu</Link>
          </li>
          <li>
            <Link to="/category">danh muc</Link>
          </li>
          <li>
            <Link to="/news">tin tuc</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
