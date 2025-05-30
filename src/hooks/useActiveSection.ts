import { useState } from "react";

export const useActiveSection = (initialSection: string = "home") => {
  const [activeSection, setActiveSection] = useState(initialSection);

  const updateActiveSection = (section: string) => {
    setActiveSection(section);
  };

  return { activeSection, updateActiveSection };
};
