import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router";
export default function Register() {
  const { register } = useContext(UserContext);

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setUserName(e.target.value);
    } else if (e.target.name === "email") {
      setUserEmail(e.target.value);
    }
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    if (userName && userEmail) {
      register({ name: userName, email: userEmail });
    }
    navigate("/");
  };

  return (
    <>
      <form
        onSubmit={handlesubmit}
        className="flex justify-center items-center h-screen"
      >
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Register</legend>

          <label className="label" htmlFor="register-name">
            Name
          </label>
          <input
            id="register-name"
            type="text"
            className="input"
            placeholder="Name"
            onChange={handleChange}
            name="name"
          />

          <label className="label" htmlFor="register-email">
            Email
          </label>
          <input
            id="register-email"
            type="email"
            className="input"
            placeholder="Email"
            onChange={handleChange}
            name="email"
          />

          <button type="submit" className="btn btn-neutral mt-4">
            Register
          </button>
        </fieldset>
      </form>
    </>
  );
}
