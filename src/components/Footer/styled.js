import styled from "styled-components";

export const Container = styled.div`
  background-color: #060b26;
  height: 125px;
  margin-top: 30px;
`;

export const SocialMedias = styled.div`
  height: 75px;
  width: 300px;
  border-radius: 15px 15px 0 0;
  z-index: 123;
  background-color: #f5ffff;
  transform: translateY(-50%);
  margin: auto;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grif-gap: 0;

  box-shadow: 2px 2px 2px 3px rgba(0, 0, 0, 0.2);

  a {
    margin: auto;
    font-size: 2.25rem;
  }

  a:hover {
    opacity: 0.5;
    transform: translateY(-15%);
    transition: 350ms ease-in-out;
  }

  a.linkedin {
    color: #0e76a8;
  }

  a.github {
    color: #171515;
  }

  a.email {
    color: #800000;
  }

  a.whatsapp {
    color: #1ebea5;
  }
`;

export const NewsImage = styled.div`
  transform: translateY(-10%);
  margin: auto;
  margin-top: -25px;
  display: flex;

  .copy {
    color: #f5ffff;
  }
`;
