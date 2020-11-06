import React from "react";
import { Link as BrowserLink } from "react-router-dom";
import styled from "styled-components";

import { BLUE } from "@styles/color";
import { ARROW_IC } from "@styles/image";

interface Props {
  to: string;
  text: string;
  top?: number;
}

const LinkStyled = styled(BrowserLink)`
  font-size: 17px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${BLUE};
`;

const Icon = styled.img``;

const Link: React.FC<Props> = ({ to, text, top }: Props) => (
  <LinkStyled to={to} style={{ marginTop: top }}>
    {text}
    <Icon src={ARROW_IC} />
  </LinkStyled>
);

Link.defaultProps = {
  top: 0,
};

export default Link;
