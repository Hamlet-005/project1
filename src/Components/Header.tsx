import { Link } from '@tanstack/react-router';

export default function Header() {
  return (
    <header>
      <nav>
          <Link to="/">Home</Link> or
          <Link to="/about">About</Link>
      </nav>
    </header>
  );
}
