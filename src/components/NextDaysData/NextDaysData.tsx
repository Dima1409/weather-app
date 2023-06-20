// import { useState, useEffect } from "react";
// import { ISearchFiveDays } from "types/data";
// import { searchFiveDays } from "Services/api";
// import {
//   LoadDate,
//   LoadInfo,
//   LoadTemp,
//   SliderWrapper,
// } from "../AdditionalData/AdditionalData.styled";
// import { MinMaxTemp } from "./NextDays.styled";
// import React from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const NextDaysData: React.FC = () => {
//   const settings = {
//     dots: true,
//     infinite: false,
//     speed: 1000,
//     slidesToShow: 3,
//     slidesToScroll: 2,
//     arrows: false,
//     autoplaySpeed: 3000,
//   };
//   const [searchFive, setSearchFive] = useState<ISearchFiveDays>();
//   useEffect(() => {
//     async function getAdditional() {
//       try {
//         const dataFiveDays: ISearchFiveDays = await searchFiveDays(
//           localStorage.getItem("weather-value") || ""
//         );
//         setSearchFive(dataFiveDays);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     getAdditional();
//   }, []);
//   // const urlIcon = process.env.REACT_APP_ICON_URL;
//   const currentDate = new Date().toLocaleDateString().slice(0, 2);
//   const dayFirst = searchFive?.list.filter((elem) => {
//     const elemDate = elem.dt_txt.slice(8, 10);
//     return Number(elemDate) === Number(currentDate) + 1;
//   });
//   const daySecond = searchFive?.list.filter((elem) => {
//     const elemDate = elem.dt_txt.slice(8, 10);
//     return Number(elemDate) === Number(currentDate) + 2;
//   });
//   const dayThird = searchFive?.list.filter((elem) => {
//     const elemDate = elem.dt_txt.slice(8, 10);
//     return Number(elemDate) === Number(currentDate) + 3;
//   });
//   const dayFourth = searchFive?.list.filter((elem) => {
//     const elemDate = elem.dt_txt.slice(8, 10);
//     return Number(elemDate) === Number(currentDate) + 4;
//   });
//   const dayFive = searchFive?.list.filter((elem) => {
//     const elemDate = elem.dt_txt.slice(8, 10);
//     return Number(elemDate) === Number(currentDate) + 5;
//   });

//   const temperatures = dayFirst?.map((item) => item.main.temp);
//   const temperatures2 = daySecond?.map((item) => item.main.temp);
//   const temperatures3 = dayThird?.map((item) => item.main.temp);
//   const temperatures4 = dayFourth?.map((item) => item.main.temp);
//   const temperatures5 = dayFive?.map((item) => item.main.temp);
//   const minTemp = temperatures ? Math.min(...temperatures) : undefined;
//   const maxTemp = temperatures ? Math.max(...temperatures) : undefined;
//   const minTemp2 = temperatures2 ? Math.min(...temperatures2) : undefined;
//   const maxTemp2 = temperatures2 ? Math.max(...temperatures2) : undefined;
//   const minTemp3 = temperatures3 ? Math.min(...temperatures3) : undefined;
//   const maxTemp3 = temperatures3 ? Math.max(...temperatures3) : undefined;
//   const minTemp4 = temperatures4 ? Math.min(...temperatures4) : undefined;
//   const maxTemp4 = temperatures4 ? Math.max(...temperatures4) : undefined;
//   const minTemp5 = temperatures5 ? Math.min(...temperatures5) : undefined;
//   const maxTemp5 = temperatures5 ? Math.max(...temperatures5) : undefined;
//   return (
//     <SliderWrapper {...settings}>
//       <LoadInfo>
//         <LoadDate>
//           {new Date(new Date().getTime() + 86400000).toLocaleDateString()}
//         </LoadDate>
//         <LoadTemp><MinMaxTemp>Max:</MinMaxTemp> {maxTemp?.toFixed(1)} °C</LoadTemp>
//         <LoadTemp><MinMaxTemp>Min:</MinMaxTemp> {minTemp?.toFixed(1)} °C</LoadTemp>
//       </LoadInfo>

//       <LoadInfo>
//         <LoadDate>
//           {new Date(new Date().getTime() + 86400000 * 2).toLocaleDateString()}
//         </LoadDate>
//         <LoadTemp><MinMaxTemp>Max:</MinMaxTemp> {maxTemp2?.toFixed(1)} °C</LoadTemp>
//         <LoadTemp><MinMaxTemp>Min:</MinMaxTemp> {minTemp2?.toFixed(1)} °C</LoadTemp>
//       </LoadInfo>

//       <LoadInfo>
//         <LoadDate>
//           {new Date(new Date().getTime() + 86400000 * 3).toLocaleDateString()}
//         </LoadDate>
//         <LoadTemp><MinMaxTemp>Max:</MinMaxTemp> {maxTemp3?.toFixed(1)} °C</LoadTemp>
//         <LoadTemp><MinMaxTemp>Min:</MinMaxTemp> {minTemp3?.toFixed(1)} °C</LoadTemp>
//       </LoadInfo>

//       <LoadInfo>
//         <LoadDate>
//           {new Date(new Date().getTime() + 86400000 * 4).toLocaleDateString()}
//         </LoadDate>
//         <LoadTemp><MinMaxTemp>Max:</MinMaxTemp> {maxTemp4?.toFixed(1)} °C</LoadTemp>
//         <LoadTemp><MinMaxTemp>Min:</MinMaxTemp> {minTemp4?.toFixed(1)} °C</LoadTemp>
//       </LoadInfo>

//       <LoadInfo>
//         <LoadDate>
//           {new Date(new Date().getTime() + 86400000 * 5).toLocaleDateString()}
//         </LoadDate>
//         <LoadTemp><MinMaxTemp>Max:</MinMaxTemp> {maxTemp5?.toFixed(1)} °C</LoadTemp>
//         <LoadTemp><MinMaxTemp>Min:</MinMaxTemp> {minTemp5?.toFixed(1)} °C</LoadTemp>
//       </LoadInfo>
//     </SliderWrapper>
//   );
// };

// export default NextDaysData;

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
