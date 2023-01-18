import styled from "styled-components";
import { BodyWrapper } from "../styles/common";

interface PageInitType {
  children: JSX.Element;
}

export const Body = ({ children }: PageInitType) => {
  return <BodyWrapper>{children}</BodyWrapper>;
};
