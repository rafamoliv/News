import styled from "styled-components";

export const NewClassifiedButton = styled.div`
  button {
    text-transform: uppercase;
    font-weight: bold;
  }

  svg {
    margin-right: 15px;
    font-size: 3rem;
  }

  @media (max-width: 1440px) {
    button {
      font-size: 1rem;
      width: 280px;
    }

    svg {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 1024px) {
    button {
      width: 250px;
    }
  }

  @media (max-width: 768px) {
    button {
      width: 120px;
      font-size: 0.8rem;
    }

    svg {
      font-size: 1rem;
    }
  }

  @media (max-width: 500px) {
    button {
      width: 100%;
      font-size: 0.9rem;
      margin-top: 8px;
    }

    svg {
      font-size: 1.5rem;
    }
  }
`;

export const ContainerEdit = styled.div`
  svg {
    color: #060b26;
    cursor: pointer;
    font-size: 2rem;
    margin: 15px 10px 15px 15px;
  }

  svg:hover {
    opacity: 0.5;
  }
`;

export const ButtonsModal = styled.div`
  button {
    text-transform: uppercase;
    font-weight: bold;
  }

  button:nth-child(2) {
    margin-left: 15px;
  }

  svg {
    cursor: pointer;
    font-size: 1.5rem;
    margin-right: 8px;
  }
`;

export const ContainerModal = styled.div`
  svg {
    font-size: 3rem;
  }
`;

export const FormModal = styled.div`
  margin-bottom: 15px;
`;
