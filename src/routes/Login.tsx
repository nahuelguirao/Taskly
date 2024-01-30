import { useLogin } from "../hooks/useLogIn";

export function Login() {
  const { handleLoginIn } = useLogin();

  return (
    <main className="mainAddTask">
      <form onSubmit={handleLoginIn}>
        <h3>Login</h3>
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
          <input
            placeholder="Password..."
            type="password"
            name="password"
            required
          />
          <span>Password </span>
        </div>
        <button className="addTaskButton loginButton">Login</button>
      </form>
    </main>
  );
}
