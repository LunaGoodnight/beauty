import styled from "styled-components";
import Link from "next/link";

const HeaderWrapper = styled.header`
  width: 100%;
  height: 10rem;
  background-color: #dcdce6;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`;

const LinkItem = styled.div`
  color: royalblue;
  display: block;
`;

const Logo = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: royalblue;
`;
const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  font-size: 1rem;
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>
        <Link href="/">醫美人造人</Link>{" "}
      </Logo>
      <Nav>
        <LinkItem>
          <Link href="/breast">巨乳</Link>
        </LinkItem>
        <LinkItem>
          <Link href="/face">臉部</Link>
        </LinkItem>
      </Nav>
    </HeaderWrapper>
  );
};
