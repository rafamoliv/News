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
