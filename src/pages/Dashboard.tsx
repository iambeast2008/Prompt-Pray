import { useState } from 'react';
import { Link } from 'react-router-dom';
import { student } from '../data/student';
import { getSubject } from '../data/subjects';
import {
  attendanceRecords,
  getAttendancePercentage,
  getOverallAttendance,
  getAttendanceStatus,
  getStatusLabel,
  getStatusBgColor,
  getStatusColor,
} from '../data/attendance';
import { getTodayClasses } from '../data/timetable';
import { missedClasses } from '../data/missed';
import { assignments, getStatusLabel as getAssignmentStatusLabel, getStatusStyle as getAssignmentStatusStyle } from '../data/assignments';

export default function Dashboard() {
  const overall = getOverallAttendance();
  const overallStatus = getAttendanceStatus(overall.percentage);
  const todayClasses = getTodayClasses();
  const recentMissed = missedClasses.slice(0, 2);
  const activeAssignments = assignments.filter(a => a.status !== 'completed').slice(0, 3);

  const [hour] = useState(() => new Date().getHours());
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';

  const sortedRecords = [...attendanceRecords].sort((a, b) => {
    return getAttendancePercentage(a) - getAttendancePercentage(b);
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-primary-text">
          {greeting}, {student.firstName}
        </h1>
        <p className="text-secondary-text mt-1">
          Wednesday, September 30
        </p>
        <p className="text-sm text-muted-text mt-0.5">
          {student.course} · Semester {student.semester} · Section {student.section}
        </p>
      </div>

      {/* Overall Attendance Card */}
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

      {/* Attendance by Subject */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-primary-text">Attendance by subject</h2>
          <Link to="/attendance" className="text-sm text-primary-blue hover:underline">
            View details →
          </Link>
        </div>
        <div className="bg-surface border border-border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted-surface">
                <th className="text-left text-xs font-medium text-secondary-text px-4 py-3">Subject</th>
                <th className="text-left text-xs font-medium text-secondary-text px-4 py-3 hidden sm:table-cell">Attended</th>
                <th className="text-right text-xs font-medium text-secondary-text px-4 py-3">Attendance</th>
                <th className="text-right text-xs font-medium text-secondary-text px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {sortedRecords.map(record => {
                const subject = getSubject(record.subjectId);
                if (!subject) return null;
                const pct = getAttendancePercentage(record);
                const status = getAttendanceStatus(pct);
                return (
                  <tr key={record.subjectId} className="border-b border-border last:border-0 hover:bg-muted-surface/50 transition-colors">
                    <td className="px-4 py-3">
                      <Link to="/attendance" className="text-sm font-medium text-primary-text hover:text-primary-blue">
                        {subject.name}
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-sm text-secondary-text hidden sm:table-cell">
                      {record.attended}/{record.total}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <span className={`text-sm font-semibold ${getStatusColor(status)}`}>
                        {pct.toFixed(1)}%
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <span className={`inline-flex px-2 py-0.5 rounded text-xs font-medium ${getStatusBgColor(status)}`}>
                        {getStatusLabel(status)}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Today's Classes */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-primary-text">Today's classes</h2>
          <Link to="/timetable" className="text-sm text-primary-blue hover:underline">
            Full timetable →
          </Link>
        </div>
        {todayClasses.length === 0 ? (
          <div className="bg-surface border border-border rounded-lg p-6 text-center">
            <p className="text-sm text-secondary-text">No classes scheduled for today.</p>
          </div>
        ) : (
          <div className="space-y-2">
            {todayClasses.map(cls => {
              const subject = getSubject(cls.subjectId);
              return (
                <div key={cls.id} className="bg-surface border border-border rounded-lg px-4 py-3 flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-primary-text">{subject?.name}</p>
                    <p className="text-xs text-muted-text mt-0.5">{cls.topic}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sm text-primary-text">{cls.time} – {cls.endTime}</p>
                    <p className="text-xs text-muted-text">{cls.room} · {cls.professor}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Catch-up Preview */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-primary-text">Catch up</h2>
          <Link to="/catch-up" className="text-sm text-primary-blue hover:underline">
            View all →
          </Link>
        </div>
        <div className="space-y-3">
          {recentMissed.map(mc => {
            const subject = getSubject(mc.subjectId);
            return (
              <div key={mc.id} className="bg-surface border border-border rounded-lg p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-primary-text">{subject?.name}</p>
                    <p className="text-xs text-muted-text mt-0.5">Missed on {mc.date}</p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {mc.topics.map(t => (
                        <span key={t.id} className="inline-flex px-2 py-0.5 bg-muted-surface rounded text-xs text-secondary-text">
                          {t.name}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    to="/catch-up"
                    className="shrink-0 text-xs font-medium text-primary-blue hover:underline"
                  >
                    Catch up →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Assignments Preview */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-primary-text">Assignments</h2>
          <Link to="/assignments" className="text-sm text-primary-blue hover:underline">
            View all →
          </Link>
        </div>
        <div className="space-y-2">
          {activeAssignments.map(a => {
            const subject = getSubject(a.subjectId);
            return (
              <div key={a.id} className="bg-surface border border-border rounded-lg px-4 py-3 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-primary-text">{a.title}</p>
                  <p className="text-xs text-muted-text mt-0.5">{subject?.name} · Due {a.dueDate}</p>
                </div>
                <span className={`shrink-0 inline-flex px-2 py-0.5 rounded text-xs font-medium ${getAssignmentStatusStyle(a.status)}`}>
                  {getAssignmentStatusLabel(a.status)}
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
