import styled from "styled-components";

export const FlexContainer = styled.div`
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  max-height: 100%;
  font-size: 28px;
  line-height: 40px;
  text-align: center;
  @media (min-height: 700px) {
    min-height: 700px;
  }
`;

export const Flex1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  font-weight: 700;
  align-items: center;
  height: 80px;
`;
