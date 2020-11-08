import React from "react";
import { createMedia } from "@artsy/fresnel";
import Illust from "@components/Illust";
import {
  ILLUST_01,
  ILLUST_02,
  ILLUST_03,
  ILLUST_04,
  ILLUST_05,
  ILLUST_06,
  ILLUST_07,
  ILLUST_08,
  MAIN_ILLUST_01,
  MAIN_ILLUST_02,
  MAIN_ILLUST_03,
} from "@styles/image";

interface Props {}

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

const Background: React.FC<Props> = () => (
  <>
    <style>{mediaStyles}</style>
    <MediaContextProvider>
      <Media lessThan="md">
        <Illust
          width={119}
          height={83.6}
          top={-20}
          left={-60}
          src={ILLUST_01}
        />
        <Illust width={165} height={122} right={0} src={ILLUST_02} />
        <Illust width={112} height={80} top={760} right={40} src={ILLUST_04} />
        <Illust width={140} height={228} top={1174} left={0} src={ILLUST_05} />
        <Illust width={55} height={59} top={1361} right={40} src={ILLUST_06} />
        <Illust width={40} height={43} top={1748} left={65} src={ILLUST_07} />
        <Illust width={220} height={103} top={2040} left={0} src={ILLUST_08} />
        <Illust
          width={140}
          height={192}
          top={315}
          right="50%"
          transform
          src={MAIN_ILLUST_01}
        />
        <Illust
          width={346}
          height={202}
          top={1100}
          right="50%"
          transform
          src={MAIN_ILLUST_02}
        />
        <Illust
          width={300}
          height={307}
          top={1762}
          right="50%"
          transform
          src={MAIN_ILLUST_03}
        />
      </Media>
      <Media between={["md", "lg"]}>
        <Illust
          width={119}
          height={83.6}
          top={-13}
          left={-50}
          src={ILLUST_01}
        />
        <Illust
          width={945}
          height={799}
          top={-500}
          right={-400}
          src={ILLUST_02}
        />
        <Illust
          width={169}
          height={105}
          top={1060}
          right={48}
          src={ILLUST_04}
        />
        <Illust width={300} height={317} top={1420} left={0} src={ILLUST_05} />
        <Illust width={65} height={70} top={1798} right={117} src={ILLUST_06} />
        <Illust width={50} height={50} top={2066} left={116} src={ILLUST_07} />
        <Illust width={220} height={103} top={2456} left={0} src={ILLUST_08} />
        <Illust
          width={220}
          height={302}
          top={180}
          right="50%"
          transform
          src={MAIN_ILLUST_01}
        />
        <Illust
          width={468}
          height={252}
          top={1303}
          right="50%"
          transform
          src={MAIN_ILLUST_02}
        />
        <Illust
          width={320}
          height={327}
          top={2106}
          right="50%"
          transform
          src={MAIN_ILLUST_03}
        />
      </Media>
      <Media greaterThanOrEqual="lg">
        <Illust width={96} height={79.6} top={-13} left={0} src={ILLUST_01} />
        <Illust width={945} height={799} top={0} right={0} src={ILLUST_02} />
        <Illust
          width={73.9}
          height={138}
          top={761.7}
          left={0}
          src={ILLUST_03}
        />
        <Illust
          width={337}
          height={209}
          top={840}
          right={140}
          src={ILLUST_04}
        />
        <Illust width={499} height={518} top={1154} left={0} src={ILLUST_05} />
        <Illust
          width={120}
          height={130}
          top={1635}
          right={142}
          src={ILLUST_06}
        />
        <Illust
          width={89}
          height={90}
          top={1795}
          left={474.5}
          src={ILLUST_07}
        />
        <Illust
          width={463}
          height={217}
          top={2153.2}
          left={0}
          src={ILLUST_08}
        />
        <Illust
          width={300}
          height={411}
          top={245}
          right={200}
          src={MAIN_ILLUST_01}
        />
        <Illust
          width={501}
          height={270}
          top={1140}
          left={200}
          src={MAIN_ILLUST_02}
        />
        <Illust
          width={300}
          height={411}
          top={1874}
          right={200}
          src={MAIN_ILLUST_03}
        />
      </Media>
    </MediaContextProvider>
  </>
);

export default Background;
