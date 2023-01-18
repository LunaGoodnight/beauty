import { Header } from "../common/Header";
import { clinicList } from "../config/clinicList";
import { Body } from "../common/Body";

const clinic = () => {
  return (
    <div>
      <Header />
      <Body>
        <div>
          {clinicList.map(({ name, services, district, link }, i) => {
            return (
              <div key={i}>
                <div>{name}</div>
                <div>{district}</div>
              </div>
            );
          })}
        </div>
      </Body>
    </div>
  );
};

export default clinic;
