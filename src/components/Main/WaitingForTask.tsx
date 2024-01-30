import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

interface WaitingForTaskProps {
  navigateTo: (route: string) => void;
}

export function WaitingForTask({ navigateTo }: WaitingForTaskProps) {
  //Gets the user data
  const userContext = useContext(UserContext);
  const user = userContext?.user;

  return (
    <main className="mainWaiting">
      <div className="waitingTaskContainer card">
        <h2 className="addNewTaskH2">
          {user && `Hi ${user.username}!`} Add a new
          <span className="spanOrange" onClick={() => navigateTo("/addTask")}>
            task
          </span>
        </h2>
        <div className="loader"></div>
      </div>
    </main>
  );
}
