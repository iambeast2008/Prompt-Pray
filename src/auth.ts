const AUTH_KEY = 'present_session';

export function isLoggedIn(): boolean {
  return localStorage.getItem(AUTH_KEY) === 'active';
}

export function login(): void {
  localStorage.setItem(AUTH_KEY, 'active');
}

export function logout(): void {
  localStorage.removeItem(AUTH_KEY);
}
