import { useState, useEffect } from "react";
function App() {
  const [searchedCoin, setSearchedCoin] = useState("");
  const [cryptoCoins, setCryptoCoins] = useState([]);

  useEffect(() => {}, []);
  return (
    <div className="flex items-center justify-center flex-col gap-12 mt-8">
      <h1 className="text-green-600 text-4xl">All Cryptocurrencies</h1>
      <input
        type="text"
        className="outline-solid p-1 w-1/8 placeholder:text-xl placeholder:text-gray-700"
        placeholder="Search..."
        value={searchedCoin}
        onChange={(e) => setSearchedCoin(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default App;
