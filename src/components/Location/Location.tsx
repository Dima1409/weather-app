import { ISearchData } from "types/data";
import {
  LocationWrapper,
  CityWrapper,
  Image,
  Description,
  CityMain,
  DescriptionWrapper,
  SunInfo,
  TextInfo,
} from "./Location.styled";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { WiHumidity, WiStrongWind, WiBarometer} from "react-icons/wi";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";


interface LocationProps {
  results: ISearchData;
}

const Location: React.FC<LocationProps> = ({ results }) => {
  const { t } = useTranslation();
  const { name, main, sys, weather, wind } = results;
  const urlIcon = process.env.REACT_APP_ICON_URL;
  const iconLink = `${urlIcon}${weather[0].icon}@4x.png`;

  return (
    <Suspense fallback='loading...'>
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
                ({t('main.feels_like')} {main.feels_like.toFixed(1)} °C)
              </TextInfo>
              <CityMain>
                {weather[0].description.charAt(0).toUpperCase() +
                  weather[0].description.slice(1)}
              </CityMain>
            </CityWrapper>
          </LocationWrapper>
          <DescriptionWrapper>
            <Description>
            <WiBarometer size={"40px"} />
              <TextInfo>{t('main.pressure.press')}</TextInfo>
              <span>{Number(main.pressure*0.75).toFixed()} {t('main.pressure.mm')}</span> 
            </Description>
            <Description>
            <WiHumidity size={"40px"} />
              <TextInfo>{t('main.humidity')}</TextInfo>
              <span>{main.humidity} %</span> 
            </Description>
            <Description>
            <WiStrongWind size={"40px"} />
              <TextInfo>{t('main.wind.main')}</TextInfo>
              <span>{wind.speed} {t('main.wind.speed')}</span> 
            </Description>
          </DescriptionWrapper>
          <SunInfo> 
          <TextInfo>
                <GiSunrise size={"40px"} />
                <TextInfo>
                  {new Date(sys.sunrise * 1000).toLocaleString().slice(12, 24)}
                </TextInfo>
              </TextInfo>
              <TextInfo>
                <GiSunset size={"40px"} />
                <TextInfo>
                  {new Date(sys.sunset * 1000).toLocaleString().slice(12, 24)}
                </TextInfo>
              </TextInfo>
          </SunInfo>
             
        </>
      )}
    </Suspense>
  );
};
export default Location;
