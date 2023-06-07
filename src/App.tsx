import { useState, useEffect } from "react";
import Container from "components/Container";
import SearchForm from "components/SearchForm";
import Header from "components/Header";
import baseSearch from "Services/api";
import Location from "components/Location";
import { SearchData } from "types/data";

function App(): JSX.Element {
  const [result, setResult] = useState<SearchData>();
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    if (
      searchValue === "" ||
      searchValue.toLowerCase() === result?.name.toLowerCase()
    ) {
      return;
    }
    async function getLocation() {
      try {
        const data: SearchData = await baseSearch(searchValue);
        console.log(data);
        setResult(data);
      } catch (error) {
        console.log(error);
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
      <Container>{result && <Location results={result} />}</Container>
    </>
  );
}

export default App;
