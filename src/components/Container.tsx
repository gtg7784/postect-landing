import React from "react";
import styled from "styled-components";
import { WHITE } from "@styles/color";

const StyledContainer = styled.div`
  min-width: 1440px;
  height: 100%;
  background: ${WHITE};
  min-height: 100vh;
`;

const Container: React.FC = (props) => <StyledContainer {...props} />;

export default Container;
