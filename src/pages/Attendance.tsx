import { useState } from 'react';
import { getSubject } from '../data/subjects';
import {
  attendanceRecords,
  getAttendancePercentage,
  getOverallAttendance,
  getAttendanceStatus,
  getStatusLabel,
  getStatusBgColor,
  getStatusColor,
  classesNeededForTarget,
} from '../data/attendance';

export default function Attendance() {
  const overall = getOverallAttendance();
  const overallStatus = getAttendanceStatus(overall.percentage);
  const [simulateClasses, setSimulateClasses] = useState(3);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  const sortedRecords = [...attendanceRecords].sort((a, b) => {
    return getAttendancePercentage(a) - getAttendancePercentage(b);
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-primary-text">Attendance</h1>
        <p className="text-sm text-secondary-text mt-1">Track your attendance across all subjects</p>
      </div>

      {/* Overall Card */}
      <div className="bg-surface border border-border rounded-lg p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-secondary-text">Overall attendance</p>
            <p className="text-4xl font-bold text-primary-text mt-1">
              {overall.percentage.toFixed(1)}%
            </p>
            <p className="text-sm text-muted-text mt-1">
              {overall.attended} of {overall.total} classes attended
            </p>
          </div>
          <span className={`inline-flex px-3 py-1 rounded-md text-xs font-medium ${getStatusBgColor(overallStatus)}`}>
            {getStatusLabel(overallStatus)}
          </span>
        </div>
      </div>

      {/* Subject Attendance */}
      <section>
        <h2 className="text-lg font-semibold text-primary-text mb-4">Subject attendance</h2>
        <div className="space-y-3">
          {sortedRecords.map(record => {
            const subject = getSubject(record.subjectId);
            if (!subject) return null;
            const pct = getAttendancePercentage(record);
            const status = getAttendanceStatus(pct);
            const isSelected = selectedSubject === record.subjectId;
            const needed75 = classesNeededForTarget(record, 75);
            const needed85 = classesNeededForTarget(record, 85);

            return (
              <div key={record.subjectId}>
                <button
                  onClick={() => setSelectedSubject(isSelected ? null : record.subjectId)}
                  className="w-full bg-surface border border-border rounded-lg p-4 text-left hover:bg-muted-surface/50 transition-colors"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-3">
                        <p className="text-sm font-medium text-primary-text">{subject.name}</p>
                        <span className={`inline-flex px-2 py-0.5 rounded text-xs font-medium ${getStatusBgColor(status)}`}>
                          {getStatusLabel(status)}
                        </span>
                      </div>
                      <p className="text-xs text-muted-text mt-1">
                        {record.attended} of {record.total} classes attended · {subject.professor}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className={`text-xl font-bold ${getStatusColor(status)}`}>
                        {pct.toFixed(1)}%
                      </p>
                    </div>
                  </div>
                  {/* Progress bar */}
                  <div className="mt-3 h-1.5 bg-muted-surface rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        status === 'safe' ? 'bg-success-green' : status === 'warning' ? 'bg-warning-amber' : 'bg-danger-red'
                      }`}
                      style={{ width: `${Math.min(pct, 100)}%` }}
                    />
                  </div>
                </button>

                {/* Expanded detail */}
                {isSelected && (
                  <div className="mt-1 ml-4 mr-4 border border-border border-t-0 rounded-b-lg bg-muted-surface/30 p-4 space-y-3">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-text">Professor</p>
                        <p className="font-medium text-primary-text">{subject.professor}</p>
                      </div>
                      <div>
                        <p className="text-muted-text">Room</p>
                        <p className="font-medium text-primary-text">{subject.room}</p>
                      </div>
                      <div>
                        <p className="text-muted-text">Subject code</p>
                        <p className="font-medium text-primary-text">{subject.code}</p>
                      </div>
                      <div>
                        <p className="text-muted-text">Classes missed</p>
                        <p className="font-medium text-primary-text">{record.total - record.attended}</p>
                      </div>
                    </div>
                    {(needed75 !== null && needed75 > 0) && (
                      <p className="text-xs text-danger-red">
                        Attend {needed75} more consecutive {needed75 === 1 ? 'class' : 'classes'} to reach 75%
                      </p>
                    )}
                    {(needed85 !== null && needed85 > 0) && (
                      <p className="text-xs text-warning-amber">
                        Attend {needed85} more consecutive {needed85 === 1 ? 'class' : 'classes'} to reach 85%
                      </p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Attendance Simulator */}
      <section>
        <h2 className="text-lg font-semibold text-primary-text mb-4">Attendance outlook</h2>
        <div className="bg-surface border border-border rounded-lg p-6">
          <p className="text-sm text-secondary-text mb-4">
            See how attending or missing upcoming classes would affect your attendance.
          </p>

          <div className="mb-6">
            <label className="text-sm font-medium text-primary-text block mb-2">
              Number of upcoming classes per subject
            </label>
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 5].map(n => (
                <button
                  key={n}
                  onClick={() => setSimulateClasses(n)}
                  className={`px-4 py-2 rounded-md text-sm font-medium border transition-colors ${
                    simulateClasses === n
                      ? 'bg-primary-blue text-white border-primary-blue'
                      : 'bg-surface text-secondary-text border-border hover:bg-muted-surface'
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {/* If I attend */}
            <div className="border border-green-200 bg-green-50/50 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-success-green mb-3">If I attend all {simulateClasses} classes</h3>
              <div className="space-y-2">
                {attendanceRecords.map(record => {
                  const subject = getSubject(record.subjectId);
                  if (!subject) return null;
                  const newPct = ((record.attended + simulateClasses) / (record.total + simulateClasses)) * 100;
                  const newStatus = getAttendanceStatus(newPct);
                  return (
                    <div key={record.subjectId} className="flex items-center justify-between text-sm">
                      <span className="text-primary-text">{subject.name}</span>
                      <span className={`font-semibold ${getStatusColor(newStatus)}`}>
                        {newPct.toFixed(1)}%
                      </span>
                    </div>
                  );
                })}
                <div className="pt-2 mt-2 border-t border-green-200 flex items-center justify-between text-sm font-semibold">
                  <span className="text-primary-text">Overall</span>
                  <span className={getStatusColor(getAttendanceStatus(
                    ((overall.attended + simulateClasses * attendanceRecords.length) / (overall.total + simulateClasses * attendanceRecords.length)) * 100
                  ))}>
                    {(((overall.attended + simulateClasses * attendanceRecords.length) / (overall.total + simulateClasses * attendanceRecords.length)) * 100).toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>

            {/* If I miss */}
            <div className="border border-red-200 bg-red-50/50 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-danger-red mb-3">If I miss all {simulateClasses} classes</h3>
              <div className="space-y-2">
                {attendanceRecords.map(record => {
                  const subject = getSubject(record.subjectId);
                  if (!subject) return null;
                  const newPct = (record.attended / (record.total + simulateClasses)) * 100;
                  const newStatus = getAttendanceStatus(newPct);
                  return (
                    <div key={record.subjectId} className="flex items-center justify-between text-sm">
                      <span className="text-primary-text">{subject.name}</span>
                      <span className={`font-semibold ${getStatusColor(newStatus)}`}>
                        {newPct.toFixed(1)}%
                      </span>
                    </div>
                  );
                })}
                <div className="pt-2 mt-2 border-t border-red-200 flex items-center justify-between text-sm font-semibold">
                  <span className="text-primary-text">Overall</span>
                  <span className={getStatusColor(getAttendanceStatus(
                    (overall.attended / (overall.total + simulateClasses * attendanceRecords.length)) * 100
                  ))}>
                    {((overall.attended / (overall.total + simulateClasses * attendanceRecords.length)) * 100).toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
