import { getScoreColor } from '@/utils/scoreCalculator';

export default function ScoreHero({ score }: { score: number }) {
  const colorClass = getScoreColor(score);

  return (
    <div className={`rounded-xl p-6 text-white text-center bg-gradient-to-r ${colorClass}`}>
      <h2 className="text-lg font-semibold">Your Overall Cybersecurity Score</h2>
      <p className="text-5xl font-bold mt-4">{score}%</p>
    </div>
  );
}