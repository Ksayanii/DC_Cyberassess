'use client';

import { ScoreData, Recommendation } from '@/types/assessment';
import ScoreHero from './ScoreHero';
import ChartsGrid from './ChartsGrid';
import Recommendations from './Recommendations';
import { Button } from './ui/Button';

export default function ReportSection({
  scores,
  recommendations,
  onReset
}: {
  scores: ScoreData;
  recommendations: Recommendation[];
  onReset: () => void;
}) {
  return (
    <div className="space-y-10">
      <ScoreHero score={scores.overall} />
      <ChartsGrid scores={scores} />
      <Recommendations items={recommendations} />
      <div className="text-center mt-10">
        <Button onClick={onReset}>Redo Assessment</Button>
      </div>
    </div>
  );
}