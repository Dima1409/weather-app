import { useState, useEffect } from "react";
import Container from "components/Container";
import SearchForm from "components/SearchForm";
import Header from "components/Header";
import baseSearch from "Services/api";
import Location from "components/Location";
import { SpinnerCircular } from "spinners-react";
import { SearchData } from "types/data";
import theme from "utils/theme";

function App(): JSX.Element {
  const [result, setResult] = useState<SearchData>();
  const [searchValue, setSearchValue] = useState<string>("");
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
        console.log(data);
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
    <>
      <Header>
        <SearchForm onSubmit={handleFormSubmit} />
      </Header>
      <Container>
        {loading ? (
          <SpinnerCircular
            color={theme.colors.accent}
            secondaryColor={theme.colors.background}
            style={{ display: "block", margin: "0 auto" }}
          />
        ) : (
          result && <Location results={result} />
        )}
      </Container>
    </>
  );
}

export default App;
