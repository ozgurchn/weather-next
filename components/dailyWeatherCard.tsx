import moment from "moment";
import Image from "next/image";
import styles from "styles/Home.module.css";

interface Props {
  daily: any;
}

const DailyWeatherCard = ({ daily }: Props) => {
  return (
    <div className={styles.dailyWeatherCard}>
      <Image
        src={`http://openweathermap.org/img/w/${daily.weather[0].icon}.png`}
        alt={"weather_icon"}
        width={50}
        height={50}
      />
      <span>
        {daily.temp.min.toFixed(0)}° / {daily.temp.max.toFixed(0)}°
      </span>
      <p>{moment.unix(daily.dt).format("DD ddd")}</p>
    </div>
  );
};

export default DailyWeatherCard;
