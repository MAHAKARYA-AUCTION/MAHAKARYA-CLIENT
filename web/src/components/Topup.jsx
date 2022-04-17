import { useState, useEffect } from "react";
import axios from 'axios'

export default function Topup() {
  const [UserId, setUserId] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    const myMidtransClientKey = "SB-Mid-client-s6SV0WfrkztKRJyG";

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;

    scriptTag.setAttribute("data-client-key", myMidtransClientKey);

    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  const topupHandler = async (e) => {
    e.preventDefault();
    try {
      const cb = await axios.post(`http://localhost:3000/topup`, {
        UserId,
        price,
      })
      console.log(cb.data);
      let win = window.open(cb.data.redirect_url, '_blank')
      win.focus()
    } catch (err){
      console.log(err);
    }
  }

  function useridHandler(e) {
    setUserId(e.target.value);
  }

  function priceHandler(e) {
    setPrice(e.target.value);
  }

  return (
    <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            USERID
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="UserId" type="text" placeholder="UserId" value={UserId} onChange={useridHandler} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            PRICE
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="price" type="text" placeholder="price" value={price} onChange={priceHandler} />
        </div>
        <div className="flex items-center justify-center">
          <button onClick={topupHandler} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Topup
          </button>
        </div>
      </form>
    </div>
  )
}