import { useForm } from 'react-hook-form';
import { AssessmentData } from '@/types/assessment';
import { Button } from './ui/Button';

const questions = [
  {
    id: 'q1',
    title: 'How do you manage your passwords?',
    name: 'passwordManagement',
    options: [
      { id: '1', label: 'Same password everywhere', value: 1 },
      { id: '2', label: 'Similar passwords with minor changes', value: 2 },
      { id: '3', label: 'Different passwords, remembered', value: 3 },
      { id: '4', label: 'Password manager', value: 4 },
    ],
  },
  {
    id: 'q2',
    title: 'How often do you change your passwords?',
    name: 'passwordFrequency',
    options: [
      { id: '1', label: 'Rarely/Never', value: 1 },
      { id: '2', label: 'Once a year', value: 2 },
      { id: '3', label: 'Every 6 months', value: 3 },
      { id: '4', label: 'Every 3 months or less', value: 4 },
    ],
  },
  {
    id: 'q3',
    title: 'Do you use multi-factor authentication (MFA)?',
    name: 'mfa',
    options: [
      { id: '1', label: 'Never', value: 1 },
      { id: '2', label: 'Occasionally', value: 2 },
      { id: '3', label: 'On important accounts', value: 3 },
      { id: '4', label: 'Always', value: 4 },
    ],
  },
  {
    id: 'q4',
    title: 'How often do you update your software and devices?',
    name: 'updates',
    options: [
      { id: '1', label: 'Rarely', value: 1 },
      { id: '2', label: 'Occasionally', value: 2 },
      { id: '3', label: 'When prompted', value: 3 },
      { id: '4', label: 'Auto-updates enabled', value: 4 },
    ],
  },
];

type Props = {
  onSubmit: (data: AssessmentData) => void;
};

export default function AssessmentForm({ onSubmit }: Props) {
  const { register, handleSubmit } = useForm<AssessmentData>();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-xl shadow-md p-8 space-y-8"
    >
      {questions.map((q) => (
        <div key={q.id}>
          <h2 className="text-lg font-semibold mb-2">{q.title}</h2>
          <div className="space-y-2">
            {q.options.map((option) => (
              <label key={option.id} className="block">
                <input
                  type="radio"
                  value={option.value}
                  {...register(q.name, { required: true })}
                  className="mr-2"
                />
                {option.label}
              </label>
            ))}
          </div>
        </div>
      ))}
      <Button type="submit" className="mt-6">Submit Assessment</Button>
    </form>
  );
}