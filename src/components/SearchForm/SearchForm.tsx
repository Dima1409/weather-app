import { useState } from "react";
import { Form, InputForm, BtnSubmit } from "./SearchForm.styled";

interface FormProps {
  onSubmit: (query: string) => void;
}

const SearchForm: React.FC<FormProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value.toLowerCase());
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onSubmit(query);
    setQuery("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputForm
        type="text"
        value={query}
        name="value"
        onChange={handleChange}
        placeholder="Chose location"
      />
      <BtnSubmit type="submit" disabled={query.trim() === ""}>
        Search
      </BtnSubmit>
    </Form>
  );
};

export default SearchForm;
