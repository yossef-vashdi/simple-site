import { Link } from "react-router-dom";

function NavbarLinks() {
  return (
    <ul>
      <li>
        <Link to="/">about</Link>
      </li>
      <li>
        <Link to="/main">main</Link>
      </li>
    </ul>
  );
}

export default NavbarLinks;
