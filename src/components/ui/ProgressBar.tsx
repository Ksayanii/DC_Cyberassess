import { getScoreBarColor } from '@/utils/scoreCalculator';

export default function ProgressBar({ score }: { score: number }) {
  const barClass = getScoreBarColor(score);
  const percent = (score / 4) * 100;

  return (
    <div className="w-full bg-gray-200 rounded-full h-4">
      <div className={`h-4 rounded-full ${barClass}`} style={{ width: `${percent}%` }}></div>
    </div>
  );
}
