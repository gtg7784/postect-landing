import React from "react";
import styled from "styled-components";

interface Props {
  width: number;
  height: number;
  top?: number | string;
  bottom?: number | string;
  right?: number | string;
  left?: number | string;
  zIndex?: number;
  src: string;
  transform?: boolean;
}

const IllustStyled = styled.img`
  position: absolute;
  width: ${(props: Props) => props.width}px;
  height: ${(props: Props) => props.height}px;
  top: ${(props: Props) =>
    typeof props.top === "number" ? `${props.top}px` : props.top};
  bottom: ${(props: Props) =>
    typeof props.bottom === "number" ? `${props.bottom}px` : props.bottom};
  right: ${(props: Props) =>
    typeof props.right === "number" ? `${props.right}px` : props.right};
  left: ${(props: Props) =>
    typeof props.left === "number" ? `${props.left}px` : props.left};
  z-index: ${(props: Props) => props.zIndex ?? 0};
  transform: ${(props: Props) =>
    `${props.transform}` === "true" ? "translate(50%, 0)" : "none"};
`;

const Illust: React.FC<Props> = (props: Props) => <IllustStyled {...props} />;

Illust.defaultProps = {
  right: "auto",
  left: "auto",
  top: "auto",
  bottom: "auto",
  zIndex: 0,
  transform: false,
};

export default Illust;
