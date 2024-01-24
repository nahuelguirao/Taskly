import { Header } from "./components/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import { Main } from "./routes/Main";
import { Login } from "./routes/Login";
import { AddTask } from "./routes/AddTask";
import { TaskStateProvider } from "./context/TaskStateContext";
import { EditTask } from "./routes/EditTask";
import { FormErrorProvider } from "./context/FormErrorContext";

export function App() {
  return (
    <>
      <TaskStateProvider>
        <FormErrorProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/addTask" element={<AddTask />} />
            <Route path="/task/:UUID" element={<EditTask />} />
            <Route path="/*" element={<Navigate to={"/"} />} />
          </Routes>
        </FormErrorProvider>
      </TaskStateProvider>
    </>
  );
}
