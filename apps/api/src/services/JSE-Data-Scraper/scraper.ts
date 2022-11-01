import axios from 'axios';

const jseQuotes = 'https://www.jamstockex.com/trading/trade-quotes/';
const jseSummary = 'https://www.jamstockex.com/trading/trade-summary/';

const scraperQuotes = async () => {
  const response = await axios.get(jseQuotes);

  console.log(response.data);
};
const scraperSummary = async () => {
  const response = await axios.get(jseSummary);

  console.log(response.data);
};

(async () => {
  await scraperQuotes();
  await scraperSummary();
})();
