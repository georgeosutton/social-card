import Head from "next/head";

import React, { useEffect, useRef } from "react";

import styled from "styled-components";
import { AnimateSharedLayout, motion } from "framer-motion";

import SocialButton from "../components/SocialButton";

const Home = () => {
  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView();

  useEffect(() => {
    executeScroll();
  }, []);

  return (
    <StyledSocial>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <title>Social Card - The Campaign House</title>
        <meta
          name="description"
          content="Follow our socials and get in contact with us."
        />
      </Head>
      <AnimateSharedLayout>
        <StyledCard layout>
          <div ref={myRef} className="scroll"></div>
          <div>
            <motion.h1 layout>Get in touch...</motion.h1>
          </div>

          <StyledButtons>
            <SocialButton
              theCampaignHouse={"https://www.facebook.com/thecampaignhouse"}
              printForLabour={"https://www.facebook.com/LabourPrinters"}
              social={"Facebook"}
            />

            <SocialButton
              theCampaignHouse={"https://twitter.com/CampaignHouse_"}
              printForLabour={"https://twitter.com/LabourPrinters"}
              social="Twitter"
            />

            <SocialButton
              theCampaignHouse={
                "https://www.linkedin.com/company/thecampaignhouse"
              }
              printForLabour={
                "https://www.linkedin.com/company/thecampaignhouse"
              }
              social={"Linkedin"}
            />

            <SocialButton
              social={"Instagram"}
              printForLabour={"https://www.instagram.com/labourprinters/"}
              theCampaignHouse={"https://www.instagram.com/thecampaignhouse/"}
            />
            <SocialButton
              social={"Website"}
              theCampaignHouse={"https://thecampaignhouse.co.uk/"}
              printForLabour={"https://printforlabour.co.uk/"}
            />
            <SocialButton
              social={"Email"}
              printForLabour={"mailto:hello@printforlabour.co.uk"}
              theCampaignHouse={"mailto:hello@thecampaignhouse.co.uk"}
            />
            <SocialButton
              social={"Sales Pack"}
              printForLabour={
                "https://www.canva.com/design/DAEirRoKs44/SxejTHK7h10_7L3F88yAQA/view?utm_content=DAEirRoKs44&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
              }
              theCampaignHouse={
                "https://www.canva.com/design/DAEiremGL7g/yPyUN1ocJ849wbl_buu4Mg/view?utm_content=DAEiremGL7g&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
              }
            ></SocialButton>
          </StyledButtons>
          <StyledFooter>
            <a href="tel:01827 894 454">01827 894 454</a>
            <a href="https://www.google.com/maps/place/The+Campaign+House/@52.5780994,-1.5516466,17z/data=!3m1!4b1!4m5!3m4!1s0x4870ab75bcfa910b:0x1728e0b1ad0a0530!8m2!3d52.5781069!4d-1.5494528">
              33 Long Street, Atherstone, CV9 1AY
            </a>
          </StyledFooter>
        </StyledCard>
      </AnimateSharedLayout>
    </StyledSocial>
  );
};
const StyledLayout = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  .container {
    display: flex;
    flex: 1;
  }
`;

const StyledSocial = styled(motion.div)`
  width: 100%;
  background-color: #1a382c;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: 6rem 0;
  padding: 1rem;
  background-color: #ebebeb;
  box-shadow: rgba(220, 73, 40, 0.4) -5px 5px, rgba(220, 73, 40, 0.3) -10px 10px,
    rgba(220, 73, 40, 0.2) -15px 15px, rgba(220, 73, 40, 0.1) -20px 20px,
    rgba(220, 73, 40, 0.05) -25px 25px;
  @media (max-width: 600px) {
    width: 90%;
    margin: 2rem 0;
    box-shadow: none;
  }
  h1 {
    height: fit-content;
    margin: 3rem 0;
    font-size: 5.2rem;
    color: #0b2433;
    text-align: center;
    @media (max-width: 600px) {
      font-size: 3.8rem;
      margin: 2rem 0;
      @media (max-width: 320px) {
        font-size: 3.2rem;
        margin: 2rem 0;
      }
    }
  }
  .scroll {
    top: 3rem;
    position: absolute;
    @media (max-width: 600px) {
      top: 0;
    }
  }
`;
const StyledButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem 0;
  padding: 2rem 0;
  a {
    text-align: center;
    margin: 1rem 3rem;
    text-decoration: underline;
  }
`;

Home.getLayout = function getLayout(Home) {
  return (
    <StyledLayout>
      <div className="container">{Home}</div>
    </StyledLayout>
  );
};

export default Home;
