import { Link } from 'react-router-dom';

interface Props {
  to: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export default function TransitionLink({ to, className, onClick, children }: Props) {
  return (
    <Link to={`/go?to=${to}`} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
