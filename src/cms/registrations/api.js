import { cmsAuthFetch } from '../auth/session';
import { CMS_API_BASE } from '../config/apiBase';

const parseJsonSafely = async (response) => {
  try {
    return await response.json();
  } catch (error) {
    return null;
  }
};

export const submitRegistration = async (payload) => {
  const response = await fetch(`${CMS_API_BASE}/api/registrations/submit/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await parseJsonSafely(response);
  if (!response.ok) {
    throw new Error(data?.error || `Failed to submit registration (${response.status})`);
  }

  return data;
};

export const fetchRegistrationSubmissions = ({ status = 'all', ordering = '-submitted_at' } = {}) => {
  const qs = new URLSearchParams({ status, ordering }).toString();
  return cmsAuthFetch(`/api/cms/registrations/?${qs}`, { method: 'GET' });
};

export const approveRegistrationSubmission = (submissionId) =>
  cmsAuthFetch(`/api/cms/registrations/${submissionId}/approve/`, {
    method: 'POST',
    body: JSON.stringify({}),
  });

export const rejectRegistrationSubmission = (submissionId, reason) =>
  cmsAuthFetch(`/api/cms/registrations/${submissionId}/reject/`, {
    method: 'POST',
    body: JSON.stringify({ reason }),
  });
