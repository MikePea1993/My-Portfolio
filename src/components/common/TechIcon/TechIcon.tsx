import React from "react";
import { getTechIcon } from "../../../utils/techIcons";
import styles from "./TechIcon.module.css";

interface TechIconProps {
  technology: string;
  size?: "sm" | "md" | "lg";
  showTooltip?: boolean;
}

export const TechIcon: React.FC<TechIconProps> = ({
  technology,
  size = "md",
  showTooltip = true,
}) => {
  const techIcon = getTechIcon(technology);

  return (
    <div
      className={`${styles.techIcon} ${styles[size]}`}
      style={{ "--tech-color": techIcon.color } as React.CSSProperties}
      title={showTooltip ? techIcon.name : undefined}
    >
      {techIcon.icon()}
    </div>
  );
};
