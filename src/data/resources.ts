export interface Resource {
  id: string;
  title: string;
  type: 'lecture' | 'notes' | 'practice';
  duration: string;
  url: string;
  subjectId: string;
  topicId: string;
}

export const resources: Resource[] = [
  // Mathematics - Graph Theory
  {
    id: 'r1',
    title: 'Graph Theory — Introduction and Basics',
    type: 'lecture',
    duration: '42 min',
    url: 'https://www.youtube.com/watch?v=LFKZLXVO-Dg',
    subjectId: 'math',
    topicId: 'graph-theory',
  },
  {
    id: 'r2',
    title: 'Graph Theory — Lecture Notes',
    type: 'notes',
    duration: '10 min read',
    url: 'https://www.youtube.com/watch?v=LFKZLXVO-Dg',
    subjectId: 'math',
    topicId: 'graph-theory',
  },
  {
    id: 'r3',
    title: 'Graph Theory — Practice Problems',
    type: 'practice',
    duration: '20 min',
    url: 'https://www.youtube.com/watch?v=LFKZLXVO-Dg',
    subjectId: 'math',
    topicId: 'graph-theory',
  },
  // Mathematics - Trees
  {
    id: 'r4',
    title: 'Trees in Discrete Mathematics',
    type: 'lecture',
    duration: '38 min',
    url: 'https://www.youtube.com/watch?v=oSWTXtMglKE',
    subjectId: 'math',
    topicId: 'trees',
  },
  {
    id: 'r5',
    title: 'Trees — Lecture Notes',
    type: 'notes',
    duration: '8 min read',
    url: 'https://www.youtube.com/watch?v=oSWTXtMglKE',
    subjectId: 'math',
    topicId: 'trees',
  },
  // Operating Systems - Virtual Memory
  {
    id: 'r6',
    title: 'Virtual Memory Explained',
    type: 'lecture',
    duration: '35 min',
    url: 'https://www.youtube.com/watch?v=qlH4-oHnBb8',
    subjectId: 'os',
    topicId: 'virtual-memory',
  },
  {
    id: 'r7',
    title: 'Virtual Memory — Notes',
    type: 'notes',
    duration: '12 min read',
    url: 'https://www.youtube.com/watch?v=qlH4-oHnBb8',
    subjectId: 'os',
    topicId: 'virtual-memory',
  },
  {
    id: 'r8',
    title: 'Virtual Memory — Practice Questions',
    type: 'practice',
    duration: '15 min',
    url: 'https://www.youtube.com/watch?v=qlH4-oHnBb8',
    subjectId: 'os',
    topicId: 'virtual-memory',
  },
  // Operating Systems - Page Replacement
  {
    id: 'r9',
    title: 'Page Replacement Algorithms',
    type: 'lecture',
    duration: '40 min',
    url: 'https://www.youtube.com/watch?v=16kaPQtYo28',
    subjectId: 'os',
    topicId: 'page-replacement',
  },
  {
    id: 'r10',
    title: 'Page Replacement — Notes',
    type: 'notes',
    duration: '10 min read',
    url: 'https://www.youtube.com/watch?v=16kaPQtYo28',
    subjectId: 'os',
    topicId: 'page-replacement',
  },
  // Mathematics - Partial Differential Equations
  {
    id: 'r11',
    title: 'Partial Differential Equations — Introduction',
    type: 'lecture',
    duration: '45 min',
    url: 'https://www.youtube.com/watch?v=ly4S0oi3Yz8',
    subjectId: 'math',
    topicId: 'pde',
  },
  {
    id: 'r12',
    title: 'PDE — Practice Problems',
    type: 'practice',
    duration: '25 min',
    url: 'https://www.youtube.com/watch?v=ly4S0oi3Yz8',
    subjectId: 'math',
    topicId: 'pde',
  },
];

export function getResourcesByTopic(topicId: string): Resource[] {
  return resources.filter(r => r.topicId === topicId);
}

export function getResourcesBySubject(subjectId: string): Resource[] {
  return resources.filter(r => r.subjectId === subjectId);
}
