import { cn } from '@/lib/utils';

export function Button({ className = '', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn('bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow', className)}
      {...props}
    />
  );
}