import { Link } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';

export default function ScrollLink({ onClick, ...props }: LinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    onClick?.(e);
  };
  return <Link {...props} onClick={handleClick} />;
}
