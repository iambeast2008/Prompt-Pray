import { useState } from 'react';
import { getSubject } from '../data/subjects';
import { weekdays, getClassesByDay } from '../data/timetable';

export default function Timetable() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const todayName = days[new Date().getDay()];
  const defaultDay = weekdays.includes(todayName) ? todayName : 'Monday';
  const [selectedDay, setSelectedDay] = useState(defaultDay);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const classes = getClassesByDay(selectedDay);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-primary-text">Timetable</h1>
        <p className="text-sm text-secondary-text mt-1">Your weekly class schedule</p>
      </div>

      {/* Day selector */}
      <div className="flex gap-1 bg-surface border border-border rounded-lg p-1">
        {weekdays.map(day => (
          <button
            key={day}
            onClick={() => { setSelectedDay(day); setExpandedId(null); }}
            className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              selectedDay === day
                ? 'bg-primary-blue text-white'
                : 'text-secondary-text hover:bg-muted-surface'
            }`}
          >
            <span className="hidden sm:inline">{day}</span>
            <span className="sm:hidden">{day.slice(0, 3)}</span>
          </button>
        ))}
      </div>

      {/* Classes */}
      {classes.length === 0 ? (
        <div className="bg-surface border border-border rounded-lg p-8 text-center">
          <p className="text-sm text-secondary-text">No classes scheduled for {selectedDay}.</p>
        </div>
      ) : (
        <div className="space-y-2">
          {classes.map(cls => {
            const subject = getSubject(cls.subjectId);
            const isExpanded = expandedId === cls.id;

            return (
              <div key={cls.id} className="bg-surface border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedId(isExpanded ? null : cls.id)}
                  className="w-full px-4 py-3 flex items-center justify-between gap-4 text-left hover:bg-muted-surface/50 transition-colors"
                >
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-primary-text">{subject?.name}</p>
                    <p className="text-xs text-muted-text mt-0.5">{cls.topic}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sm text-primary-text">{cls.time} – {cls.endTime}</p>
                    <p className="text-xs text-muted-text">{cls.room}</p>
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-4 pb-4 pt-1 border-t border-border bg-muted-surface/20">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-text text-xs">Professor</p>
                        <p className="font-medium text-primary-text">{cls.professor}</p>
                      </div>
                      <div>
                        <p className="text-muted-text text-xs">Room</p>
                        <p className="font-medium text-primary-text">{cls.room}</p>
                      </div>
                      <div>
                        <p className="text-muted-text text-xs">Subject code</p>
                        <p className="font-medium text-primary-text">{subject?.code}</p>
                      </div>
                      <div className="col-span-2 sm:col-span-3">
                        <p className="text-muted-text text-xs">Topic</p>
                        <p className="font-medium text-primary-text">{cls.topic}</p>
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
