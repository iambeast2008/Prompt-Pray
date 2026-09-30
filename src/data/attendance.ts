export interface AttendanceRecord {
  subjectId: string;
  attended: number;
  total: number;
}

// Produces approximately: OS 78%, Math 73%, CN 86%, DBMS 91%, SE 88%
export const attendanceRecords: AttendanceRecord[] = [
  { subjectId: 'os', attended: 25, total: 32 },    // 78.1%
  { subjectId: 'math', attended: 22, total: 30 },   // 73.3%
  { subjectId: 'cn', attended: 25, total: 29 },     // 86.2%
  { subjectId: 'dbms', attended: 29, total: 32 },   // 90.6%
  { subjectId: 'se', attended: 28, total: 32 },     // 87.5%
];

export function getAttendancePercentage(record: AttendanceRecord): number {
  if (record.total === 0) return 100;
  return (record.attended / record.total) * 100;
}

export function getOverallAttendance(): { attended: number; total: number; percentage: number } {
  const attended = attendanceRecords.reduce((sum, r) => sum + r.attended, 0);
  const total = attendanceRecords.reduce((sum, r) => sum + r.total, 0);
  return { attended, total, percentage: (attended / total) * 100 };
}

export type AttendanceStatus = 'safe' | 'warning' | 'below';

export function getAttendanceStatus(percentage: number): AttendanceStatus {
  if (percentage >= 85) return 'safe';
  if (percentage >= 75) return 'warning';
  return 'below';
}

export function getStatusLabel(status: AttendanceStatus): string {
  switch (status) {
    case 'safe': return 'Safe';
    case 'warning': return 'Attendance warning';
    case 'below': return 'Below required attendance';
  }
}

export function getStatusColor(status: AttendanceStatus): string {
  switch (status) {
    case 'safe': return 'text-success-green';
    case 'warning': return 'text-warning-amber';
    case 'below': return 'text-danger-red';
  }
}

export function getStatusBgColor(status: AttendanceStatus): string {
  switch (status) {
    case 'safe': return 'bg-green-50 text-success-green';
    case 'warning': return 'bg-amber-50 text-warning-amber';
    case 'below': return 'bg-red-50 text-danger-red';
  }
}

export function classesNeededForTarget(record: AttendanceRecord, target: number): number | null {
  // target in percent, e.g. 75 or 85
  const currentPct = getAttendancePercentage(record);
  if (currentPct >= target) return 0;
  // (attended + n) / (total + n) >= target/100
  // attended + n >= (total + n) * target / 100
  // 100*attended + 100*n >= target*total + target*n
  // n*(100 - target) >= target*total - 100*attended
  // n >= (target*total - 100*attended) / (100 - target)
  const n = Math.ceil((target * record.total - 100 * record.attended) / (100 - target));
  return n > 0 ? n : 0;
}
