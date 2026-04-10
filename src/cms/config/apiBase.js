const normalizeBase = (value) => (value || "").trim().replace(/\/$/, "");

const isLocalHost = () => {
  if (typeof window === "undefined") return false;
  const host = window.location.hostname;
  return host === "localhost" || host === "127.0.0.1";
};

const fallbackApiBase = isLocalHost()
  ? "http://localhost:8000"
  : "https://backend-eight-beta-88.vercel.app";

export const CMS_API_BASE = normalizeBase(import.meta.env.VITE_CMS_API_BASE) || fallbackApiBase;
