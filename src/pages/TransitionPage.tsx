import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function TransitionPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const to = searchParams.get('to') || '/';

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => navigate(to, { replace: true }), 20);
    return () => clearTimeout(timer);
  }, []);

  return null;
}
