import { CMS_API_BASE } from '../config/apiBase';

export const cmsAuthFetch = async (path, options = {}) => {
  const response = await fetch(`${CMS_API_BASE}${path}`, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  });

  let payload = null;
  try {
    payload = await response.json();
  } catch (error) {
    payload = null;
  }

  if (!response.ok) {
    const message = payload?.error || `Request failed with status ${response.status}`;
    throw new Error(message);
  }

  return payload;
};

export const loginCms = (username, password) =>
  cmsAuthFetch('/api/auth/login/', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
  });

export const logoutCms = () =>
  cmsAuthFetch('/api/auth/logout/', {
    method: 'POST',
    body: JSON.stringify({}),
  });

export const fetchCmsSession = () => cmsAuthFetch('/api/auth/me/', { method: 'GET' });

export const fetchCmsDashboard = () => cmsAuthFetch('/api/cms/dashboard/', { method: 'GET' });
