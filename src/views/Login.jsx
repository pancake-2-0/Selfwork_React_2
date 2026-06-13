import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const showdata = (data) => {
    console.log(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(showdata)}
        className="flex justify-center items-center h-screen"
      >
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Login</legend>

          <label className="label" htmlFor="login-email">
            Email
          </label>
          <input
            id="login-email"
            type="email"
            className="input"
            placeholder="Email"
            {...register("email", { required: true, maxLength: 50 })}
          />
          {errors.email && (
            <span className="text-error">
              Questo campo è obbligatorio e può avere al massimo 50 caratteri
            </span>
          )}

          <label className="label" htmlFor="login-password">
            Password
          </label>
          <input
            id="login-password"
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
            Login
          </button>
        </fieldset>
      </form>
    </>
  );
}
