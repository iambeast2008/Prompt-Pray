export interface Subject {
  id: string;
  name: string;
  code: string;
  professor: string;
  room: string;
}

export const subjects: Subject[] = [
  { id: 'os', name: 'Operating Systems', code: 'CS301', professor: 'Dr. Meera Iyer', room: 'LH-201' },
  { id: 'math', name: 'Mathematics', code: 'MA201', professor: 'Dr. Ramesh Gupta', room: 'LH-105' },
  { id: 'cn', name: 'Computer Networks', code: 'CS302', professor: 'Dr. Anjali Deshmukh', room: 'LH-301' },
  { id: 'dbms', name: 'Database Systems', code: 'CS303', professor: 'Dr. Suresh Nair', room: 'LH-202' },
  { id: 'se', name: 'Software Engineering', code: 'CS304', professor: 'Dr. Priya Kulkarni', room: 'LH-103' },
];

export function getSubject(id: string): Subject | undefined {
  return subjects.find(s => s.id === id);
}
