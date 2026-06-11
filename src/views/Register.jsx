export default function Register() {
  return (
    <>
      <h1>Register</h1>
      <form>
        <div>
          <label htmlFor="register-name">Nome</label>
          <input id="register-name" type="text" name="name" />
        </div>
        <div>
          <label htmlFor="register-email">Email</label>
          <input id="register-email" type="email" name="email" />
        </div>
        <div>
          <label htmlFor="register-password">Password</label>
          <input id="register-password" type="password" name="password" />
        </div>
        <button type="button">Register</button>
      </form>
    </>
  );
}
