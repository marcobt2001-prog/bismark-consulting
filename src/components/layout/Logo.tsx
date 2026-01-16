import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="block">
      <div className="flex flex-col leading-none">
        <span className="font-display text-4xl md:text-5xl tracking-wider text-navy-900">
          BISMARK
        </span>
        <span className="font-sans text-sm md:text-base tracking-widest text-navy-700 -mt-1">
          CONSULTING
        </span>
      </div>
    </Link>
  );
}
