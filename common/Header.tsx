import styled from "styled-components";
import Link from "next/link";

const HeaderWrapper = styled.header`
  width: 100%;
  height: 10rem;
  background: darkgoldenrod;
  display: flex;
`;

export const Header = () => {
  return (
    <HeaderWrapper>


        <Link href="/breast">巨乳</Link>

    </HeaderWrapper>
  );
};
