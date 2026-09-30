import { useState, type FormEvent } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { login, isLoggedIn } from '../auth';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (isLoggedIn()) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    login();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <h1
            style={{ fontFamily: '"DM Serif Display", serif' }}
            className="text-4xl text-primary-text tracking-tight mb-2"
          >
            PRESENT
          </h1>
          <p className="text-secondary-text text-sm">
            Your academic companion.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-surface border border-border rounded-lg p-6 space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-primary-text mb-1.5">
              College email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="aarav.sharma@university.edu"
              className="w-full px-3 py-2 text-sm border border-border rounded-md bg-surface text-primary-text placeholder:text-muted-text focus:outline-none focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue transition-colors"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-primary-text mb-1.5">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3 py-2 text-sm border border-border rounded-md bg-surface text-primary-text placeholder:text-muted-text focus:outline-none focus:ring-2 focus:ring-primary-blue/20 focus:border-primary-blue transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary-blue text-white text-sm font-medium py-2.5 rounded-md hover:bg-blue-700 transition-colors"
          >
            Sign in →
          </button>
        </form>

        <p className="text-center text-xs text-muted-text mt-6">
          Your attendance. Your classes. Your catch-up plan.
        </p>
      </div>
    </div>
  );
}
