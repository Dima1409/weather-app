import { useState, useEffect } from "react";
import { ThemeContext } from "components/ThemeContext/ThemeContext";
import { ThemeProvider } from "styled-components";
import { themes } from "utils/theme";
import Container from "components/Container";
import SearchForm from "components/SearchForm";
import Header from "components/Header";
import { baseSearch } from "Services/api";
import Location from "components/Location";
import { SpinnerCircular } from "spinners-react";
import { ISearchData } from "types/data";
import { Global } from "./App.styled";
import AdditionalData from "components/AdditionalData/AdditionalData";
// import NextDaysData from "components/NextDaysData/NextDaysData";

function App(): JSX.Element {
  const [currentTheme, setCurrentTheme] = useState(
    JSON.parse(localStorage.getItem("themeMode") as string) || themes.light
  );
  const switchTheme = () => {
    const nextTheme =
      currentTheme.name === "light" ? themes.dark : themes.light;
    setCurrentTheme(nextTheme);
    localStorage.setItem("themeMode", JSON.stringify(nextTheme));
  };
  const [result, setResult] = useState<ISearchData>();

  const [searchValue, setSearchValue] = useState<string>(
    localStorage.getItem("weather-value") || ""
  );
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (
      searchValue === "" ||
      searchValue.toLowerCase() === result?.name.toLowerCase()
    ) {
      return;
    }
    async function getLocation() {
      setLoading(true);
      try {
        const data: ISearchData = await baseSearch(searchValue);
        localStorage.setItem("weather-value", searchValue);
        setResult(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getLocation();
  }, [result?.name, searchValue]);
  const handleFormSubmit = (value: string): void => {
    reset();
    setSearchValue(value);
  };

  const reset = (): void => {
    setResult(undefined);
    setSearchValue("");
  };
  return (
    <ThemeProvider theme={currentTheme}>
      <ThemeContext.Provider value={{ currentTheme, switchTheme }}>
        <Header>
          <SearchForm onSubmit={handleFormSubmit} />
        </Header>
        <Container>
          <Global />
          {loading ? (
            <SpinnerCircular
              color={currentTheme.accent}
              secondaryColor={currentTheme.background}
              style={{ display: "block", margin: "0 auto" }}
            />
          ) : result ? (
            <>
              <Location results={result} />
              <AdditionalData></AdditionalData>
              {/* <NextDaysData></NextDaysData> */}
            </>
          ) : (
            <>There are not result, please try again</>
          )}
        </Container>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
