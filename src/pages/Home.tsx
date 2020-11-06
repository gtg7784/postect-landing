import React from "react";
import styled from "styled-components";
import { createMedia } from "@artsy/fresnel";
import Background from "@components/Background";
import Container from "@components/Container";
import Header from "@components/Header";
import Title from "@components/Title";
import Highlight from "@components/Highlight";
import Text from "@components/Text";
import Button from "@components/Button";
import Link from "@components/Link";
import { PURPLE } from "@styles/color";

interface Props {}

const FirstPcSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 200px;
  margin-top: 318px;
`;

const SecondPcSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 200px;
  margin-top: 584px;
  margin-left: auto;
  width: 496px;
`;

const ThirdPcSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 200px;
  margin-top: 570px;
`;

const FirstTabletSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${PURPLE};
  height: 100%;
  width: 100%;
  max-width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
`;

const SecondTabletSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  margin-top: 82px;
`;

const ThirdTabletSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  margin-top: 616px;
`;

const FirstMobileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ${PURPLE};
  height: 100%;
  width: 100%;
  max-width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
`;

const SecondMobileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 136px;
  width: 100%;
  max-width: 100vw;
`;

const ThirdMobileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 412px;
  width: 100%;
  max-width: 100vw;
`;

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

const Home: React.FC<Props> = () => {
  return (
    <>
      <style>{mediaStyles}</style>
      <MediaContextProvider>
        <Container>
          <Background />
          <Header />
          <Media lessThan="md">
            <FirstMobileSection>
              <Title top={113}>
                자세교정은
                <br />
                <Highlight fontSize={36} text="Postect" /> 와 함께해요!
              </Title>
              <Text>Postect와 함께 건강한 컴퓨터 사용 문화를 만들어봐요!</Text>
              <Button top={294}>다운하기</Button>
            </FirstMobileSection>
            <SecondMobileSection>
              <Title>
                인공지능이
                <br />
                도와주는 자세 교정
              </Title>
              <Text>
                Pose Estimation을 기반으로 개발된 인공지능을 통해,
                <br /> 바른 자세를 유지하세요!
              </Text>
            </SecondMobileSection>
            <ThirdMobileSection>
              <Title>
                어플리케이션에서 <br />
                추천해주는 스트레칭
              </Title>
              <Text>어플리케이션에서 추천해주는 스트레칭을 따라 해보세요.</Text>
              <Link to="/" text="스트레칭 동작 알아보기" top={16} />
            </ThirdMobileSection>
          </Media>
          <Media between={["md", "lg"]}>
            <FirstTabletSection>
              <Title top={545}>
                자세교정은
                <br />
                <Highlight text="Postect" /> 와 함께해요!
              </Title>
              <Text>Postect와 함께 건강한 컴퓨터 사용 문화를 만들어봐요!</Text>
              <Button top={72}>다운하기</Button>
            </FirstTabletSection>
            <SecondTabletSection>
              <Title>
                인공지능이
                <br />
                도와주는 자세 교정
              </Title>
              <Text>
                Pose Estimation을 기반으로 개발된 인공지능을 통해, <br />
                바른 자세를 유지하세요!
              </Text>
            </SecondTabletSection>
            <ThirdTabletSection>
              <Title>
                어플리케이션에서 <br />
                추천해주는 스트레칭
              </Title>
              <Text>어플리케이션에서 추천해주는 스트레칭을 따라 해보세요.</Text>
              <Link to="/" text="스트레칭 동작 알아보기" top={16} />
            </ThirdTabletSection>
          </Media>
          <Media greaterThanOrEqual="lg">
            <FirstPcSection>
              <Title>
                자세교정은
                <br />
                <Highlight text="Postect" /> 와 함께해요!
              </Title>
              <Text>Postect와 함께 건강한 컴퓨터 사용 문화를 만들어봐요!</Text>
              <Button top={64}>다운하기</Button>
            </FirstPcSection>
            <SecondPcSection>
              <Title right={22}>
                인공지능이
                <br />
                도와주는 자세 교정
              </Title>
              <Text>
                Pose Estimation을 기반으로 개발된 인공지능을 통해, 바른 자세를
                유지하세요!
              </Text>
            </SecondPcSection>
            <ThirdPcSection>
              <Title>
                어플리케이션에서 <br />
                추천해주는 스트레칭
              </Title>
              <Text>어플리케이션에서 추천해주는 스트레칭을 따라 해보세요.</Text>
              <Link to="/" text="스트레칭 동작 알아보기" top={20} />
            </ThirdPcSection>
          </Media>
        </Container>
      </MediaContextProvider>
    </>
  );
};

export default Home;
