import React, { useState } from "react";

import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";

const SocialButton = ({ social, printForLabour, theCampaignHouse }) => {
  const [isSelected, setIsSelected] = useState(false);

  const facebookSVG = (
    <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>Facebook</title>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );

  const twitterSVG = (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>Twitter</title>
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  );

  const instagramSVG = (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>Instagram</title>
      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
    </svg>
  );

  const emailSVG = (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsxlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      style={{ enableBackground: "new 0 0 512 512" }}
      xmlSpace="preserve"
    >
      <g>
        <g>
          <polygon points="339.392,258.624 512,367.744 512,144.896 		" />
        </g>
      </g>
      <g>
        <g>
          <polygon points="0,144.896 0,367.744 172.608,258.624 		" />
        </g>
      </g>
      <g>
        <g>
          <path d="M480,80H32C16.032,80,3.36,91.904,0.96,107.232L256,275.264l255.04-168.032C508.64,91.904,495.968,80,480,80z" />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M310.08,277.952l-45.28,29.824c-2.688,1.76-5.728,2.624-8.8,2.624c-3.072,0-6.112-0.864-8.8-2.624l-45.28-29.856
         L1.024,404.992C3.488,420.192,16.096,432,32,432h448c15.904,0,28.512-11.808,30.976-27.008L310.08,277.952z"
          />
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );

  const linkedinSVG = (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>LinkedIn</title>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );

  const websiteSVG = (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 508 508"
      style={{ enableBackground: "new 0 0 508 508" }}
      xmlSpace="preserve"
    >
      <g>
        <g>
          <path
            d="M254,0C146.7,0,0,81.1,0,254c0,168.5,141.1,254,254,254c193.7,0,254-169.7,254-254C508,129.6,412.8,0,254,0z M195.1,23.9
         c-26.5,22.6-48.5,60-62.7,106.4c-18.4-10.9-35.3-24.4-50.3-40.1C113.1,57.7,152.3,34.9,195.1,23.9z M71.2,102.4
         c16.8,17.5,35.9,32.4,56.7,44.2c-7.8,30.3-12.4,63.9-13,99.2H16.6C18.4,193.1,37.6,142.8,71.2,102.4z M71.2,405.6
         c-33.7-40.4-52.8-90.7-54.6-143.4h98.3c0.6,35.4,5.2,68.9,13,99.2C107.2,373.3,88.1,388.1,71.2,405.6z M82.1,417.9
         c15-15.7,31.9-29.2,50.3-40.1c14.2,46.3,36.2,83.8,62.7,106.4C152.3,473.1,113.1,450.3,82.1,417.9z M245.8,491
         c-42.6-5.4-79.3-53-99.1-121.2c30.6-15.5,64.4-24.2,99.1-25.5V491z M245.8,328c-36.2,1.2-71.4,10.1-103.3,25.7
         c-6.7-28-10.7-58.9-11.3-91.5h114.6V328z M245.8,245.8H131.2c0.6-32.6,4.6-63.5,11.3-91.5c32,15.6,67.2,24.5,103.3,25.7V245.8z
          M245.8,163.7c-34.8-1.2-68.5-10-99.1-25.5C166.5,69.9,203.2,22.4,245.8,17V163.7z M436.8,102.4c33.6,40.4,52.8,90.7,54.6,143.4
         h-98.2c-0.6-35.4-5.2-68.9-13-99.2C400.9,134.7,420,119.9,436.8,102.4z M425.9,90.1c-15,15.7-31.9,29.2-50.3,40.1
         c-14.2-46.3-36.2-83.7-62.7-106.4C355.7,34.9,394.9,57.7,425.9,90.1z M262.2,17c42.6,5.4,79.3,53,99.1,121.2
         c-30.6,15.5-64.3,24.2-99.1,25.5V17z M262.2,180c36.2-1.2,71.4-10.1,103.3-25.7c6.7,28,10.7,58.9,11.3,91.5H262.2V180z
          M262.2,262.2h114.6c-0.6,32.6-4.6,63.5-11.3,91.5c-31.9-15.7-67.1-24.6-103.3-25.7V262.2z M262.2,491V344.3
         c34.8,1.2,68.5,10,99.1,25.5C341.5,438.1,304.8,485.6,262.2,491z M312.9,484.1c26.5-22.6,48.5-60,62.7-106.4
         c18.4,10.9,35.3,24.4,50.3,40.1C394.9,450.3,355.7,473.1,312.9,484.1z M436.8,405.6c-16.8-17.5-35.9-32.3-56.6-44.2
         c7.8-30.3,12.4-63.9,13-99.2h98.2C489.6,314.9,470.4,365.2,436.8,405.6z"
          />
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );

  const salesSVG = (
    <svg viewBox="0 0 40 40">
      <path d="M24.5,13.6V5.8c0.2,0.2,0.4,0.3,0.6,0.5l6.8,6.8c0.2,0.2,0.3,0.4,0.5,0.6L24.5,13.6L24.5,13.6z M22.3,14.2 c0,0.4,0.2,0.8,0.5,1.1c0.3,0.3,0.7,0.5,1.1,0.5h9v17.5c0,0.4-0.2,0.8-0.5,1.1c-0.3,0.3-0.7,0.5-1.1,0.5H9.1c-0.4,0-0.8-0.2-1.1-0.5 c-0.3-0.3-0.5-0.7-0.5-1.1V6.7c0-0.4,0.2-0.8,0.5-1.1c0.3-0.3,0.7-0.5,1.1-0.5h13.3L22.3,14.2L22.3,14.2z"></path>
    </svg>
  );

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
            <a
              className="link"
              rel="noopener noreferrer"
              target="_blank"
              style={{ color: "#1A382C" }}
              href={theCampaignHouse}
            >
              <div className="wrap1">
                <Image
                  className="image"
                  priority={true}
                  src="/TchLogo.png"
                  alt="The Campaign House Logo"
                  width={34}
                  height={34}
                  layout="fixed"
                />
                <span>The Campaign House</span>
              </div>
            </a>
            <a
              className="link"
              rel="noopener noreferrer"
              target="_blank"
              style={{ color: "#e4003b" }}
              href={printForLabour}
            >
              <div className="wrap2">
                <Image
                  className="image"
                  priority={true}
                  src="/PflLogo.png"
                  alt="Print for Labour logo"
                  width={34}
                  height={34}
                  layout="fixed"
                />
                <span>Print For Labour</span>
              </div>
            </a>
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
  .link {
    display: inline-block;
    cursor: pointer;
    margin: 0 2rem 0 0.75rem;
    font-weight: bold;
    height: 100%;
  }
  .wrap1,
  .wrap2 {
    padding: 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      margin-left: 0.5rem;
    }
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
  .image {
    width: 32px !important;
    height: 32px !important;
    min-width: 32px !important;
    max-width: 32px !important;
    min-height: 32px !important;
    max-height: 32px !important;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export default SocialButton;
