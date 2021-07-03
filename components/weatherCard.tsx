import Image from "next/image";
import styles from "../styles/Home.module.css";

interface Props {
  temp: number;
  name: string;
  imageUrl: string;
  imageAlt: string;
  onClick: () => void;
}

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

const WeatherCard = ({ temp, name, imageUrl, imageAlt, onClick }: Props) => {
  return (
    <div className={styles.cardContainer} onClick={onClick}>
      <div className={styles.card}>
        <Image
          quality={20}
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 475)
          )}`}
          className={styles.image}
          src={imageUrl}
          alt={imageAlt}
          width={200}
          height={200}
        />
        <div className={styles.tempContainer}>
          <span>{temp.toFixed(0)} °</span>
        </div>
      </div>
      <span>{name}</span>
    </div>
  );
};

export default WeatherCard;
