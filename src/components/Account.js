export default function Account() {
  return (
    <div className="columns">
      <form id="LoginForm" className="userForm">
        <p className="title">Secure Sign In</p>
        <p className="desription">For current customers</p>

        <div className="error">Invalid email address or password.</div>

        <label>
          <input
            type="email"
            placeholder="Email Address"
            data-name="email"
            value="ivan@gmail.com"
            required
          ></input>
        </label>

        <label>
          <input
            type="password"
            placeholder="Password"
            data-name="password"
            value="123"
            required
          ></input>
        </label>

        <button className="btn">Sign in</button>
      </form>

      <form id="RegistrationForm" className="userForm">
        <p className="title">Quick Registration</p>
        <p className="desription">For new customers</p>

        <div className="error">Invalid email address or password.</div>

        <label>
          <input
            type="text"
            placeholder="Full name"
            data-name="name"
            value="Ivan"
            required
          ></input>
        </label>

        <label>
          <input
            type="email"
            placeholder="Email Address"
            data-name="email"
            value="ivan@gmail.com"
            required
          ></input>
        </label>

        <label>
          <input
            type="password"
            placeholder="Password"
            data-name="password"
            value="123"
            required
          ></input>
        </label>

        <label>
          <input
            type="password"
            placeholder="Verify Password"
            data-name="passwordVerify"
            value="123"
            required
          ></input>
        </label>

        <button className="btn">Create Account</button>
      </form>
    </div>
  );
}
