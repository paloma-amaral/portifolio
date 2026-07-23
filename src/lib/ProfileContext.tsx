"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type ProfileType = "clt" | "pj" | "dados" | "all" | "dev";

interface ProfileContextProps {
  activeProfile: ProfileType;
  setActiveProfile: (profile: ProfileType) => void;
}

const ProfileContext = createContext<ProfileContextProps | undefined>(undefined);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [activeProfile, setActiveProfile] = useState<ProfileType>("all");

  return (
    <ProfileContext.Provider value={{ activeProfile, setActiveProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
}
