
import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

function StudentDetails() {
  const context = useContext(StudentContext);

  if (!context) return null;

  const { student } = context;

  return (
    <div>
      <h2>Student Details</h2>

      <p>Name: {student.name}</p>
      <p>Email: {student.email}</p>
    </div>
  );
}

export default StudentDetails;
