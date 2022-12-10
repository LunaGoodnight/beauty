import styled from "styled-components";
import Link from "next/link";

const HeaderWrapper = styled.header`
  width: 100%;
  height: 10rem;
  background: darkgoldenrod;
  display: flex;
  justify-content: space-between;
`;

const LinkItem = styled.div`
  color: royalblue;
  display: block;
  font-size: 2.9rem;
`;
export const Header = () => {
  return (
    <HeaderWrapper>
      <LinkItem>
        <Link href="/">Logo</Link>{" "}
      </LinkItem>
      <nav>
        <LinkItem>
          <Link href="/breast">巨乳</Link>
        </LinkItem>
      </nav>
    </HeaderWrapper>
  );
};
