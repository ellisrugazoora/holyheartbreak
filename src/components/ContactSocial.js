import React from "react";
import styled from "styled-components";
// Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../animation";
import { Hide } from "../styles";
// Icons
import Gmail from "../img/gmail-logo.svg";
import Twitter from "../img/twitter-logo.svg";
import Instagram from "../img/instagram-logo.svg";
import Youtube from "../img/youtube-logo.svg";
import contact1 from "../img/contact1.jpg";

const StyledSocial = styled(motion.section)`
  padding: 5rem 10rem;
  max-height: 100vh;
  height: 100%;
  color: #23d997;
  background-color: #1b1b1b;
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: #1b1b1b;
  h2 {
    color: #f7f7f7;
  }
`;
const Container = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-start;
`;
const SocialLinks = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  height: 100%;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  margin: 1em;
  h4 {
    margin: 1rem;
    font-size: 1.5rem;
    letter-spacing: 2px;
    font-weight: 400;
    color: #23d997;
    cursor: pointer;
  }
`;
const Circle = styled.img`
  border-radius: 50%;
  width: 3.2rem;
  height: 3.2rem;
  padding: 0.5rem;
  object-fit: cover;
  opacity: 0.8;
  margin: 1rem;
  cursor: pointer;
  z-index: 100;
  background-color: #333;
  &:hover {
    opacity: 1;
  }
`;
const ImgContainer = styled.div`
    margin: 0 auto;
`;
const Image = styled(motion.img)`
  width: 20rem;
  height: 32rem;
`;
const AddressBox = styled.div`
  display: inline-block;
  margin-left: 2rem;
  h3 {
    margin-top: 1rem;
    font-size: 1.75rem;
    font-weight: 300;
    letter-spacing: 1.8px;
  }
  p {
    margin: 0;
    padding: 0;
    font-size: 0.95rem;
    font-weight: 200;
  }
  ul {
    margin: 0;
    list-style-type: none;
    font-weight: 200;
  }
`;
const Footer = styled.footer`
    margin: 2rem;
`;

const ContactSocial = () => {
  const date = new Date();

  return (
    <StyledSocial
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnimation}>Get in touch</motion.h2>
        </Hide>
      </Title>
      <Container>
        <SocialLinks>
          <Hide>
            <Social variants={titleAnimation}>
              <Circle src={Gmail} alt="Gmail icon" />
              <Circle src={Instagram} alt="Instagram icon" />
              <Circle src={Twitter} alt="Twitter icon" />
              <Circle src={Youtube} alt="Youtube icon" />
            </Social>
          </Hide>
          <AddressBox>
            <h2>New Jersey</h2>
            <p>801 Park Ave, Suit 1 Hobodean NJ 070730</p>
          </AddressBox>
          <AddressBox>
            <h2>E-mail</h2>
            <ul>
              <li>info@capture.com</li>
              <li>contact@capture.com</li>
            </ul>
          </AddressBox>
          <AddressBox>
            <h2>Phone</h2>
            <p>201-614-4108</p>
          </AddressBox>
        </SocialLinks>
        <ContactInfo>
          <ImgContainer>
            <Image src={contact1} />
          </ImgContainer>
        </ContactInfo>
      </Container>
      <Footer>
      <AddressBox>
        <p>{date.getFullYear()} Capture Group®</p>
      </AddressBox>
      </Footer>
    </StyledSocial>
  );
};

export default ContactSocial;
