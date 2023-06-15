import { ISearchData } from "types/data";
import {
  LocationWrapper,
  CityWrapper,
  Image,
  Description,
  CityMain,
  DescriptionWrapper,
} from "./Location.styled";
import { GiSunrise, GiSunset } from "react-icons/gi";

interface LocationProps {
  results: ISearchData;
}

const Location: React.FC<LocationProps> = ({ results }) => {
  const { name, main, sys, weather, wind } = results;
  const urlIcon = process.env.REACT_APP_ICON_URL;
  const iconLink = `${urlIcon}${weather[0].icon}@4x.png`;

  return (
    <>
      {results && (
        <>
          <LocationWrapper>
            <Image src={iconLink} alt={weather[0].description} />
            <CityWrapper>
              {" "}
              <CityMain>
                {name}({sys.country})
              </CityMain>
              <CityMain>{main.temp.toFixed(1)} °C</CityMain>
              <span style={{ color: "white" }}>
                (FEELS LIKE {main.feels_like.toFixed(1)} °C)
              </span>
              <CityMain>
                {weather[0].description.charAt(0).toUpperCase() +
                  weather[0].description.slice(1)}
              </CityMain>
            </CityWrapper>
          </LocationWrapper>
          <DescriptionWrapper>
            <Description>
              <span>PRESSURE</span> {main.pressure} hPa
            </Description>
            <Description>
              <span>HUMIDITY</span> {main.humidity} %
            </Description>
            <Description>
              <span>WIND</span> {wind.speed} m/s
            </Description>
          </DescriptionWrapper>
          <DescriptionWrapper>
            <Description
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "end",
                justifyContent: "space-between",
                padding: "0 20px 5px",
              }}
            >
              <span
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <GiSunrise size={"40px"} />
                <span>
                  {new Date(sys.sunrise * 1000).toLocaleString().slice(12, 24)}
                </span>
              </span>{" "}
              <span
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <GiSunset size={"40px"} />
                <span>
                  {new Date(sys.sunset * 1000).toLocaleString().slice(12, 24)}
                </span>
              </span>{" "}
            </Description>
          </DescriptionWrapper>
        </>
      )}
    </>
  );
};
export default Location;
