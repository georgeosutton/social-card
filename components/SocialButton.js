import React, { useState } from "react";

import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

import Image from "next/image";

import {
  facebookSVG,
  twitterSVG,
  linkedinSVG,
  instagramSVG,
  emailSVG,
  websiteSVG,
  salesSVG,
} from "../assets/svg";

const SocialButton = ({ social, labour, theCampaignHouse }) => {
  const [isSelected, setIsSelected] = useState(false);

  const cardVariant = {
    hidden: {
      opacity: 0,
      x: "-100%",
      transition: { ease: "easeInOut", duration: 0.4 },
    },
    show: {
      opacity: 1,

      x: 0,
      transition: { delay: 0.3, type: "spring", duration: 0.9, bounce: 0.3 },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: { ease: "easeInOut", duration: 0.4 },
    },
  };

  return (
    <StyledContainer layout>
      <StyledButton
        layout
        social={social}
        onClick={() => setIsSelected(!isSelected)}
      >
        {social == "Facebook" && facebookSVG}
        {social == "Twitter" && twitterSVG}
        {social == "Linkedin" && linkedinSVG}
        {social == "Instagram" && instagramSVG}
        {social == "Email" && emailSVG}
        {social == "Website" && websiteSVG}
        {social == "Sales Pack" && salesSVG}
        {social}
      </StyledButton>
      <AnimatePresence>
        {isSelected && (
          <StyledLinkCard
            initial="hidden"
            animate="show"
            exit="exit"
            variants={cardVariant}
            social={social}
          >
            <div className="wrap1">
              <StyledLogo>
                <Image
                  priority={true}
                  src="/TchLogo.png"
                  alt="The Campaign House Logo"
                  width={32}
                  height={32}
                  layout="fixed"
                />
              </StyledLogo>
              <a
                rel="noopener noreferrer"
                target="_blank"
                style={{ color: "#1A382C" }}
                href={theCampaignHouse}
              >
                The Campaign House
              </a>
            </div>
            <div className="wrap2">
              <StyledLogo>
                <Image
                  priority={true}
                  src="/andlabour-logo.png"
                  alt="Print for Labour Logo"
                  width={32}
                  height={32}
                  layout="fixed"
                />
              </StyledLogo>

              <a
                rel="noopener noreferrer"
                target="_blank"
                style={{ color: "#e61c5d" }}
                href={labour}
              >
                &labour
              </a>
            </div>
          </StyledLinkCard>
        )}
      </AnimatePresence>
    </StyledContainer>
  );
};
const StyledContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const StyledButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  outline: none;
  border: none;
  padding: 1rem;
  margin: 1.8rem 0;
  color: white;
  font-weight: 500;
  cursor: pointer;
  font-size: 1.8rem;
  border-radius: 9999px;

  background-color: ${(props) => {
    if (props.social == "Facebook") return "#1877f2";
    else if (props.social == "Twitter") return "#1da1f2";
    else if (props.social == "Linkedin") return "#0a66c2";
    else if (props.social == "Email") return "#3A5E7E";
    else if (props.social == "Website") return "#16697A";
    else if (props.social == "Sales Pack") return "#EE964B";
  }};
  ${(props) =>
    props.social == "Instagram" &&
    `
     background: linear-gradient(
    45deg,
    #405de6,
    #5851db,
    #833ab4,
    #c13584,
    #e1306c,
    #fd1d1d
  );
  `}

  @media (max-width: 600px) {
    width: 90%;
  }
  @media (max-width: 320px) {
    width: 100%;
  }

  svg {
    margin-right: 1rem;
    width: 32px;
    fill: white;
  }
`;

const StyledLinkCard = styled(motion.div)`
  display: flex;

  background-color: white;
  justify-content: center;
  align-items: center;
  width: fit-content;
  border-radius: 9999px;
  padding: 1.4rem;
  border: 2px solid;
  border-color: ${(props) => {
    if (props.social == "Facebook") return "#1877f2";
    else if (props.social == "Twitter") return "#1da1f2";
    else if (props.social == "Linkedin") return "#0a66c2";
    else if (props.social == "Instagram") return "#c32aa3";
    else if (props.social == "Email") return "#3A5E7E";
    else if (props.social == "Website") return "#16697A";
    else if (props.social == "Sales Pack") return "#EE964B";
  }};
  @media (max-width: 600px) {
    padding: 0.75rem;
    flex-direction: column;
    border-radius: 30px;
  }
  .wrap1,
  .wrap2 {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .wrap1 {
    @media (max-width: 600px) {
      margin-bottom: 0.5rem;
    }
  }
  .wrap2 {
    @media (max-width: 600px) {
      margin-top: 0.5rem;
    }
  }
  a {
    display: block;
    color: black;
    cursor: pointer;
    margin: 0 2rem 0 0.75rem;
    font-weight: bold;
  }
  a:hover {
    text-decoration: underline;
  }
`;

const StyledLogo = styled.div`
  width: 32px;
  height: 32px;
`;
export default SocialButton;
