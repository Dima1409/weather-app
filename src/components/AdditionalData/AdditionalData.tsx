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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AdditionalData: React.FC = () => {
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
  return (
    <>
      <SliderWrapper {...settings}>
        {searchFive?.list.slice(0, 10).map((elem) => {
          return (
            <LoadInfo key={elem.dt}>
              <LoadDate>
                {new Date()
                  .toLocaleDateString()
                  .slice(0, 5)
                  .split(".")
                  .reverse()
                  .join("-") === elem.dt_txt.slice(5, 10) ? (
                  <div>
                    <div>Today</div>
                    <div>{elem.dt_txt.slice(10, elem.dt_txt.length - 3)}</div>
                  </div>
                ) : (
                  <div>
                    <div>Tomorrow</div>
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
