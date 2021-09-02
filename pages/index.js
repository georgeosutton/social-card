import Head from "next/head";

import React from "react";

import styled from "styled-components";
import { AnimateSharedLayout, motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

import SocialButton from "../components/SocialButton";

export default function Home() {
  return (
    <StyledSocial layout>
      <AnimateSharedLayout>
        <StyledCard layout>
          <motion.h1 layout>Get in touch...</motion.h1>

          <StyledButtons layout>
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
          </StyledButtons>
        </StyledCard>
      </AnimateSharedLayout>
    </StyledSocial>
  );
}
const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const StyledSocial = styled(motion.div)`
  background-color: #1a382c;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;

const StyledCard = styled(motion.div)`
  width: 600px;
  height: fit-content;
  margin: 5rem 0 0 0;
  padding: 1rem;
  background-color: #ebebeb;
  box-shadow: rgba(220, 73, 40, 0.4) -5px 5px, rgba(220, 73, 40, 0.3) -10px 10px,
    rgba(220, 73, 40, 0.2) -15px 15px, rgba(220, 73, 40, 0.1) -20px 20px,
    rgba(220, 73, 40, 0.05) -25px 25px;
  @media (max-width: 600px) {
    width: 90%;
    margin-top: 0;
  }
  h1 {
    margin: 3rem 0;
    font-size: 5.2rem;
    color: #0b2433;
    text-align: center;
    @media (max-width: 600px) {
      font-size: 3.8rem;
      margin: 2rem 0;
    }
  }
`;
const StyledButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 3rem 0;
  @media (max-width: 600px) {
    padding: 0 0 2rem 0;
  }
`;

Home.getLayout = function getLayout(Home) {
  return <StyledLayout>{Home}</StyledLayout>;
};
