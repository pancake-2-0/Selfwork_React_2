import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav id="custom_navbar">
      <ul id="nav_list">
        <li className="nav_item">
          <Link className="nav_link" to={"/"}>
            Home
          </Link>
        </li>
        <li className="nav_item">
          <Link className="nav_link" to={"/posts"}>
            Posts
          </Link>
        </li>
      </ul>
    </nav>
  );
}
