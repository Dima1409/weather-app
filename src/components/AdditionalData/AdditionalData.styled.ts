import styled from "styled-components";

const LoadInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  font-size: 12px;
  border: 1px solid white;
  margin: 5px;
  border-top: none;
  border-bottom: none;
  background-color: ${(props)=>props.theme.background};
  min-height: 120px;
`;

const LoadDate = styled.p`
color: white;
margin: 0;
text-align: center;
`

const LoadTemp = styled(LoadDate)`
font-size: 24px;
`

const Image = styled.img`
  display: block;
  margin: 0 auto;
`;

export { LoadInfo, LoadDate,LoadTemp, Image };
