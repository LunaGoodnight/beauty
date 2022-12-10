import styled from "styled-components";

const HeaderWrapper = styled.header`
  width: 100%;
  height: calc(100% - 30rem);
  background: aquamarine;
`;

export const Header = () => {
  return <HeaderWrapper>I am header</HeaderWrapper>;
};
