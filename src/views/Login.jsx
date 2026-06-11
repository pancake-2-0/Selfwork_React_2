export default function Login() {
  return (
    <>
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="login-email">Email</label>
          <input id="login-email" type="email" name="email" />
        </div>
        <div>
          <label htmlFor="login-password">Password</label>
          <input id="login-password" type="password" name="password" />
        </div>
        <button type="button">Login</button>
      </form>
    </>
  );
}
