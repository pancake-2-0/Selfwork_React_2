import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "../context/UserContext";

export default function Navbar() {
  const { user, logout } = useContext(UserContext);

  return (
    <nav id="custom_navbar">
      <ul id="nav_list">
        <li className="nav_item">
          <Link className="nav_link" to={"/"}>
            Home
          </Link>
        </li>
        {(!user && (
          <li className="nav_item">
            <Link className="nav_link" to={"/register"}>
              Register
            </Link>
          </li>
        )) || (
          <>
            <li className="nav_item">
              <Link className="nav_link" to={"/posts"}>
                Posts
              </Link>
            </li>

            <li className="nav_item">
              <button className="nav_link" onClick={logout}>
                Logout
              </button>
            </li>
          </>
        )}
        <li className="nav_item">
          <Link className="nav_link" to={"/login"}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
