import { CMS_API_BASE } from '../config/apiBase';
const CMS_CONTENT_KEY = 'marports-cms-content-v1';

const listeners = new Set();
let cache = {};

const canUseStorage = () => typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';

const safeParse = (raw) => {
  try {
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch (error) {
    return {};
  }
};

const writeLocal = (value) => {
  if (!canUseStorage()) return;
  window.localStorage.setItem(CMS_CONTENT_KEY, JSON.stringify(value));
};

const readLocal = () => {
  if (!canUseStorage()) return {};
  const raw = window.localStorage.getItem(CMS_CONTENT_KEY);
  if (!raw) return {};
  return safeParse(raw);
};

const notify = () => {
  listeners.forEach((listener) => listener(cache));
};

const setCache = (nextCache) => {
  cache = nextCache && typeof nextCache === 'object' ? nextCache : {};
  writeLocal(cache);
  notify();
};

const api = async (path, options = {}) => {
  const response = await fetch(`${CMS_API_BASE}${path}`, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API error ${response.status}`);
  }

  return response.status === 204 ? null : response.json();
};

export const subscribeCmsContent = (listener) => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};

export const getCmsContentStore = () => {
  if (!Object.keys(cache).length) {
    cache = readLocal();
  }
  return cache;
};

export const getCmsPageContent = (pageId) => {
  const store = getCmsContentStore();
  return store[pageId] && typeof store[pageId] === 'object' ? store[pageId] : {};
};

export const fetchAllCmsContent = async () => {
  try {
    const payload = await api('/api/cms/content/', { method: 'GET' });
    setCache(payload?.pages || {});
  } catch (error) {
    setCache(readLocal());
  }
  return getCmsContentStore();
};

export const fetchCmsPageContent = async (pageId) => {
  try {
    const payload = await api(`/api/cms/content/${encodeURIComponent(pageId)}/`, { method: 'GET' });
    const next = { ...getCmsContentStore(), [pageId]: payload?.data || {} };
    setCache(next);
  } catch (error) {
    // Keep current in-memory state on read errors instead of rehydrating stale local cache.
    if (!Object.keys(cache).length) {
      cache = readLocal();
    }
  }
  return getCmsPageContent(pageId);
};

export const updateCmsPageContent = async (pageId, patch) => {
  const localStore = getCmsContentStore();
  const localCurrent = localStore[pageId] || {};
  const localNext = {
    ...localCurrent,
    ...patch,
    updatedAt: new Date().toISOString(),
  };

  setCache({ ...localStore, [pageId]: localNext });

  try {
    const payload = await api(`/api/cms/content/${encodeURIComponent(pageId)}/`, {
      method: 'PUT',
      body: JSON.stringify(patch),
    });
    const confirmed = payload?.data || localNext;
    setCache({ ...getCmsContentStore(), [pageId]: confirmed });
    return confirmed;
  } catch (error) {
    return localNext;
  }
};

export const clearCmsPageContent = async (pageId) => {
  const next = { ...getCmsContentStore() };
  delete next[pageId];
  setCache(next);

  try {
    await api(`/api/cms/content/${encodeURIComponent(pageId)}/`, { method: 'DELETE' });
  } catch (error) {
    // Keep local state even when backend is temporarily unreachable.
  }
};
