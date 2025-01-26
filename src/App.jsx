import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  const [searchedCoin, setSearchedCoin] = useState("");
  const [cryptoCoins, setCryptoCoins] = useState([]);

  useEffect(() => {
    async function getCryptoData() {
      const options = {
        method: "GET",
        url: "https://openapiv1.coinstats.app/coins?limit=1000",
        headers: {
          accept: "application/json",
          "X-API-KEY": "ou4f3VFy3bFCotXiG0uf2ofDFFvgq6CLZFvjygQq/GU=",
        },
      };
      const response = await axios.request(options);
      const cryptoData = await response.data.result;
      console.log(cryptoData);
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
      <table className="w-250 border-separate border-spacing-1">
        <caption>Cryptocurrency coins and information</caption>
        <thead className="bg-[#2C2C2C] text-white text-center">
          <tr>
            <td>Rank</td>
            <td>Name</td>
            <td>Symbol</td>
            <td>Market Cap</td>
            <td>Price</td>
            <td>Available Supply</td>
            <td>Total Supply</td>
            <td>Volume (24hrs)</td>
          </tr>
        </thead>
        <tbody>
          {cryptoCoins
            .filter((coin) =>
              coin.name.toLowerCase().includes(searchedCoin.toLowerCase())
            )
            .map((coin, id) => {
              return (
                <tr key={id}>
                  <td className="text-center font-bold">{coin.rank}</td>
                  <td className="flex justify-start gap-2.5 pl-1.5">
                    <a href={coin.websiteUrl} target="_blank">
                      <img src={coin.icon} alt="coin-icon" className="w-10" />
                    </a>
                    <p>{coin.name}</p>
                  </td>
                  <td className="text-center">{coin.symbol}</td>
                  <td className="text-center">{coin.marketCap}</td>
                  <td className="text-center">{coin.price}</td>
                  <td className="text-center">{coin.availableSupply}</td>
                  <td className="text-center">{coin.totalSupply}</td>
                  <td className="text-center">{coin.volume}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
