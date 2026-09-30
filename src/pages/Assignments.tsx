import { useState } from 'react';
import { getSubject } from '../data/subjects';
import {
  assignments,
  getStatusLabel,
  getStatusStyle,
  type AssignmentStatus,
} from '../data/assignments';

export default function Assignments() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [filter, setFilter] = useState<AssignmentStatus | 'all'>('all');

  const filtered = filter === 'all' ? assignments : assignments.filter(a => a.status === filter);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-primary-text">Assignments</h1>
        <p className="text-sm text-secondary-text mt-1">Track your assignment deadlines and progress</p>
      </div>

      {/* Filter */}
      <div className="flex gap-2">
        {(['all', 'due-soon', 'upcoming', 'completed'] as const).map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1.5 rounded-md text-sm font-medium border transition-colors ${
              filter === f
                ? 'bg-primary-blue text-white border-primary-blue'
                : 'bg-surface text-secondary-text border-border hover:bg-muted-surface'
            }`}
          >
            {f === 'all' ? 'All' : getStatusLabel(f)}
          </button>
        ))}
      </div>

      {/* Assignments list */}
      {filtered.length === 0 ? (
        <div className="bg-surface border border-border rounded-lg p-8 text-center">
          <p className="text-sm text-secondary-text">No assignments match this filter.</p>
        </div>
      ) : (
        <div className="space-y-2">
          {filtered.map(a => {
            const subject = getSubject(a.subjectId);
            const isExpanded = expandedId === a.id;

            return (
              <div key={a.id} className="bg-surface border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedId(isExpanded ? null : a.id)}
                  className="w-full px-4 py-3 flex items-center justify-between gap-4 text-left hover:bg-muted-surface/50 transition-colors"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-primary-text">{a.title}</p>
                    <p className="text-xs text-muted-text mt-0.5">
                      {subject?.name} · Due {a.dueDate}
                    </p>
                  </div>
                  <span className={`shrink-0 inline-flex px-2 py-0.5 rounded text-xs font-medium ${getStatusStyle(a.status)}`}>
                    {getStatusLabel(a.status)}
                  </span>
                </button>

                {isExpanded && (
                  <div className="px-4 pb-4 pt-1 border-t border-border bg-muted-surface/20">
                    <div className="text-sm space-y-3">
                      <div>
                        <p className="text-muted-text text-xs">Due date</p>
                        <p className="font-medium text-primary-text">{a.dueDateFull}</p>
                      </div>
                      <div>
                        <p className="text-muted-text text-xs">Subject</p>
                        <p className="font-medium text-primary-text">{subject?.name} ({subject?.code})</p>
                      </div>
                      <div>
                        <p className="text-muted-text text-xs">Description</p>
                        <p className="text-primary-text">{a.description}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
