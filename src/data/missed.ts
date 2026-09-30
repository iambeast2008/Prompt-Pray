export interface MissedTopic {
  id: string;
  name: string;
  topicId: string;
}

export interface MissedClass {
  id: string;
  subjectId: string;
  date: string;
  time: string;
  topics: MissedTopic[];
}

export const missedClasses: MissedClass[] = [
  {
    id: 'mc1',
    subjectId: 'math',
    date: '24 September',
    time: '11:00 AM',
    topics: [
      { id: 'mt1', name: 'Graph Theory', topicId: 'graph-theory' },
      { id: 'mt2', name: 'Trees', topicId: 'trees' },
    ],
  },
  {
    id: 'mc2',
    subjectId: 'os',
    date: '22 September',
    time: '9:00 AM',
    topics: [
      { id: 'mt3', name: 'Virtual Memory', topicId: 'virtual-memory' },
      { id: 'mt4', name: 'Page Replacement Algorithms', topicId: 'page-replacement' },
    ],
  },
  {
    id: 'mc3',
    subjectId: 'math',
    date: '18 September',
    time: '11:00 AM',
    topics: [
      { id: 'mt5', name: 'Partial Differential Equations', topicId: 'pde' },
    ],
  },
];
