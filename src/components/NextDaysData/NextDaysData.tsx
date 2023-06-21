import React, { useState, useEffect, ReactNode } from "react";
import { ISearchFiveDays } from "types/data";
import { searchFiveDays } from "Services/api";
import {
  LoadInfo,
  SliderWrapper,
} from "../AdditionalData/AdditionalData.styled";
import {
  MainDate,
  DayOfWeek,
  Rain,
  MinMaxTemp,
  Image,
  IconLow,
  IconMax,
  IconWind,
  FewDaysWrapper,
} from "./NextDays.styled";
import { SpinnerCircular } from "spinners-react";

const NextDaysData: React.FC = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    autoplaySpeed: 3000,
  };

  const currentDate = new Date();
  const [searchFive, setSearchFive] = useState<ISearchFiveDays>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function getAdditional() {
      setLoading(true);
      try {
        const dataFiveDays: ISearchFiveDays = await searchFiveDays(
          localStorage.getItem("weather-value") || ""
        );
        setSearchFive(dataFiveDays);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
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
    const countRain: number | undefined = rain?.filter((count) =>
      count.includes("rain")
    ).length;
    const changeOfRain: number =
      countRain && rain ? (countRain * 100) / rain.length : 0;

    const cloudiness: number[] | undefined = filteredData?.map(
      (item) => item.clouds.all
    );
    const accCloudiness: number | undefined = cloudiness?.reduce(
      (acc, currentValue) => acc + currentValue,
      0
    );
    const percentCloudiness: number | undefined =
      accCloudiness && cloudiness
        ? accCloudiness / cloudiness.length
        : undefined;

    const wind: number[] | undefined = filteredData?.map(
      (item) => item.wind.speed
    );
    const minSpeed = wind ? Math.min(...wind) : undefined;
    const maxSpeed = wind ? Math.max(...wind) : undefined;
    const urlIcon = process.env.REACT_APP_ICON_URL;

    const renderCloudIcon = (): ReactNode => {
      const percentC: number | undefined = Number(percentCloudiness?.toFixed());
      switch (true) {
        case percentC <= 20:
          return <Image src={`${urlIcon}01d.png`} alt="clear sky" />;
        case percentC <= 40:
          return <Image src={`${urlIcon}02d.png`} alt="few clouds" />;
        case percentC <= 80:
          return <Image src={`${urlIcon}03d.png`} alt="clouds" />;
        case percentC >= 81:
          return <Image src={`${urlIcon}04d.png`} alt="broken clouds" />;
        default:
          return null;
      }
    };

    return (
      <LoadInfo>
        <div>
          <MainDate>
            {new Date(currentDate.getTime() + 86400000 * (offset + 1))
              .toLocaleDateString()
              .slice(0, 5)}
          </MainDate>

          <DayOfWeek>
            {new Date(
              new Date().getTime() + 86400000 * (offset + 1)
            ).toLocaleString("en-US", { weekday: "long" })}
          </DayOfWeek>
        </div>
        <Rain>Rain: {changeOfRain.toFixed()} %</Rain>
        <div>{renderCloudIcon()}</div>
        {loading ? (
          <SpinnerCircular
            style={{ display: "block", margin: "0 auto" }}
          ></SpinnerCircular>
        ) : (
          <>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <FewDaysWrapper>
                <IconLow size={20}></IconLow>
                <MinMaxTemp>{minTemp?.toFixed(1)} °C</MinMaxTemp>
              </FewDaysWrapper>
              <FewDaysWrapper>
                <IconMax size={20}></IconMax>
                <MinMaxTemp>{maxTemp?.toFixed(1)} °C</MinMaxTemp>
              </FewDaysWrapper>
            </div>
            <FewDaysWrapper>
              <IconWind size={20}></IconWind>
              <MinMaxTemp>
                {minSpeed?.toFixed(1)}...{maxSpeed?.toFixed(1)} m/s
              </MinMaxTemp>
            </FewDaysWrapper>
          </>
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
