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
`;

export const NewQuoteButtonFunc = (color) => {
  return styled.button`
    background-color: ${color};
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    padding: 13px 18px;

    &:hover {
      opacity: 0.8;
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
  `;
};
