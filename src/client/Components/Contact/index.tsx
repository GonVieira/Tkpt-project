import React from "react";
import {
  StyledContactBody,
  StyledConectionsDiv,
  StyledAnchor,
  SyledTitle,
} from "./StyledComponents";
import {
  SiDiscord,
  SiTwitter,
  SiFacebook,
  SiTwitch,
  SiYoutube,
  SiInstagram,
} from "react-icons/si";
import "./style.css";

const Contact = () => {
  return (
    <>
      <StyledContactBody>
        <SyledTitle>Where can you find us?</SyledTitle>
        <StyledConectionsDiv>
          <StyledAnchor href="https://discord.gg/Fx8Pqa5" target="_blank">
            <SiDiscord className="discord" size="2x" viewBox="-5 -5 34 34" />
          </StyledAnchor>
          <StyledAnchor href="https://twitter.com/TekkenPortugal" target="_blank">
            <SiTwitter className="twitter" size="2x" viewBox="-5 -5 34 34" />
          </StyledAnchor>
          <StyledAnchor href="https://www.facebook.com/tekkenportugalcom/" target="_blank">
            <SiFacebook className="facebook" size="2x" viewBox="-5 -5 34 34" />
          </StyledAnchor>
        </StyledConectionsDiv>
        <StyledConectionsDiv>
          <StyledAnchor href="https://www.twitch.tv/tekkenportugal" target="_blank">
            <SiTwitch className="twitch" size="2x" viewBox="-5 -5 34 34" />
          </StyledAnchor>
          <StyledAnchor href="https://www.youtube.com/tekkenportugal" target="_blank">
            <SiYoutube className="youtube" size="2x" viewBox="-5 -5 34 34" />
          </StyledAnchor>
          <StyledAnchor href="https://www.instagram.com/tekkenportugal/" target="_blank">
            <SiInstagram
              className="instagram"
              size="2x"
              viewBox="-5 -5 34 34"
            />
          </StyledAnchor>
        </StyledConectionsDiv>
      </StyledContactBody>
    </>
  );
};

export default Contact;
