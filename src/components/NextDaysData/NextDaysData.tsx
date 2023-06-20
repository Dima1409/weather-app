import React, { useState, useEffect } from "react";
import { ISearchFiveDays } from "types/data";
import { searchFiveDays } from "Services/api";
import {
  LoadDate,
  LoadInfo,
  LoadTemp,
  SliderWrapper,
} from "../AdditionalData/AdditionalData.styled";
import { MinMaxTemp } from "./NextDays.styled";
import { SpinnerCircular } from "spinners-react";

const NextDaysData: React.FC = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 3000,
  };

  const currentDate = new Date();
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

  const getFilteredData = (offset: number) => {
    const targetDate = new Date(
      currentDate.getTime() + 86400000 * (offset + 1)
    );
    return searchFive?.list.filter((elem) => {
      const elemDate = new Date(elem.dt_txt).getDate();
      return elemDate === targetDate.getDate();
    });
  };

  const renderWeatherInfo = (offset: number) => {
    const filteredData = getFilteredData(offset);
    const temperatures = filteredData?.map((item) => item.main.temp);
    const minTemp = temperatures ? Math.min(...temperatures) : undefined;
    const maxTemp = temperatures ? Math.max(...temperatures) : undefined;
    const rain: string[] | undefined = filteredData?.map(
      (item) => item.weather[0].description
    );
    const percentRain: number | undefined = rain?.filter((count) =>
      count.includes("rain")
    ).length;
    const b: number =
      percentRain && rain ? (percentRain * 100) / rain.length : 0;

    // const urlIcon = process.env.REACT_APP_ICON_URL;
    return (
      <LoadInfo>
        <LoadDate>
          {new Date(
            currentDate.getTime() + 86400000 * (offset + 1)
          ).toLocaleDateString()}
          <span>
            (
            {new Date(
              new Date().getTime() + 86400000 * (offset + 1)
            ).toLocaleString("en-US", { weekday: "long" })}
            )
          </span>
        </LoadDate>
        <LoadTemp>
           <MinMaxTemp>Chance of rain:</MinMaxTemp>{b.toFixed()} %
        </LoadTemp>
        {temperatures ? (
          <>
            <LoadTemp>
              <MinMaxTemp>Max:</MinMaxTemp> {maxTemp?.toFixed(1)} °C
            </LoadTemp>
            <LoadTemp>
              <MinMaxTemp>Min:</MinMaxTemp> {minTemp?.toFixed(1)} °C
            </LoadTemp>
          </>
        ) : (
          <SpinnerCircular
            style={{ display: "block", margin: "0 auto" }}
          ></SpinnerCircular>
        )}
      </LoadInfo>
    );
  };

  return (
    <SliderWrapper {...settings}>
      {renderWeatherInfo(0)}
      {renderWeatherInfo(1)}
      {renderWeatherInfo(2)}
      {renderWeatherInfo(3)}
      {renderWeatherInfo(4)}
    </SliderWrapper>
  );
};

export default NextDaysData;
