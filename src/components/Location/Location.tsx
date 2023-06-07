import { SearchData } from "types/data";
import { Description } from "./Location.styled";

interface LocationProps {
  results: SearchData;
}

const Location: React.FC<LocationProps> = ({ results }) => {
  const { name, main, sys, weather, wind } = results;

  return (
    <>
      {results && (
        <div>
          <Description>
            city: {name}({sys.country})
          </Description>
          <Description>temp: {main.temp.toFixed(1)}</Description>
          <Description>pressure: {main.pressure}</Description>
          <Description>humidity: {main.humidity}</Description>
          <Description>weather: {weather[0].description}</Description>
          <Description>windy: {wind.speed}</Description>
        </div>
      )}
    </>
  );
};
export default Location;
