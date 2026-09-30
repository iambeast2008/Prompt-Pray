export type AssignmentStatus = 'due-soon' | 'upcoming' | 'completed';

export interface Assignment {
  id: string;
  title: string;
  subjectId: string;
  dueDate: string;
  dueDateFull: string;
  status: AssignmentStatus;
  description: string;
}

export const assignments: Assignment[] = [
  {
    id: 'a1',
    title: 'Graph Theory Problem Set',
    subjectId: 'math',
    dueDate: '2 Oct',
    dueDateFull: 'Thursday, 2 October 2025',
    status: 'due-soon',
    description: 'Solve problems 1–12 from Chapter 8: Graph Theory. Include proofs for theorems on planar graphs and Euler circuits.',
  },
  {
    id: 'a2',
    title: 'OS Process Scheduling Report',
    subjectId: 'os',
    dueDate: '7 Oct',
    dueDateFull: 'Tuesday, 7 October 2025',
    status: 'upcoming',
    description: 'Write a comparative analysis of FCFS, SJF, and Round Robin scheduling algorithms with examples.',
  },
  {
    id: 'a3',
    title: 'ER Diagram for Library System',
    subjectId: 'dbms',
    dueDate: '25 Sep',
    dueDateFull: 'Thursday, 25 September 2025',
    status: 'completed',
    description: 'Design an Entity-Relationship diagram for a university library management system with at least 5 entities.',
  },
];

export function getStatusLabel(status: AssignmentStatus): string {
  switch (status) {
    case 'due-soon': return 'Due soon';
    case 'upcoming': return 'Upcoming';
    case 'completed': return 'Completed';
  }
}

export function getStatusStyle(status: AssignmentStatus): string {
  switch (status) {
    case 'due-soon': return 'bg-red-50 text-danger-red dark:bg-red-900/20';
    case 'upcoming': return 'bg-blue-50 text-primary-blue dark:bg-blue-900/20';
    case 'completed': return 'bg-green-50 text-success-green dark:bg-green-900/20';
  }
}
