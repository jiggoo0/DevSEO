import fetch from 'node-fetch';

const VERCEL_OIDC_TOKEN = process.env.VERCEL_OIDC_TOKEN || '';
const isProduction = process.env.NODE_ENV === 'production';

export const fetchVercelProjects = async () => {
  if (!VERCEL_OIDC_TOKEN || !isProduction)
    throw new Error('OIDC token not configured or not production');

  const response = await fetch('https://api.vercel.com/v1/projects', {
    headers: { Authorization: `Bearer ${VERCEL_OIDC_TOKEN}` },
  });

  if (!response.ok) throw new Error(`Vercel API error: ${response.status}`);

  return response.json();
};
