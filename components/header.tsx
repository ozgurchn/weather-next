import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "styles/Home.module.css";
import Select from "react-select";
import Cities from "../city.list.json";

interface weatherData { 
  value: string;
  label: string;
  coord: {
    lat: string;
    lon: string;
  }
}

const Header = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState<weatherData | undefined>();
  const [options, setOptions] = useState([]);

  const searchHandler = (value: string) => {
    if (value.length > 3) {
      const _options: any = [];
      //@ts-ignore
      const filteredValue = Cities?.filter((city) => city.name.includes(value));
      filteredValue?.forEach((city: any) => {
        _options.push({
          value: city.id,
          label: city.name,
          coord: city.coord
        });
      });
      setOptions(_options);
    }
  };

  const selectChangeHandler = async (value: any) => {
    setSearchValue(value);
    if (value) {
      await router.push({
        pathname: "/detail",
        query: {
          lat: value.coord.lat,
          lon: value.coord.lon,
          title: value.label
        },
      });
      setSearchValue(undefined);
    }
  }

  return (
    <header className={styles.header}>
      <Link href={'/'}>
        <a style={{flex: 1}}>
          <h4 className={styles.title}>WeatherPP !!</h4>
        </a>
      </Link>
      <div className={styles.searchbar}>
        <Select
          className={styles.searchInput}
          placeholder={"Search City"}
          value={searchValue}
          inputValue={searchValue?.label}
          hasValue
          onInputChange={(value) => searchHandler(value)}
          onChange={(value) => selectChangeHandler(value)}
          options={options}
          isSearchable
          isClearable
          name="weather"
        />
      </div>
      <div className={styles.profile}>
        <div className={styles.user} />
        <span>Ozgur Cihan</span>
      </div>
    </header>
  );
};

export default Header;
