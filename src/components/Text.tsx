import React from "react";
import styled from "styled-components";
import { createMedia } from "@artsy/fresnel";
import { BLACK } from "@styles/color";

interface Props {}

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

const TextPcStyled = styled.p`
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${BLACK};
  margin-top: 32px;
  margin-bottom: 0px;
`;

const TextTabletStyled = styled.p`
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${BLACK};
  margin-top: 24px;
  margin-bottom: 0px;
  text-align: center;
`;

const TextMobileStyled = styled.p`
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${BLACK};
  margin-top: 26px;
  margin-bottom: 0px;
`;

const Text: React.FC<Props> = (props) => (
  <>
    <style>{mediaStyles}</style>
    <MediaContextProvider>
      <Media lessThan="md">
        <TextMobileStyled {...props} />
      </Media>
      <Media between={["md", "lg"]}>
        <TextTabletStyled {...props} />
      </Media>
      <Media greaterThanOrEqual="lg">
        <TextPcStyled {...props} />
      </Media>
    </MediaContextProvider>
  </>
);

export default Text;
