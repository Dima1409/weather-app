import { useTranslation } from "react-i18next";
import { InfoSearch, ImageNotFound } from "./NoResults.styled";
import image from '../../assets/images/no-results.png';

const NoResults: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
    <InfoSearch>{t("main.noResults")}</InfoSearch>
    <ImageNotFound src={image} alt='not found'></ImageNotFound>
    </>
    
  )
};

export default NoResults;
