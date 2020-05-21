import styled from "styled-components";

export const AppDivFunc = (color) => {
  return styled.div`
    background-color: ${color};
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
};

export const MainDivFunc = (color) => {
  return styled.div`
    background-color: #fff;
    width: 45vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${color};
    padding: 3% 0;
    border-radius: 5px;

    @media (max-width: 992px) {
      width: 60vw;
    }

    @media (max-width: 768px) {
      width: 75vw;
    }

    @media (max-width: 576px) {
      width: 90vw;
      padding: 5% 0;
    }
  `;
};

export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin-top: 20px;
  font-size: 1.2rem;

  @media (max-width: 414px) {
    flex-direction: column;
  }
`;

export const QuoteText = styled.p`
  font-size: 1.8rem;
  width: 85%;
  text-align: center;
  margin-bottom: 0;
`;

export const QuoteSpan = styled.span`
  padding-left: 2%;
`;

export const AuthorText = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
  padding-top: 5px;
  padding-left: 50%;
  text-align: justify;

  @media (max-width: 576px) {
    padding-left: 40%;
  }

  @media (max-width: 414px) {
    padding-left: 30%;
  }

  @media (max-width: 380px) {
    padding-left: 25%;
  }
`;

export const NewQuoteButtonFunc = (color) => {
  return styled.button`
    background-color: ${color};
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    padding: 13px 18px;
    font-size: 0.9rem;

    &:hover {
      opacity: 0.8;
    }

    @media (max-width: 414px) {
      margin-bottom: 20px;
      padding: 15px 30%;
      font-size: 1.1rem;
    }

    @media (max-width: 380px) {
      font-size: 1rem;
    }
  `;
};

export const TwitterAnchorFunc = (color) => {
  return styled.a`
    background-color: ${color};
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    padding: 10px 12px;

    &:hover {
      opacity: 0.8;
    }

    @media (max-width: 414px) {
      padding: 15px 42%;
    }
  `;
};
