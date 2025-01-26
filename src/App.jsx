import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [searchedCoin, setSearchedCoin] = useState("");
  const [cryptoCoins, setCryptoCoins] = useState([]);

  useEffect(() => {
    async function getCryptoData() {
      const options = {
        method: "GET",
        url: "https://openapiv1.coinstats.app/coins?limit=100",
        headers: {
          accept: "application/json",
          "X-API-KEY": "ou4f3VFy3bFCotXiG0uf2ofDFFvgq6CLZFvjygQq/GU=",
        },
      };
      const response = await axios.request(options);
      const cryptoData = await response.data.result;
      setCryptoCoins(cryptoData);
    }
    getCryptoData();
  }, []);
  return (
    <div className="flex items-center justify-center flex-col gap-12 mt-8">
      <h1 className="text-green-600 text-6xl">All Cryptocurrencies</h1>
      <input
        type="text"
        className="outline-solid p-1 w-1/5 mt-10 placeholder:text-2xl placeholder:text-gray-700"
        placeholder="Search..."
        value={searchedCoin}
        onChange={(e) => setSearchedCoin(e.target.value)}
      />
      <table>
        <caption>Cryptocurrency coins and information</caption>
        <thead>
          <tr>
            <td>Rank</td>
            <td>Name</td>
            <td>Symbol</td>
            <td>Market Cap</td>
            <td>Price</td>
            <td>Available Supply</td>
            <td>Volume(24hrs)</td>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default App;
