import { Header } from "../common/Header";
import { clinicList } from "../config/clinicList";
import { Body } from "../common/Body";
import styled from "styled-components";

const ClinicListWrapper = styled.ul`
  li {
    padding: 1rem 0;
  }
`;

const clinic = () => {
  return (
    <div>
      <Header />
      <Body>
        <ClinicListWrapper>
          {clinicList.map(({ name, services, district, link }, i) => {
            return (
              <li key={i}>
                <div>{name}</div>
                <div>{district}</div>
              </li>
            );
          })}
        </ClinicListWrapper>
      </Body>
    </div>
  );
};

export default clinic;
