import styled from "styled-components";
import Slider from "react-slick"

const LoadInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  font-size: 12px;
  border-radius: 10px;
  background-color: ${(props)=>props.theme.background};
  min-height: 140px;
`;
const SliderWrapper = styled(Slider)`
overflow: hidden;
margin: 0 1px;
& > div > div {
display: flex;
justify-content: space-between;
& > div {
  margin: 0 2px;
}
}
`
const LoadDate = styled.p`
color: ${(props) => props.theme.text};
margin: 0;
padding: 2px;
text-align: center;
`

const LoadTemp = styled(LoadDate)`
font-size: 20px;
`

const Image = styled.img`
  display: block;
  margin: 0 auto;
`;

export { LoadInfo, SliderWrapper, LoadDate,LoadTemp, Image };
