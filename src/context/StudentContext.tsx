import { createContext, useState } from "react";

export type Student = {
  name: string;
  email: string;
};

type StudentContextType = {
  student: Student;
  setStudent: (student: Student) => void;
};

export const StudentContext =
  createContext<StudentContextType | null>(null);

export function StudentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [student, setStudent] = useState<Student>({
    name: "",
    email: "",
  });

  return (
    <StudentContext.Provider value={{ student, setStudent }}>
      {children}
    </StudentContext.Provider>
  );
}
