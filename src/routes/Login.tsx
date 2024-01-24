export function Login() {
  return (
    <main className="mainAddTask">
      <form>
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
