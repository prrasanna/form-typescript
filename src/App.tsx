import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StudentProvider } from "./context/StudentContext";
import StudentForm from "./pages/StudentForm";
import StudentDetails from "./pages/StudentDetails";
import './App.css'

function App() {
  return (
    <StudentProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StudentForm />} />
          <Route path="/details" element={<StudentDetails />} />
        </Routes>
      </BrowserRouter>
    </StudentProvider>
  );
}

export default App;