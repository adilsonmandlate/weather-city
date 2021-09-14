import { FC } from "react";
import styled from "styled-components";

type CardStyleProps = {
  big?: boolean;
};

type CardProps = {
  big?: boolean;
};

const Container = styled.div<CardStyleProps>`
  padding: 10px;
  width: ${(props) => (props.big ? "300px" : "160px")};
  height: ${(props) => (props.big ? "300px" : "160px")};
  box-shadow: rgb(149 157 165 / 0.1) 0px 2px 20px;
  text-align: center;
  border-radius: 15px;
`;

const Card: FC<CardProps> = ({ children, big }) => {
  return <Container big={big}>{children}</Container>;
};

export default Card;
