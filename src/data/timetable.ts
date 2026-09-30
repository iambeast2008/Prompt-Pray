export interface ClassSession {
  id: string;
  subjectId: string;
  day: string; // 'Monday' | 'Tuesday' | ...
  time: string;
  endTime: string;
  room: string;
  professor: string;
  topic: string;
  lectureUrl?: string;
  notesUrl?: string;
}

export const timetable: ClassSession[] = [
  // Monday
  { id: 'mon-1', subjectId: 'os', day: 'Monday', time: '9:00 AM', endTime: '10:00 AM', room: 'LH-201', professor: 'Dr. Meera Iyer', topic: 'Process Scheduling Algorithms' },
  { id: 'mon-2', subjectId: 'math', day: 'Monday', time: '10:00 AM', endTime: '11:00 AM', room: 'LH-105', professor: 'Dr. Ramesh Gupta', topic: 'Eigenvalues and Eigenvectors' },
  { id: 'mon-3', subjectId: 'cn', day: 'Monday', time: '11:30 AM', endTime: '12:30 PM', room: 'LH-301', professor: 'Dr. Anjali Deshmukh', topic: 'TCP/IP Protocol Suite' },
  { id: 'mon-4', subjectId: 'dbms', day: 'Monday', time: '2:00 PM', endTime: '3:00 PM', room: 'LH-202', professor: 'Dr. Suresh Nair', topic: 'Normalization (3NF, BCNF)' },

  // Tuesday
  { id: 'tue-1', subjectId: 'se', day: 'Tuesday', time: '9:00 AM', endTime: '10:00 AM', room: 'LH-103', professor: 'Dr. Priya Kulkarni', topic: 'Agile Methodology' },
  { id: 'tue-2', subjectId: 'os', day: 'Tuesday', time: '10:00 AM', endTime: '11:00 AM', room: 'LH-201', professor: 'Dr. Meera Iyer', topic: 'Memory Management' },
  { id: 'tue-3', subjectId: 'math', day: 'Tuesday', time: '11:30 AM', endTime: '12:30 PM', room: 'LH-105', professor: 'Dr. Ramesh Gupta', topic: 'Differential Equations' },
  { id: 'tue-4', subjectId: 'cn', day: 'Tuesday', time: '2:00 PM', endTime: '3:00 PM', room: 'LH-301', professor: 'Dr. Anjali Deshmukh', topic: 'Network Layer Routing' },

  // Wednesday (today in the demo = Sep 30)
  { id: 'wed-1', subjectId: 'math', day: 'Wednesday', time: '9:00 AM', endTime: '10:00 AM', room: 'LH-105', professor: 'Dr. Ramesh Gupta', topic: 'Laplace Transforms' },
  { id: 'wed-2', subjectId: 'dbms', day: 'Wednesday', time: '10:00 AM', endTime: '11:00 AM', room: 'LH-202', professor: 'Dr. Suresh Nair', topic: 'SQL Joins and Subqueries' },
  { id: 'wed-3', subjectId: 'se', day: 'Wednesday', time: '11:30 AM', endTime: '12:30 PM', room: 'LH-103', professor: 'Dr. Priya Kulkarni', topic: 'Software Testing Strategies' },
  { id: 'wed-4', subjectId: 'os', day: 'Wednesday', time: '2:00 PM', endTime: '3:00 PM', room: 'LH-201', professor: 'Dr. Meera Iyer', topic: 'Deadlock Detection' },

  // Thursday
  { id: 'thu-1', subjectId: 'cn', day: 'Thursday', time: '9:00 AM', endTime: '10:00 AM', room: 'LH-301', professor: 'Dr. Anjali Deshmukh', topic: 'Transport Layer Protocols' },
  { id: 'thu-2', subjectId: 'se', day: 'Thursday', time: '10:00 AM', endTime: '11:00 AM', room: 'LH-103', professor: 'Dr. Priya Kulkarni', topic: 'UML Diagrams' },
  { id: 'thu-3', subjectId: 'dbms', day: 'Thursday', time: '11:30 AM', endTime: '12:30 PM', room: 'LH-202', professor: 'Dr. Suresh Nair', topic: 'Transaction Management' },
  { id: 'thu-4', subjectId: 'math', day: 'Thursday', time: '2:00 PM', endTime: '3:00 PM', room: 'LH-105', professor: 'Dr. Ramesh Gupta', topic: 'Fourier Series' },

  // Friday
  { id: 'fri-1', subjectId: 'os', day: 'Friday', time: '9:00 AM', endTime: '10:00 AM', room: 'LH-201', professor: 'Dr. Meera Iyer', topic: 'File Systems' },
  { id: 'fri-2', subjectId: 'dbms', day: 'Friday', time: '10:00 AM', endTime: '11:00 AM', room: 'LH-202', professor: 'Dr. Suresh Nair', topic: 'Indexing and Hashing' },
  { id: 'fri-3', subjectId: 'cn', day: 'Friday', time: '11:30 AM', endTime: '12:30 PM', room: 'LH-301', professor: 'Dr. Anjali Deshmukh', topic: 'Application Layer Protocols' },
  { id: 'fri-4', subjectId: 'se', day: 'Friday', time: '2:00 PM', endTime: '3:00 PM', room: 'LH-103', professor: 'Dr. Priya Kulkarni', topic: 'Design Patterns' },
];

export function getTodayClasses(): ClassSession[] {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = days[new Date().getDay()];
  return timetable.filter(c => c.day === today);
}

export function getClassesByDay(day: string): ClassSession[] {
  return timetable.filter(c => c.day === day);
}

export const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
