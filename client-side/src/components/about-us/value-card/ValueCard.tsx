import ValueIcon from "@/components/common/svg/ValueIcon";
import styles from "./ValueCard.module.scss";

interface ValueCardProps {
  icon?: React.ReactNode; // allow custom icons
  title: string;
  subtitle: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, subtitle }) => {
  return (
    <div className={styles.valueCardWrapper}>
      {icon || <ValueIcon />}
      <div className={styles.textSection}>
        <p className={styles.title}>{title}</p>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </div>
  );
};

export default ValueCard;
