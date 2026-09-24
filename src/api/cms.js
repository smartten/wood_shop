import { useEffect, useState } from "react";

// Empty by default: requests go to the same origin and are proxied to Strapi
// (CRA `proxy` in development, nginx in Docker). Set it to use a remote CMS.
const BASE = process.env.REACT_APP_CMS_URL || "";

export function mediaUrl(media) {
  if (!media || !media.url) return undefined;
  return media.url.startsWith("http") ? media.url : BASE + media.url;
}

export async function cmsGet(path) {
  const res = await fetch(`${BASE}/api/${path}`);
  if (!res.ok) {
    throw new Error(`CMS request failed (${res.status}): ${path}`);
  }
  return (await res.json()).data;
}

export function useCms(path) {
  const [state, setState] = useState({ data: null, error: null });
  useEffect(() => {
    let cancelled = false;
    setState({ data: null, error: null });
    cmsGet(path)
      .then((data) => !cancelled && setState({ data, error: null }))
      .catch((error) => !cancelled && setState({ data: null, error }));
    return () => {
      cancelled = true;
    };
  }, [path]);
  return state;
}
