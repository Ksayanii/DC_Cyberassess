import { Recommendation } from '@/types/assessment';

export default function Recommendations({ items }: { items: Recommendation[] }) {
  return (
    <div className="mt-10">
      <h3 className="text-xl font-bold mb-4">Recommendations</h3>
      <ul className="space-y-4">
        {items.map((rec, index) => (
          <li key={index} className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-semibold text-indigo-600">{rec.title}</h4>
            <p className="text-sm text-gray-700 mt-1">{rec.description}</p>
            <span className="text-xs text-gray-400 uppercase">Priority: {rec.priority}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}