import { WrapperLang, Lang, Ua, Us } from "./ChangeLanguage.styled";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface LanguageProps {
  lang: string;
  onChangeLanguage: (lang: string) => void;
}

const ChangeLanguage: React.FC<LanguageProps> = ({
  lang,
  onChangeLanguage,
}) => {
  const { i18n } = useTranslation();
  const [searchLang, setSearchLang] = useState<string>(lang);

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = event.target.value;
    setSearchLang(selected);
    onChangeLanguage(selected);
    i18n.changeLanguage(selected);
    localStorage.setItem("weather-lang", selected);
  };
  return (
    <WrapperLang>
    {searchLang==="ua"? <Ua/> : <Us/>}
      <Lang value={searchLang} onChange={changeLanguage}>
        <option value="ua">ua</option>
        <option value="en">en</option>
      </Lang>
    </WrapperLang>
  );
};

export default ChangeLanguage;
