import React from "react";
import styles from "./DecadeCard.module.scss";

import HomeShield from "../svg/HomeShield";
import IconEducation from "../svg/IconEducation";
import IconPartnership from "../svg/IconPartnership";
import IconProject from "../svg/IconProject";
import IconLeadership from "../svg/IconLeadership";

export type IconKey =
  | "foundation"
  | "education"
  | "partnership"
  | "project"
  | "leadership";

const ICONS: Record<IconKey, React.FC> = {
  foundation: HomeShield,
  education: IconEducation,
  partnership: IconPartnership,
  project: IconProject,
  leadership: IconLeadership,
};

// Normalize a potentially messy key
const normalizeKey = (k?: string): IconKey | undefined => {
  if (!k) return undefined;
  const nk = k.trim().toLowerCase();
  if (["foundation", "education", "partnership", "project", "leadership"].includes(nk)) {
    return nk as IconKey;
  }
  return undefined;
};

// Infer an icon from title if iconKey missing/wrong
const inferIconFromTitle = (title: string): IconKey => {
  const t = title.toLowerCase();

  if (
    t.includes("foundation") ||
    t.includes("established") ||
    t.includes("return to epct") ||
    t.includes("epct")
  ) return "foundation";

  if (
    t.includes("b.sc") ||
    t.includes("m.sc") ||
    t.includes("university") ||
    t.includes("buet") ||
    t.includes("southampton") ||
    t.includes("academic") ||
    t.includes("achievement")
  ) return "education";

  if (
    t.includes("partner") ||
    t.includes("partnership") ||
    t.includes("collaboration") ||
    t.includes("rhd") ||
    t.includes("lged") ||
    t.includes("unocal") ||
    t.includes("lafarge") ||
    t.includes("oyster") ||
    t.includes("gasfield") ||
    t.includes("jalalabad")
  ) return "partnership";

  if (
    t.includes("bridge") ||
    t.includes("construction") ||
    t.includes("project") ||
    t.includes("survey") ||
    t.includes("sub soil")
  ) return "project";

  if (
    t.includes("chairman") ||
    t.includes("leadership") ||
    t.includes("executive") ||
    t.includes("superintending") ||
    t.includes("ieb")
  ) return "leadership";

  // Default
  return "foundation";
};

export interface DecadeCardProps {
  year: number | string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  iconKey?: string;
}

const DecadeCard: React.FC<DecadeCardProps> = ({
  year,
  title,
  description,
  icon,
  iconKey,
}) => {
  const key =
    normalizeKey(iconKey) ?? inferIconFromTitle(title);
  const IconComp = ICONS[key] ?? HomeShield;

  return (
    <div className={styles.decadeCardWrapper}>
      <div className={styles.HomeIconWrapper}>
        {icon ? icon : <IconComp />}
      </div>
      <div className={styles.decadeCardInnerWrapper}>
        <p className={styles.decadeYear}>{year}</p>
        <p className={styles.decadeTitle}>{title}</p>
        <p className={styles.decadeCardDescription}>{description}</p>
      </div>
    </div>
  );
};

export default DecadeCard;
