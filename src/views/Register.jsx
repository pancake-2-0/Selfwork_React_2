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
      <h1>Register</h1>
      <form onSubmit={handlesubmit}>
        <div>
          <label htmlFor="register-name">Nome</label>
          <input
            id="register-name"
            type="text"
            onChange={handleChange}
            name="name"
          />
        </div>
        <div>
          <label htmlFor="register-email">Email</label>
          <input
            id="register-email"
            type="email"
            onChange={handleChange}
            name="email"
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </>
  );
}
