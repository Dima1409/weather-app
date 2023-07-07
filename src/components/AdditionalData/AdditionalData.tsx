import {
  LoadInfo,
  SliderWrapper,
  LoadDate,
  LoadTemp,
  Image,
} from "./AdditionalData.styled";
import { useState, useEffect } from "react";
import { ISearchFiveDays } from "types/data";
import { searchFiveDays } from "Services/api";
import React from "react";
import { useMediaQuery } from "react-responsive";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { breakpoints } from "utils/theme";
import { useTranslation } from "react-i18next";

const AdditionalData: React.FC = () => {
  const [searchFive, setSearchFive] = useState<ISearchFiveDays>();
  const { t } = useTranslation();
  const isSmallScreen = useMediaQuery({ query: `(max-width: ${breakpoints.mob}px)` });
  const isMediumScreen = useMediaQuery({ query: `(max-width: ${breakpoints.tab}px)` });

  let slidesToShow=5;
  let slidesToScroll=4;

  if (isSmallScreen) {
    slidesToShow = 3;
    slidesToScroll = 2;
  } else if (isMediumScreen) {
    slidesToShow = 4;
    slidesToScroll = 3;
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    arrows: false,
    autoplaySpeed: 3000,
  };
  
  useEffect(() => {
    async function getAdditional() {
      const value = localStorage.getItem("weather-value") || "";
      const lang = localStorage.getItem("weather-lang");
      try {
        const dataFiveDays: ISearchFiveDays = await searchFiveDays(value, lang ||'en');
        setSearchFive(dataFiveDays);
      } catch (error) {
        console.log(error);
      }
    }
    getAdditional();
  }, []);

  const urlIcon = process.env.REACT_APP_ICON_URL;
  const currentDate = Number(new Date().toLocaleDateString().slice(0, 2));
  
  return (
    <>
      <SliderWrapper {...settings}>
        {searchFive?.list.slice(0, 10).map((elem) => {
          return (
            <LoadInfo key={elem.dt}>
              <LoadDate>
                {currentDate === Number(elem.dt_txt.slice(8, 10)) ? (
                  <div>
                    <div>{t('main.day.today')}</div>
                    <div>{elem.dt_txt.slice(10, elem.dt_txt.length - 3)}</div>
                  </div>
                ) : (
                  <div>
                    <div>{t('main.day.tomorrow')}</div>
                    <div>{elem.dt_txt.slice(10, elem.dt_txt.length - 3)}</div>
                  </div>
                )}
              </LoadDate>
              <LoadTemp>{elem.main.temp.toFixed(1)} °C</LoadTemp>
              <Image
                src={`${urlIcon}${elem.weather[0].icon}.png`}
                alt={elem.weather[0].icon}
              ></Image>
              <LoadDate>
                {elem.weather[0].description.charAt(0).toUpperCase() +
                  elem.weather[0].description.slice(1)}
              </LoadDate>
            </LoadInfo>
          );
        })}
      </SliderWrapper>
    </>
  );
};

export default AdditionalData;
