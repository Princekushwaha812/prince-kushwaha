import React from 'react';
import {
  Award,
  CheckCircle2,
  XCircle,
  TrendingUp,
  BookOpen,
  Printer,
  RotateCcw,
  Clock,
  Hourglass,
  Zap,
  BarChart2
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from 'recharts';
import { ExamResult, SectionId } from '../types/cat.ts';
import { SECTION_METADATA } from '../data/mockQuestions.ts';

interface ScorecardProps {
  examResult: ExamResult;
  onViewSolutions: () => void;
  onViewPaper: () => void;
  onRetakeExam: () => void;
}

export const CatScorecard: React.FC<ScorecardProps> = ({
  examResult,
  onViewSolutions,
  onViewPaper,
  onRetakeExam,
}) => {
  const {
    totalScore,
    totalAttempts,
    totalCorrect,
    totalIncorrect,
    overallAccuracy,
    estimatedPercentile,
    totalTimeSpentSeconds,
    totalAllocatedSeconds,
    sections,
  } = examResult;

  const formatMinSec = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins}m ${s > 0 ? `${s}s` : ''}`;
  };

  // Prepare chart data for Recharts
  const chartData = (['VARC', 'LRDI', 'QA'] as SectionId[]).map((secId) => {
    const s = sections[secId];
    const timeSpentMins = Math.round((s.timeSpentSeconds / 60) * 10) / 10;
    const allocatedMins = Math.round(s.allocatedTimeSeconds / 60); // 40 mins
    const totalExamMins = Math.max(1, Math.round((totalTimeSpentSeconds / 60) * 10) / 10);
    const shareOfTotalExam = totalTimeSpentSeconds > 0
      ? Math.round((s.timeSpentSeconds / totalTimeSpentSeconds) * 100)
      : 33;

    return {
      section: SECTION_METADATA[secId].shortName,
      name: s.name,
      'Time Spent (min)': timeSpentMins,
      'Allocated Time (min)': allocatedMins,
      'Share of Exam (%)': shareOfTotalExam,
      avgSecondsPerQ: s.avgTimePerQuestion,
      score: s.score,
      attempted: s.attempted,
      accuracy: s.accuracy,
    };
  });

  const totalSpentMins = Math.round((totalTimeSpentSeconds / 60) * 10) / 10;
  const totalAllocatedMins = Math.round(totalAllocatedSeconds / 60); // 120 mins

  const sectionColors: Record<string, string> = {
    VARC: '#2563eb', // Blue
    'DILR / LRDI': '#8b5cf6', // Purple
    QA: '#059669', // Emerald
  };

  return (
    <div className="flex-1 bg-slate-50 overflow-y-auto p-4 sm:p-8 select-none">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Banner */}
        <div className="bg-gradient-to-r from-[#1b3a5c] via-[#244b7a] to-[#1e3a8a] text-white p-6 sm:p-8 rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/30 text-blue-200 text-xs font-semibold">
              <Award className="w-3.5 h-3.5 text-amber-300" />
              <span>Official Test Evaluation Complete</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              All India Open Mock CAT - 1 Scorecard
            </h2>
            <p className="text-xs sm:text-sm text-blue-200">
              Career Launcher (aspiration.ai) • 100 Questions • Maximum Marks: 300
            </p>
          </div>

          {/* Big Score & Percentile Badge */}
          <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20">
            <div className="text-center border-r border-white/20 pr-4">
              <div className="text-xs uppercase tracking-wider text-blue-200 font-bold">Total Score</div>
              <div className="text-3xl sm:text-4xl font-black text-amber-400">
                {totalScore}
                <span className="text-sm font-normal text-blue-200"> / 300</span>
              </div>
            </div>
            <div className="text-center pl-2">
              <div className="text-xs uppercase tracking-wider text-blue-200 font-bold">Est. Percentile</div>
              <div className="text-3xl sm:text-4xl font-black text-emerald-300">
                {estimatedPercentile}
                <span className="text-sm font-normal text-emerald-200">%ile</span>
              </div>
            </div>
          </div>
        </div>

        {/* Overview Stat Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-xs border border-gray-200">
            <div className="flex items-center space-x-2 text-gray-500 text-xs font-bold uppercase mb-1">
              <TrendingUp className="w-4 h-4 text-blue-600" />
              <span>Attempts</span>
            </div>
            <div className="text-2xl font-black text-gray-900">
              {totalAttempts}
              <span className="text-xs font-semibold text-gray-400"> / 100</span>
            </div>
            <div className="text-[11px] text-gray-500 mt-1">
              Attempt Rate: {((totalAttempts / 100) * 100).toFixed(0)}%
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-xs border border-gray-200">
            <div className="flex items-center space-x-2 text-gray-500 text-xs font-bold uppercase mb-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Correct</span>
            </div>
            <div className="text-2xl font-black text-emerald-600">{totalCorrect}</div>
            <div className="text-[11px] text-emerald-700 font-semibold mt-1">
              +{totalCorrect * 3} marks earned
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-xs border border-gray-200">
            <div className="flex items-center space-x-2 text-gray-500 text-xs font-bold uppercase mb-1">
              <XCircle className="w-4 h-4 text-red-600" />
              <span>Incorrect</span>
            </div>
            <div className="text-2xl font-black text-red-600">{totalIncorrect}</div>
            <div className="text-[11px] text-red-700 font-semibold mt-1">
              Negative penalty applied
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-xs border border-gray-200">
            <div className="flex items-center space-x-2 text-gray-500 text-xs font-bold uppercase mb-1">
              <Clock className="w-4 h-4 text-amber-500" />
              <span>Total Time</span>
            </div>
            <div className="text-2xl font-black text-blue-900">
              {formatMinSec(totalTimeSpentSeconds)}
            </div>
            <div className="text-[11px] text-gray-500 mt-1">
              Allocated: {totalAllocatedMins} mins (40m each)
            </div>
          </div>
        </div>

        {/* RECHARTS SECTION: Visual Breakdown of Time Spent Per Section */}
        <div className="bg-white rounded-xl shadow-xs border border-gray-200 p-6 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-200 pb-4">
            <div>
              <h3 className="text-base font-bold text-gray-900 flex items-center space-x-2">
                <BarChart2 className="w-5 h-5 text-blue-600" />
                <span>Time Spent per Section vs. Total Exam Time</span>
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                Separate 40-minute window per section • Sequential section pacing comparison
              </p>
            </div>
            <div className="flex items-center space-x-2 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200 text-xs font-semibold text-blue-900">
              <Hourglass className="w-4 h-4 text-blue-600" />
              <span>Total Used: {totalSpentMins}m / {totalAllocatedMins}m</span>
            </div>
          </div>

          {/* Recharts Bar Chart Container */}
          <div className="h-72 w-full pt-2" role="region" aria-label="Section Time Breakdown Chart">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis
                  dataKey="section"
                  stroke="#475569"
                  tick={{ fontSize: 12, fontWeight: 600 }}
                  axisLine={{ stroke: '#cbd5e1' }}
                />
                <YAxis
                  stroke="#475569"
                  tick={{ fontSize: 12 }}
                  unit="m"
                  domain={[0, 45]}
                  axisLine={{ stroke: '#cbd5e1' }}
                  label={{ value: 'Minutes', angle: -90, position: 'insideLeft', offset: 0, fill: '#64748b', fontSize: 11 }}
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-slate-900 text-white p-3 rounded-lg shadow-xl text-xs space-y-1 border border-slate-700">
                          <div className="font-bold text-amber-300 text-sm">{data.name}</div>
                          <div className="flex justify-between gap-4 text-slate-300">
                            <span>Time Spent:</span>
                            <span className="font-bold text-white">{data['Time Spent (min)']} mins</span>
                          </div>
                          <div className="flex justify-between gap-4 text-slate-300">
                            <span>Allocated:</span>
                            <span className="font-bold text-white">{data['Allocated Time (min)']} mins</span>
                          </div>
                          <div className="flex justify-between gap-4 text-slate-300">
                            <span>Share of Exam Time:</span>
                            <span className="font-bold text-emerald-400">{data['Share of Exam (%)']}%</span>
                          </div>
                          <div className="flex justify-between gap-4 text-slate-300">
                            <span>Avg Pace:</span>
                            <span className="font-bold text-blue-300">
                              {data.avgSecondsPerQ > 0 ? `${Math.round(data.avgSecondsPerQ / 60 * 10) / 10} min/Q` : 'N/A'}
                            </span>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Legend
                  wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }}
                />
                <Bar
                  dataKey="Time Spent (min)"
                  fill="#2563eb"
                  radius={[4, 4, 0, 0]}
                  barSize={36}
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        index === 0
                          ? '#2563eb' // VARC Blue
                          : index === 1
                          ? '#7c3aed' // DILR Purple
                          : '#059669' // QA Emerald
                      }
                    />
                  ))}
                </Bar>
                <Bar
                  dataKey="Allocated Time (min)"
                  fill="#cbd5e1"
                  radius={[4, 4, 0, 0]}
                  barSize={18}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Individual Section Time Breakdown Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {(['VARC', 'LRDI', 'QA'] as SectionId[]).map((secId) => {
              const s = sections[secId];
              const secMeta = SECTION_METADATA[secId];
              const timeMins = Math.round((s.timeSpentSeconds / 60) * 10) / 10;
              const percent = s.percentageOfExamTime;
              const avgSec = s.avgTimePerQuestion;

              return (
                <div
                  key={secId}
                  className="p-4 rounded-xl border border-gray-200 bg-gray-50/70 hover:bg-white transition shadow-2xs space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-900">{secMeta.shortName}</span>
                    <span className="text-[11px] font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full">
                      {percent}% of Exam
                    </span>
                  </div>

                  <div className="text-xl font-black text-gray-900">
                    {formatMinSec(s.timeSpentSeconds)}
                    <span className="text-xs font-normal text-gray-500"> / 40m 00s</span>
                  </div>

                  {/* Progress bar showing portion of 40 mins used */}
                  <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        secId === 'VARC'
                          ? 'bg-blue-600'
                          : secId === 'LRDI'
                          ? 'bg-purple-600'
                          : 'bg-emerald-600'
                      }`}
                      style={{ width: `${Math.min(100, (s.timeSpentSeconds / 2400) * 100)}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-gray-600 pt-1">
                    <span>Avg Pace:</span>
                    <span className="font-bold text-gray-800">
                      {avgSec > 0 ? `${(avgSec / 60).toFixed(1)} min / attempt` : 'No attempts'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sectional Performance Breakdown Table */}
        <div className="bg-white rounded-lg shadow-xs border border-gray-200 overflow-hidden">
          <div className="px-5 py-3.5 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
            <h3 className="font-bold text-gray-900 text-sm">Section-wise Performance Breakdown</h3>
            <span className="text-xs text-gray-500">CAT Evaluation Standard (+3 / -1 / 0)</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead className="bg-[#244b7a] text-white">
                <tr>
                  <th className="p-3 font-semibold">Section</th>
                  <th className="p-3 font-semibold text-center">Time Spent</th>
                  <th className="p-3 font-semibold text-center">Attempted</th>
                  <th className="p-3 font-semibold text-center text-emerald-300">Correct</th>
                  <th className="p-3 font-semibold text-center text-rose-300">Incorrect</th>
                  <th className="p-3 font-semibold text-center">Accuracy</th>
                  <th className="p-3 font-semibold text-center">Score</th>
                  <th className="p-3 font-semibold text-center text-amber-300">Est. %ile</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {(['VARC', 'LRDI', 'QA'] as SectionId[]).map((secId) => {
                  const s = sections[secId];
                  return (
                    <tr key={secId} className="hover:bg-blue-50/40 font-medium">
                      <td className="p-3">
                        <div className="font-bold text-gray-900">{s.name}</div>
                        <div className="text-[11px] text-gray-500">{SECTION_METADATA[secId].shortName} (40 mins)</div>
                      </td>
                      <td className="p-3 text-center font-bold text-gray-800">
                        {formatMinSec(s.timeSpentSeconds)}
                      </td>
                      <td className="p-3 text-center text-gray-800 font-bold">{s.attempted} / {s.totalQuestions}</td>
                      <td className="p-3 text-center text-emerald-700 font-bold">{s.correct}</td>
                      <td className="p-3 text-center text-red-600 font-bold">{s.incorrect}</td>
                      <td className="p-3 text-center font-bold text-gray-900">{s.accuracy}%</td>
                      <td className="p-3 text-center">
                        <span className="px-2.5 py-1 rounded bg-blue-100 text-blue-900 font-extrabold text-xs">
                          {s.score}
                        </span>
                      </td>
                      <td className="p-3 text-center font-bold text-emerald-700">{s.percentile}%ile</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Action Navigation Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
          <button
            onClick={onRetakeExam}
            className="flex items-center space-x-2 px-5 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg text-xs font-bold transition shadow-xs"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Retake Mock Exam</span>
          </button>

          <div className="flex items-center space-x-3">
            <button
              onClick={onViewPaper}
              className="flex items-center space-x-2 px-5 py-2.5 bg-purple-700 hover:bg-purple-800 text-white rounded-lg text-xs font-bold transition shadow-xs"
            >
              <Printer className="w-4 h-4" />
              <span>Printable Mock Paper</span>
            </button>

            <button
              onClick={onViewSolutions}
              className="flex items-center space-x-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition shadow-md"
            >
              <BookOpen className="w-4 h-4" />
              <span>View All 100 Solutions & Explanations</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
