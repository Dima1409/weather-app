import { useTranslation } from "react-i18next";
import {
  Welcome,
  WelcomeTitle,
  WelcomeList,
  WelcomeListItem,
  WelcomeUsing
} from "./WelcomeApp.styled";

const WelcomeApp: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Welcome>
      <WelcomeTitle>{t('main.welcome')}</WelcomeTitle>
      <WelcomeList>
        <WelcomeListItem>{t('main.locale')}</WelcomeListItem>
        <WelcomeListItem>{t('main.info')}</WelcomeListItem>
        <WelcomeListItem>{t('main.infoThreeHours')}</WelcomeListItem>
        <WelcomeListItem>{t('main.infoNextFiveDays')}</WelcomeListItem>
      </WelcomeList>
      <WelcomeUsing>{t('main.using')}</WelcomeUsing>
    </Welcome>
  );
};

export default WelcomeApp;
