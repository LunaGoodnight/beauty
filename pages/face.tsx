import { Header } from "../common/Header";

import { Body } from "../common/Body";
import { FaceLeftNav } from "../common/FaceLeftNav";
import { BodyWrapper } from "../styles/common";

const face = () => {
  return (
    <div>
      <Header />
      <BodyWrapper>
        <FaceLeftNav /> <div>臉要好看，別人才會看你的臉。</div>
      </BodyWrapper>
    </div>
  );
};

export default face;
