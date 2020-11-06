import React from "react";
import styled from "styled-components";
import { createMedia } from "@artsy/fresnel";

interface Props {
  top?: number;
  bottom?: number;
  right?: number;
  left?: number;
}

const AppMedia = createMedia({
  breakpoints: {
    sm: 0,
    md: 520,
    lg: 768,
    xl: 1024,
  },
});
const mediaStyles = AppMedia.createMediaStyle();
const { Media, MediaContextProvider } = AppMedia;

const TitlePcStyled = styled.h1`
  margin-top: ${(props: Props) => props.top}px;
  margin-bottom: ${(props: Props) => props.bottom}px;
  margin-right: ${(props: Props) => props.right}px;
  margin-left: ${(props: Props) => props.left}px;
`;

const TitleTabletStyled = styled.h1`
  margin-top: ${(props: Props) => props.top}px;
  margin-bottom: ${(props: Props) => props.bottom}px;
  margin-right: ${(props: Props) => props.right}px;
  margin-left: ${(props: Props) => props.left}px;
  font-size: 48px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
`;

const TitleMobileStyled = styled.h1`
  margin-top: ${(props: Props) => props.top}px;
  margin-bottom: ${(props: Props) => props.bottom}px;
  margin-right: ${(props: Props) => props.right}px;
  margin-left: ${(props: Props) => props.left}px;
  font-size: 36px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  width: 100%;
`;

const Title: React.FC<Props> = (props) => (
  <>
    <style>{mediaStyles}</style>
    <MediaContextProvider>
      <Media lessThan="md">
        <TitleMobileStyled {...props} />
      </Media>
      <Media between={["md", "lg"]}>
        <TitleTabletStyled {...props} />
      </Media>
      <Media greaterThanOrEqual="lg">
        <TitlePcStyled {...props} />
      </Media>
    </MediaContextProvider>
  </>
);

Title.defaultProps = {
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
};

export default Title;
