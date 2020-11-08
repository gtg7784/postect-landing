import React from "react";
import styled from "styled-components";
import { createMedia } from "@artsy/fresnel";
import { BLUE, WHITE } from "@src/styles/color";

interface Props {
  top?: number;
  bottom?: number;
  right?: number;
  left?: number;
}

const ButtonPcStyled = styled.button`
  width: 184px;
  height: 56px;
  border-radius: 14px;
  box-shadow: 0 8px 20px 0 rgba(63, 91, 255, 0.3);
  background-color: ${BLUE};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${WHITE};
  margin-top: ${(props: Props) => props.top}px;
  margin-bottom: ${(props: Props) => props.bottom}px;
  margin-right: ${(props: Props) => props.right}px;
  margin-left: ${(props: Props) => props.left}px;
`;

const ButtonTabletStyled = styled.button`
  width: 368px;
  height: 56px;
  border-radius: 14px;
  box-shadow: 0 8px 20px 0 rgba(63, 91, 255, 0.3);
  background-color: ${BLUE};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${(props: Props) => props.top}px;
  margin-bottom: ${(props: Props) => props.bottom}px;
  margin-right: ${(props: Props) => props.right}px;
  margin-left: ${(props: Props) => props.left}px;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${WHITE};
`;

const ButtonMobileStyled = styled.button`
  width: calc(100vw - 80px);
  height: 64px;
  border-radius: 14px;
  box-shadow: 0 8px 20px 0 rgba(63, 91, 255, 0.3);
  background-color: ${BLUE};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${WHITE};
  margin-top: ${(props: Props) => props.top}px;
  margin-bottom: ${(props: Props) => props.bottom}px;
  margin-right: ${(props: Props) => props.right}px;
  margin-left: ${(props: Props) => props.left}px;
`;

const AppMedia = createMedia({
  breakpoints: {
    sm: 0,
    md: 520,
    lg: 1200,
    xl: 1920,
  },
});
const mediaStyles = AppMedia.createMediaStyle();
const { Media, MediaContextProvider } = AppMedia;

const Button: React.FC<Props> = (props) => (
  <>
    <style>{mediaStyles}</style>
    <MediaContextProvider>
      <Media lessThan="md">
        <ButtonMobileStyled {...props} />
      </Media>
      <Media between={["md", "lg"]}>
        <ButtonTabletStyled {...props} />
      </Media>
      <Media greaterThanOrEqual="lg">
        <ButtonPcStyled {...props} />
      </Media>
    </MediaContextProvider>
  </>
);

Button.defaultProps = {
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
};

export default Button;
