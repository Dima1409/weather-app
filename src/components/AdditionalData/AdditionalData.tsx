import { LoadInfo, LoadDate, LoadTemp, Image } from "./AdditionalData.styled";
import { useState, useEffect } from "react";
import { ISearchFiveDays } from "types/data";
import { searchFiveDays } from "Services/api";
import Slider from "react-slick";
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AdditionalData: React.FC = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
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
        console.log(dataFiveDays);
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
      <Slider {...settings}>
        {searchFive?.list.slice(0, 10).map((elem) => {
          return (
            <LoadInfo key={elem.dt}>
              <LoadDate>{elem.dt_txt.slice(5, elem.dt_txt.length-3)}</LoadDate>
              <LoadTemp>{elem.main.temp.toFixed(1)} °C</LoadTemp>
              <Image
                src={`${urlIcon}${elem.weather[0].icon}.png`}
                alt={elem.weather[0].icon}
              ></Image>
            </LoadInfo>
          );
        })}
      </Slider>
    </>
    
   
  );
};

export default AdditionalData;
