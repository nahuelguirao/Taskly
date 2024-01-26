import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

interface WaitingForTaskProps {
  navigateToAddTask: () => void;
}

export function WaitingForTask({ navigateToAddTask }: WaitingForTaskProps) {
  const { user, welcomeMessage } = useContext(UserContext);

  return (
    <main className="mainWaiting">
      <div className="waitingTaskContainer card">
        <h2 className="addNewTaskH2">
          {user && `Hi ${user.username}!`} Add a new
          <span className="spanOrange" onClick={navigateToAddTask}>
            task
          </span>
        </h2>
        <div className="loader"></div>
      </div>

      {welcomeMessage && (
        <div className="logoutMessage">
          <p>
            Welcome{" "}
            {user && (
              <span className="welcomeMessageSpan">{user.username}!</span>
            )}
          </p>
        </div>
      )}
    </main>
  );
}
