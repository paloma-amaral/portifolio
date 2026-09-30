"use client";

import { useSyncExternalStore } from "react";

export type Profile = "recrutador" | "cliente";

/* O perfil vive em <html data-profile>. O CSS mostra/esconde cada caminho,
 * então o HTML inicial contém os dois e nada pisca na troca. */
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-profile"] });
  return () => observer.disconnect();
}
const getSnapshot = (): Profile =>
  document.documentElement.getAttribute("data-profile") === "cliente" ? "cliente" : "recrutador";
const getServerSnapshot = (): Profile => "recrutador";

export function useProfile(): Profile {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function setProfile(p: Profile) {
  document.documentElement.setAttribute("data-profile", p);
  try {
    sessionStorage.setItem("portfolio-profile", p);
  } catch {}
}
