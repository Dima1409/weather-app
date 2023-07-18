import { useState, useEffect } from "react";
import { baseSearch, searchFiveDays } from "Services/api";
import { ThemeContext } from "components/ThemeContext/ThemeContext";
import { ThemeProvider } from "styled-components";
import { themes } from "utils/theme";
import { SpinnerCircular } from "spinners-react";
import { ISearchData, ISearchFiveDays } from "types/data";
import { Global } from "./App.styled";
import Container from "components/Container";
import SearchForm from "components/SearchForm";
import Header from "components/Header";
import Location from "components/Location";
import AdditionalData from "components/AdditionalData";
import NextDaysData from "components/NextDaysData";
import ChangeLanguage from "components/ChangeLanguage/ChangeLanguage";
import NoResults from "components/NoResults/NoResults";
import WelcomeApp from "components/WelcomeApp/WelcomeApp";

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(
    JSON.parse(localStorage.getItem("themeMode") as string) || themes.light
  );
  const [result, setResult] = useState<ISearchData>();
  const [resFiveDays, setResFiveDays] = useState<ISearchFiveDays>();
  const [searchValue, setSearchValue] = useState<string>(
    localStorage.getItem("weather-value") || ""
  );
  const [searchLang, setSearchLang] = useState<string>(
    localStorage.getItem("weather-lang") || "en"
  );
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (searchValue === "") {
      return;
    }
    const getLocation = async () => {
      setLoading(true);
      try {
        const data: ISearchData = await baseSearch(searchValue, searchLang);
        localStorage.setItem("weather-value", searchValue);
        const dataFiveDays: ISearchFiveDays = await searchFiveDays(
          searchValue,
          searchLang
        );
        setResult(data);
        setResFiveDays(dataFiveDays);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getLocation();
  }, [searchValue, searchLang]);
  const switchTheme = () => {
    const nextTheme =
      currentTheme.name === "light" ? themes.dark : themes.light;
    setCurrentTheme(nextTheme);
    localStorage.setItem("themeMode", JSON.stringify(nextTheme));
  };

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
          <ChangeLanguage
            lang={searchLang}
            onChangeLanguage={setSearchLang}
          ></ChangeLanguage>
        </Header>
        <Container>
          <Global />
          {!searchValue && <WelcomeApp />}
          {loading ? (
            <SpinnerCircular
              size={90}
              color={currentTheme.text}
              secondaryColor={currentTheme.background}
              style={{ display: "block", margin: "160 auto" }}
            />
          ) : result && searchValue ? (
            <>
              <Location results={result} />
              <AdditionalData results={resFiveDays} />
              <NextDaysData results={resFiveDays} />
            </>
          ) : (
            !result && searchValue && <NoResults />
          )}
        </Container>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default App;
