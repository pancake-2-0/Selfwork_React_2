import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
export default function Register() {
  // const { register } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const showdata = (data) => {
    console.log(data);
  };

  // const [userName, setUserName] = useState("");
  // const [userEmail, setUserEmail] = useState("");

  // const navigate = useNavigate();

  // const handleChange = (e) => {
  //   if (e.target.name === "name") {
  //     setUserName(e.target.value);
  //   } else if (e.target.name === "email") {
  //     setUserEmail(e.target.value);
  //   }
  // };

  // const handlesubmit = (e) => {
  //   e.preventDefault();
  //   if (userName && userEmail) {
  //     register({ name: userName, email: userEmail });
  //   }
  //   navigate("/");
  // };

  return (
    <>
      <form
        onSubmit={handleSubmit(showdata)}
        className="flex justify-center items-center h-screen"
      >
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Register</legend>

          <label className="label" htmlFor="register-name">
            Username
          </label>
          <input
            id="register-name"
            type="text"
            className="input"
            placeholder="Username"
            // onChange={handleChange}
            name="name"
            {...register("username", { required: true, maxLength: 50 })}
          />
          {errors.username && (
            <span className="text-error">
              Questo campo è obbligatorio e può avere al massimo 50 caratteri
            </span>
          )}

          <label className="label" htmlFor="register-email">
            Email
          </label>
          <input
            id="register-email"
            type="email"
            className="input"
            placeholder="Email"
            // onChange={handleChange}
            name="email"
            {...register("email", { required: true, maxLength: 50 })}
          />
          {errors.email && (
            <span className="text-error">
              Questo campo è obbligatorio e può avere al massimo 50 caratteri
            </span>
          )}

          <label className="label" htmlFor="register-password">
            Password
          </label>
          <input
            id="register-password"
            type="password"
            className="input"
            placeholder="Password"
            {...register("password", { required: true, maxLength: 50 })}
          />
          {errors.password && (
            <span className="text-error">
              Questo campo è obbligatorio e può avere al massimo 50 caratteri
            </span>
          )}

          <button type="submit" className="btn btn-neutral mt-4">
            Register
          </button>
        </fieldset>
      </form>
    </>
  );
}
