'use client';
import { ScoreData } from '@/types/assessment';
import { Radar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export default function ChartsGrid({ scores }: { scores: ScoreData }) {
  const radarData = {
    labels: ['Password', 'Authentication', 'Device Security'],
    datasets: [
      {
        label: 'Score (1-4)',
        data: [scores.password, scores.auth, scores.device],
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1
      }
    ]
  };

  const doughnutData = {
    labels: ['Achieved', 'Remaining'],
    datasets: [
      {
        data: [scores.overall, 100 - scores.overall],
        backgroundColor: ['#10B981', '#E5E7EB'],
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Category Scores</h3>
        <Radar data={radarData} />
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-2">Overall Score</h3>
        <Doughnut data={doughnutData} />
      </div>
    </div>
  );
}