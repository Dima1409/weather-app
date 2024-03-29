import { ISearchFiveDays } from "types/data";
import { useMediaQuery } from "react-responsive";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { breakpoints } from "utils/theme";
import { useTranslation } from "react-i18next";
import {
  LoadInfo,
  SliderWrapper,
  LoadDate,
  LoadTemp,
  Image,
  Day
} from "./AdditionalData.styled";
import { sliderSettings } from "utils/sliderSettings";

interface AdditionalDataProps {
  results: ISearchFiveDays | undefined;
}

const AdditionalData: React.FC<AdditionalDataProps> = ({results}) => {
  const { t } = useTranslation();
  const isSmallScreen = useMediaQuery({
    query: `(max-width: ${breakpoints.tab}px)`,
  });
  const isLargeScreen = useMediaQuery({
    query: `(max-width: ${breakpoints.desk}px)`,
  });

  let slidesToShow = 5;
  let slidesToScroll = 5;

  if (isSmallScreen) {
    slidesToShow = 3;
    slidesToScroll = 3;
  } else if (isLargeScreen) {
    slidesToShow = 4;
    slidesToScroll = 4;
  }

  const settings = sliderSettings(slidesToShow, slidesToScroll);

  const urlIcon = process.env.REACT_APP_ICON_URL;
  const currentDate = Number(new Date().toLocaleDateString().slice(0, 2));

  return (
    <>
      <SliderWrapper {...settings}>
        {results?.list.slice(0, 10).map((elem) => {
          return (
            <LoadInfo key={elem.dt}>
              <LoadDate>
                {currentDate === Number(elem.dt_txt.slice(8, 10)) ? (
                  <div>
                    <Day>{t("main.day.today")}</Day>
                    <span>{elem.dt_txt.slice(10, elem.dt_txt.length - 3)}</span>
                  </div>
                ) : (
                  <div>
                    <Day>{t("main.day.tomorrow")}</Day>
                    <span>{elem.dt_txt.slice(10, elem.dt_txt.length - 3)}</span>
                  </div>
                )}
              </LoadDate>
              <LoadTemp>{elem.main.temp.toFixed(1)} °C</LoadTemp>
              {isSmallScreen ? <Image
                src={`${urlIcon}${elem.weather[0].icon}.png`}
                alt={elem.weather[0].icon}
              ></Image> : <Image
              src={`${urlIcon}${elem.weather[0].icon}@2x.png`}
              alt={elem.weather[0].icon}
            ></Image>}
              
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
