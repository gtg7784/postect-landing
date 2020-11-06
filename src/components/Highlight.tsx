import React from "react";
import styled from "styled-components";
import { BLUE } from "@styles/color";

interface Props {
  text: string;
  fontSize?: number;
}

const TextStyled = styled.span`
  font-size: ${(props: Props) => props.fontSize}px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${BLUE};
  display: inline-block;
`;

const Highlight: React.FC<Props> = ({ text, fontSize }: Props) => (
  <TextStyled fontSize={fontSize} text={text}>
    {text}
  </TextStyled>
);

Highlight.defaultProps = {
  fontSize: 48,
};

export default Highlight;
