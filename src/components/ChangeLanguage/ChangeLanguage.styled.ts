import styled from "styled-components";
import { ReactComponent as Ukr } from '../../assets/images/ukr.svg';
import { ReactComponent as Usa } from '../../assets/images/usa.svg';

const WrapperLang = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

const Lang = styled.select`
  border: none;
  padding: 2px 1px;
  border-radius: 8px;
`;
const Icon = styled.svg`
  width: 14px;
  height: 14px;
  margin-right: 3px;
`;

const Ua = styled(Icon).attrs({
  as: Ukr,
})``;
const Us = styled(Icon).attrs({
  as: Usa,
})``;

export { WrapperLang, Lang, Ua, Us };
