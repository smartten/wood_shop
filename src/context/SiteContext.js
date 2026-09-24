import { createContext, useContext } from "react";
import { useCms } from "../api/cms";

const SiteContext = createContext(null);

export function SiteProvider({ children }) {
  const site = useCms("global");
  const services = useCms("services?sort=order&pagination[pageSize]=100");

  const error = site.error || services.error;
  if (error) {
    return <div style={{ padding: 40 }}>Could not load site content: {error.message}</div>;
  }
  if (!site.data || !services.data) return null;

  return (
    <SiteContext.Provider value={{ global: site.data, services: services.data }}>
      {children}
    </SiteContext.Provider>
  );
}

export const useSite = () => useContext(SiteContext);
