import { Header } from "./components/Header";
import { Toaster } from "react-hot-toast";
import { Routes, Route, Navigate } from "react-router-dom";
import { Main } from "./routes/Main";
import { Login } from "./routes/Login";
import { SignIn } from "./routes/SignIn";
import { AddTask } from "./routes/AddTask";
import { TaskStateProvider } from "./context/TaskStateContext";
import { UtilitiesProvider } from "./context/UtilitiesContext";
import { EditTask } from "./routes/EditTask";

export function App() {
  return (
    <>
      <TaskStateProvider>
        <UtilitiesProvider>
          <Header />
          <Toaster
            toastOptions={{
              style: {
                textAlign: "center",
              },
            }}
          />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/singin" element={<SignIn />} />
            <Route path="/addTask" element={<AddTask />} />
            <Route path="/task/:UUID" element={<EditTask />} />
            <Route path="/*" element={<Navigate to={"/"} />} />
          </Routes>
        </UtilitiesProvider>
      </TaskStateProvider>
    </>
  );
}
