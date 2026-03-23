import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function TransitionPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const to = searchParams.get('to') || '/';

  useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      requestAnimationFrame(() => {
        navigate(to, { replace: true });
      });
    });
  }, []);

  return <div className="min-h-screen bg-white" />;
}
