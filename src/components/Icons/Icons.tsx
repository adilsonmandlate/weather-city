import { FC } from "react";
import icons from "lib/icons.json";
import styled from "styled-components";

type IconProps = {
  icon: string;
  mode: "d" | "n";
  big?: boolean;
};

type StyleProps = {
  big?: boolean;
};

const IconStyle = styled.p<StyleProps>`
  margin-top: ${(props) => (props.big ? "5rem" : "1rem")};
  margin-bottom: ${(props) => (props.big ? "4rem" : "1rem")};
  color: var(--colors-green);
  font-size: ${(props) => (props.big ? "11rem" : "2rem")};
`;

const Icons: FC<IconProps> = ({ icon, mode, big }) => {
  return <IconStyle big={big} className={`wi wi-${icons[mode][icon].icon}`} />;
};

export default Icons;
