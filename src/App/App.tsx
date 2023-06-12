import { useState, useEffect } from "react";
import { ThemeContext } from "components/ThemeContext/ThemeContext";
import { ThemeProvider } from "styled-components";
import { themes } from "utils/theme";
import Container from "components/Container";
import SearchForm from "components/SearchForm";
import Header from "components/Header";
import baseSearch from "Services/api";
import Location from "components/Location";
import { SpinnerCircular } from "spinners-react";
import { SearchData } from "types/data";

function App(): JSX.Element {
  const [currentTheme, setCurrentTheme] = useState(themes.light);
  const switchTheme = () => {
    const nextTheme =
      currentTheme.name === "light" ? themes.dark : themes.light;
    setCurrentTheme(nextTheme);
  };
  const [result, setResult] = useState<SearchData>();
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
        const data: SearchData = await baseSearch(searchValue);
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
          {loading ? (
            <SpinnerCircular
              color={currentTheme.accent}
              secondaryColor={currentTheme.background}
              style={{ display: "block", margin: "0 auto" }}
            />
          ) : (
            result && <Location results={result} />
          )}
        </Container>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;