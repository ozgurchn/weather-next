import Image from "next/image";
import styles from "../styles/Detail.module.css";

interface Props {
  title: string;
  value: number | string;
}

const InfoCard = ({ title, value }: Props) => {
  return (
    <div className={styles.infoCard}>
      <span className={styles.infoCardTitle}>{title}</span>
      <span className={styles.infoCardValue}>{value}</span>
    </div>
  );
};

export default InfoCard;
