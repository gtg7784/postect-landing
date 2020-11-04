import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  min-width: 1440px;
  height: 100%;
  background: #f4f8fc;
  min-height: 100vh;
`;

const Container: React.FC = (props) => <StyledContainer {...props} />;

export default Container;
