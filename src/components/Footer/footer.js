import React from "react";
import { Container, SocialMedias, NewsImage } from "./styled";
import news from "../../assets/images/news.png";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

function Footer() {
  return (
    <Container>
      <SocialMedias>
        <a href="https://www.linkedin.com/in/rafamoliv/" target="_blank" className="linkedin">
          <FaIcons.FaLinkedin />
        </a>
        <a href="https://github.com/rafamoliv" target="_blank" className="github">
          <FaIcons.FaGithub />
        </a>
        <a href="mailto:rafaoliv.ti@gmail.com" target="_blank" className="email">
          <AiIcons.AiTwotoneMail />
        </a>
        <a href="https://api.whatsapp.com/send?phone=5521995217378" target="_blank" className="whatsapp">
          <FaIcons.FaWhatsapp />
        </a>
      </SocialMedias>
      <NewsImage>
        <img src={news} />
      </NewsImage>
    </Container>
  );
}

export default Footer;
