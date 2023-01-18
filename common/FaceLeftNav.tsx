import styled from "styled-components";
import Link from "next/link";

const LeftNavWrapper = styled.div`
  width: 30%;
`;

const List = styled.ul`
  li {
    width: 100%;
    padding: 1rem 0;
  }
`;

export const FaceLeftNav = () => {
  return (
    <LeftNavWrapper>
      <List>
        <li>
          <Link href="/facelift">拉皮</Link>
        </li>
      </List>
    </LeftNavWrapper>
  );
};
