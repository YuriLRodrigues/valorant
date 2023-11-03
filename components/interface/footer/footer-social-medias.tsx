import {
  BsInstagram,
  BsDiscord,
  BsTwitch,
  BsTwitter,
  BsYoutube,
  BsFacebook,
} from "react-icons/bs";
import { FooterLinks } from "./footer-links";

export const FooterMediaLinks = () => {
  return (
    <div className="mx-auto flex gap-6 items-center justify-center">
      <FooterLinks
        href="https://www.instagram.com/valorantbrasil"
        target="_blank"
      >
        <BsInstagram />
      </FooterLinks>

      <FooterLinks href="https://www.twitch.tv/valorantgg" target="_blank">
        <BsTwitch />
      </FooterLinks>

      <FooterLinks
        href="https://discord.com/invite/valorant-br"
        target="_blank"
      >
        <BsDiscord />
      </FooterLinks>

      <FooterLinks href="https://twitter.com/valorantgg" target="_blank">
        <BsTwitter />
      </FooterLinks>

      <FooterLinks
        href="https://www.youtube.com/channel/UCgWiuB2PQIUhJgEN9No281g"
        target="_blank"
      >
        <BsYoutube />
      </FooterLinks>

      <FooterLinks
        href="https://www.facebook.com/VALORANTbrasil/"
        target="_blank"
      >
        <BsFacebook />
      </FooterLinks>
    </div>
  );
};
