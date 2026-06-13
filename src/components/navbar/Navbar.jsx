import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "../../context/UserContext";
import useScroll from "../../hooks/useScroll";

export default function Navbar() {
  const { user, logout } = useContext(UserContext);
  const [scrolled, scrollY] = useScroll();

  const navLight =
    "sticky top-0 z-[1] py-[16px] border-b border-solid border-[#ddd] mb-[32px] bg-[rgb(160,217,181)]";
  const navDark =
    "sticky top-0 z-[1] py-[16px] border-b border-solid border-[#ddd] mb-[32px] bg-[rgb(81,231,96)]";

  return (
    <nav ref={scrolled} className={scrollY > 0 ? navDark : navLight}>
      <ul className="flex justify-center gap-16">
        <li>
          <Link
            className="text-black no-underline font-semibold hover:text-[#7073a5]"
            to={"/"}
          >
            Home
          </Link>
        </li>
        {(!user && (
          <li>
            <Link
              className="text-black no-underline font-semibold hover:text-[#7073a5]"
              to={"/register"}
            >
              Register
            </Link>
          </li>
        )) || (
          <>
            <li>
              <Link
                className="text-black no-underline font-semibold hover:text-[#7073a5]"
                to={"/posts"}
              >
                Posts
              </Link>
            </li>

            <li>
              <button
                className="text-black no-underline font-semibold hover:text-[#7073a5]"
                onClick={logout}
              >
                Logout
              </button>
            </li>
          </>
        )}
        <li>
          <Link
            className="text-black no-underline font-semibold hover:text-[#7073a5]"
            to={"/login"}
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
