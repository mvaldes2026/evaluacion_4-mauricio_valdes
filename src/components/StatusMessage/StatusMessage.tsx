import './StatusMessage.css';

interface StatusMessageProps {
  variant: 'loading' | 'error' | 'success';
  message: string;
}

export function StatusMessage({ variant, message }: StatusMessageProps) {
  const isError = variant === 'error';

  return (
    <output
      className={`status-message status-message--${variant}`}
      role={isError ? 'alert' : undefined}
      aria-live={isError ? 'assertive' : 'polite'}
    >
      {message}
    </output>
  );
}