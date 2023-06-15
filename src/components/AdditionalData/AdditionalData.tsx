import {
  DescriptionWrapper,
  Description,
} from "components/Location/Location.styled";
import { useState, useEffect } from "react";
import { ISearchFiveDays } from "types/data";
import { searchFiveDays } from "Services/api";

const AdditionalData: React.FC = () => {
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
  return (
    <DescriptionWrapper>
      {searchFive?.list.map((elem) => {
        return (
          <Description key={elem.dt}>
            <p>Time: {elem.dt_txt.slice(5)}</p>
            <p>Temperature: {elem.main.temp}</p>
          </Description>
        );
      })}
    </DescriptionWrapper>
  );
};

export default AdditionalData;
