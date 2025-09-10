const API_URL = import.meta.env.VITE_API_URL;

export async function login(credentials: { username: string; password: string }) {
  const res = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  });

  if (!res.ok) throw new Error('Login failed');
  return res.json();
}