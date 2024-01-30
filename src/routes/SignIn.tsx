import { useSignIn } from "../hooks/useSignIn";

export function SignIn() {
  const { signInUser } = useSignIn();

  return (
    <main className="mainAddTask">
      <form onSubmit={signInUser}>
        <h3>Sign in</h3>
        <div className="inputBox">
          <input
            placeholder="Username..."
            type="text"
            name="username"
            required
          />
          <span>Username: </span>
        </div>
        <div className="inputBox">
          <input placeholder="Email..." type="email" name="email" required />
          <span>Email: </span>
        </div>
        <div className="inputBox">
          <input
            placeholder="Password..."
            type="password"
            name="password1"
            required
          />
          <span>Password </span>
        </div>
        <div className="inputBox">
          <input
            placeholder="Password..."
            type="password"
            name="password2"
            required
          />
          <span>Repeat password </span>
        </div>
        <button className="addTaskButton loginButton">Sign in</button>
      </form>
    </main>
  );
}
