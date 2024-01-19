interface WaitingForTaskProps {
  navigateToAddTask: () => void;
}

export function WaitingForTask({ navigateToAddTask }: WaitingForTaskProps) {
  return (
    <main className="mainWaiting">
      <div className="waitingTaskContainer card">
        <h2 className="addNewTaskH2">
          Add a new
          <span className="spanOrange" onClick={navigateToAddTask}>
            task
          </span>
        </h2>
        <div className="loader"></div>
      </div>
    </main>
  );
}
