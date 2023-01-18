import { Header } from "../common/Header";
import { FaceLeftNav } from "../common/FaceLeftNav";
import { Body } from "../common/Body";
import { BodyWrapper } from "../styles/common";

const facelift = () => {
  return (
    <div>
      <Header />
      <BodyWrapper>
        <FaceLeftNav />
        臉要好看，別人才會看你的臉。
      </BodyWrapper>
    </div>
  );
};

export default facelift;
