export interface Student {
  name: string;
  firstName: string;
  course: string;
  semester: number;
  section: string;
  rollNo: string;
  email: string;
}

export const student: Student = {
  name: 'Aarav Sharma',
  firstName: 'Aarav',
  course: 'B.Tech Computer Science',
  semester: 3,
  section: 'A',
  rollNo: '23CSE041',
  email: 'aarav.sharma@university.edu',
};
