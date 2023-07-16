import { useState } from "react";
import { InputForm, BtnSubmit } from "./SearchForm.styled";
import { useTranslation } from "react-i18next";

interface FormProps {
  onSubmit: (query: string) => void;
}

const SearchForm: React.FC<FormProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState<string>("");
  const { t } = useTranslation();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value.toLowerCase());
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onSubmit(query);
    setQuery("");
  };

  return (
    <form style={{display: 'flex', justifyContent: 'space-between'}} onSubmit={handleSubmit}>
      <InputForm
        type="text"
        value={query}
        name="value"
        onChange={handleChange}
        placeholder={t("main.search.placeholder")}
      />
      <BtnSubmit type="submit" disabled={query.trim() === ""}>
      {t("main.search.search")}
      </BtnSubmit>
    </form>
  );
};

export default SearchForm;
