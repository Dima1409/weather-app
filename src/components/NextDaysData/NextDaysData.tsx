import { useState, useEffect } from "react";
import { ISearchFiveDays } from "types/data";
import { searchFiveDays } from "Services/api";
import {
  LoadInfo,
  SliderWrapper,
} from "../AdditionalData/AdditionalData.styled";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextDaysData: React.FC = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: false,
    autoplaySpeed: 3000,
  };
  const [searchFive, setSearchFive] = useState<ISearchFiveDays>();
  useEffect(() => {
    async function getAdditional() {
      try {
        const dataFiveDays: ISearchFiveDays = await searchFiveDays(
          localStorage.getItem("weather-value") || ""
        );
        setSearchFive(dataFiveDays);
      } catch (error) {
        console.log(error);
      }
    }
    getAdditional();
  }, []);
  const urlIcon = process.env.REACT_APP_ICON_URL;
  const currentDate = new Date().toLocaleDateString().slice(0, 2);
  const dayFirst = searchFive?.list.filter((elem) => {
    const elemDate = elem.dt_txt.slice(8, 10);
    return Number(elemDate) === Number(currentDate) + 1;
  });
  const daySecond = searchFive?.list.filter((elem) => {
    const elemDate = elem.dt_txt.slice(8, 10);
    return Number(elemDate) === Number(currentDate) + 2;
  });
  console.log("1", dayFirst);
  console.log("2", daySecond);
  return (
    <SliderWrapper {...settings}>
      {searchFive?.list.map((elem) => {
        return (
          <LoadInfo key={elem.dt}>
            <span>{elem.dt_txt.slice(5, elem.dt_txt.length - 8)}</span>
            <span>{elem.main.temp.toFixed(1)} °C</span>
            <img
              src={`${urlIcon}${elem.weather[0].icon}.png`}
              alt={elem.weather[0].icon}
            ></img>
          </LoadInfo>
        );
      })}
    </SliderWrapper>
  );
};

export default NextDaysData;
