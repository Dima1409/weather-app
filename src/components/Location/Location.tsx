import { ISearchData } from "types/data";
import {
  LocationWrapper,
  CityWrapper,
  Image,
  Description,
  CityMain,
  DescriptionWrapper,
  TextInfo,
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
              <TextInfo>
                (FEELS LIKE {main.feels_like.toFixed(1)} °C)
              </TextInfo>
              <CityMain>
                {weather[0].description.charAt(0).toUpperCase() +
                  weather[0].description.slice(1)}
              </CityMain>
            </CityWrapper>
          </LocationWrapper>
          <DescriptionWrapper>
            <Description>
              <TextInfo>PRESSURE</TextInfo>
              <TextInfo>{main.pressure} hPa</TextInfo> 
            </Description>
            <Description>
              <TextInfo>HUMIDITY</TextInfo>
              <TextInfo>{main.humidity} %</TextInfo> 
            </Description>
            <Description>
              <TextInfo>WIND</TextInfo>
              <TextInfo>{wind.speed} m/s</TextInfo> 
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
              <TextInfo
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <GiSunrise size={"40px"} />
                <TextInfo>
                  {new Date(sys.sunrise * 1000).toLocaleString().slice(12, 24)}
                </TextInfo>
              </TextInfo>{" "}
              <TextInfo
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <GiSunset size={"40px"} />
                <TextInfo>
                  {new Date(sys.sunset * 1000).toLocaleString().slice(12, 24)}
                </TextInfo>
              </TextInfo>{" "}
            </Description>
          </DescriptionWrapper>
        </>
      )}
    </>
  );
};
export default Location;
