import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import {
  AppDivFunc,
  MainDivFunc,
  ButtonsDiv,
  QuoteText,
  QuoteSpan,
  AuthorText,
  NewQuoteButtonFunc,
  TwitterAnchorFunc,
} from "./AppStyles";

const App = () => {
  // VARIABLES & STATE
  const backupData = [
    {
      text:
        "Genius is one percent inspiration and ninety-nine percent perspiration.",
      author: "Thomas Edison",
    },
    {
      text: "You can observe a lot just by watching.",
      author: "Yogi Berra",
    },
    {
      text: "A house divided against itself cannot stand.",
      author: "Abraham Lincoln",
    },
    {
      text: "Difficulties increase the nearer we get to the goal.",
      author: "Johann Wolfgang von Goethe",
    },
    {
      text: "Fate is in your hands and no one elses",
      author: "Byron Pulsifer",
    },
    {
      text: "Be the chief but never the lord.",
      author: "Lao Tzu",
    },
    {
      text: "Nothing happens unless first we dream.",
      author: "Carl Sandburg",
    },
    {
      text: "Well begun is half done.",
      author: "Aristotle",
    },
    {
      text: "Life is a learning experience, only if you learn.",
      author: "Yogi Berra",
    },
    {
      text: "Self-complacency is fatal to progress.",
      author: "Margaret Sangster",
    },
    {
      text: "Peace comes from within. Do not seek it without.",
      author: "Buddha",
    },
    {
      text: "What you give is what you get.",
      author: "Byron Pulsifer",
    },
    {
      text: "We can only learn to love by loving.",
      author: "Iris Murdoch",
    },
    {
      text: "Life is change. Growth is optional. Choose wisely.",
      author: "Karen Clark",
    },
    {
      text: "You'll see it when you believe it.",
      author: "Wayne Dyer",
    },
    {
      text: "Today is the tomorrow we worried about yesterday.",
      author: null,
    },
    {
      text: "It's easier to see the mistakes on someone else's paper.",
      author: null,
    },
    {
      text: "Every man dies. Not every man really lives.",
      author: null,
    },
    {
      text: "To lead people walk behind them.",
      author: "Lao Tzu",
    },
    {
      text: "Having nothing, nothing can he lose.",
      author: "William Shakespeare",
    },
    {
      text: "Trouble is only opportunity in work clothes.",
      author: "Henry J. Kaiser",
    },
    {
      text: "A rolling stone gathers no moss.",
      author: "Publilius Syrus",
    },
    {
      text: "Ideas are the beginning points of all fortunes.",
      author: "Napoleon Hill",
    },
    {
      text: "Everything in life is luck.",
      author: "Donald Trump",
    },
    {
      text: "Doing nothing is better than being busy doing nothing.",
      author: "Lao Tzu",
    },
    {
      text: "Trust yourself. You know more than you think you do.",
      author: "Benjamin Spock",
    },
    {
      text: "Study the past, if you would divine the future.",
      author: "Confucius",
    },
    {
      text: "The day is already blessed, find peace within it.",
      author: null,
    },
    {
      text: "From error to error one discovers the entire truth.",
      author: "Sigmund Freud",
    },
    {
      text: "Well done is better than well said.",
      author: "Benjamin Franklin",
    },
    {
      text: "Bite off more than you can chew, then chew it.",
      author: "Ella Williams",
    },
    {
      text: "Work out your own salvation. Do not depend on others.",
      author: "Buddha",
    },
    {
      text: "One today is worth two tomorrows.",
      author: "Benjamin Franklin",
    },
    {
      text: "Once you choose hope, anythings possible.",
      author: "Christopher Reeve",
    },
    {
      text: "God always takes the simplest way.",
      author: "Albert Einstein",
    },
    {
      text: "One fails forward toward success.",
      author: "Charles Kettering",
    },
    {
      text: "From small beginnings come great things.",
      author: null,
    },
    {
      text: "Learning is a treasure that will follow its owner everywhere",
      author: "Chinese proverb",
    },
    {
      text: "Be as you wish to seem.",
      author: "Socrates",
    },
    {
      text: "The world is always in movement.",
      author: "V. Naipaul",
    },
    {
      text: "Never mistake activity for achievement.",
      author: "John Wooden",
    },
    {
      text: "What worries you masters you.",
      author: "Haddon Robinson",
    },
    {
      text: "One faces the future with ones past.",
      author: "Pearl Buck",
    },
    {
      text: "Goals are the fuel in the furnace of achievement.",
      author: "Brian Tracy",
    },
    {
      text: "Who sows virtue reaps honour.",
      author: "Leonardo da Vinci",
    },
    {
      text: "Be kind whenever possible. It is always possible.",
      author: "Dalai Lama",
    },
    {
      text: "Talk doesn't cook rice.",
      author: "Chinese proverb",
    },
    {
      text: "He is able who thinks he is able.",
      author: "Buddha",
    },
    {
      text: "A goal without a plan is just a wish.",
      author: "Larry Elder",
    },
    {
      text: "To succeed, we must first believe that we can.",
      author: "Michael Korda",
    },
  ];

  const [state, setState] = useState({
    allQuotes: backupData,
    quote: {},
  });

  const { allQuotes, quote } = state;

  const [randomNum, setRandomNum] = useState(
    Math.floor(Math.random() * allQuotes.length)
  );

  const colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ];

  const [color, setColor] = useState("#FB6964");

  // STYLED COMPONENT FUNCTIONS
  const AppDiv = AppDivFunc(color);
  const MainDiv = MainDivFunc(color);
  const NewQuoteButton = NewQuoteButtonFunc(color);
  const TwitterAnchor = TwitterAnchorFunc(color);

  // FUNCTIONS
  const updateState = (res = backupData) => {
    setState({
      ...state,
      quote: allQuotes[randomNum],
      allQuotes:
        allQuotes.length > 20
          ? allQuotes.filter((item, index) => index !== randomNum)
          : res.data.filter((item, index) => index !== randomNum),
    });
  };

  const newQuote = () => {
    setRandomNum(Math.floor(Math.random() * allQuotes.length));

    setColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  // USEEFFECT
  useEffect(() => {
    if (allQuotes.length > 20) {
      updateState();
    } else {
      axios
        .get("https://type.fit/api/quotes")
        .then((res) => {
          updateState(res);
        })
        .catch((err) => {
          updateState();
          console.log(err);
        });
    }
  }, [randomNum]);

  // APP
  return (
    <AppDiv>
      <MainDiv id="quote-box">
        <QuoteText id="text">
          <FontAwesomeIcon icon={faQuoteLeft} />
          <QuoteSpan>{quote.text === null ? "DEFAULT" : quote.text}</QuoteSpan>
        </QuoteText>
        <AuthorText id="author">
          - {quote.author === null ? "Unknown" : quote.author}
        </AuthorText>
        <ButtonsDiv>
          <NewQuoteButton id="new-quote" onClick={newQuote}>
            New Quote
          </NewQuoteButton>
          <TwitterAnchor
            href={`https://twitter.com/intent/tweet?hashtags=quotes&text="${quote.text}" -${quote.author}`}
            target="_blank"
            id="tweet-quote"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </TwitterAnchor>
        </ButtonsDiv>
      </MainDiv>
    </AppDiv>
  );
};

export default App;
