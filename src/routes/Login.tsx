import { useContext, useEffect } from "react";
import { useLogin } from "../hooks/useLogIn";
import { UserContext } from "../context/UserContext";

export function Login() {
  const { handleLoginIn, error } = useLogin();

  const { user } = useContext(UserContext);
  useEffect(() => {
    console.log(user);
  }, [user]);

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
        {error && <p className="errorParagraph">{error}</p>}
      </form>
    </main>
  );
}
