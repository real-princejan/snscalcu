import React, { useState } from "react";
import bgJ from "../assets/bg.png"
import { toast } from "react-toastify";

function DiscountCalculator() {
  const [priceBeforeDiscount, setPriceBeforeDiscount] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [priceAfterDiscount, setPriceAfterDiscount] = useState("0.00");
  const [savedDiscount, setSavedDiscount] = useState("0.00");

  const calculateDiscount = () => {
    const price = parseFloat(priceBeforeDiscount);
    const discount = parseFloat(discountPercentage);

    if (!isNaN(price) && !isNaN(discount)) {
      const discountAmount = (price * discount) / 100;
      const discountedPrice = price - discountAmount;
      setPriceAfterDiscount(discountedPrice.toFixed(2));
      setSavedDiscount(discountAmount.toFixed(2));
    } else {
      toast.error("Please input valid numbers");
    }
  };

  return ( 
    <div className="flex justify-center items-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bgJ})` }} >
      <div className="border-2 border-pink-300 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4 font-bold text-gray-800">Discount Calculator</h2>
        <div className="mb-4">
          <label htmlFor="priceBeforeDiscount" className="block text-sm font-medium text-gray-700">
            Price before discount:
          </label>
          <input
            type="number"
            id="priceBeforeDiscount"
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-pink-300"
            value={priceBeforeDiscount}
            placeholder="$"
            required
            onChange={(e) => setPriceBeforeDiscount(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="discountPercentage" className="block text-sm font-medium text-gray-700">
            Discount percentage:
          </label>
          <input
            type="number"
            id="discountPercentage"
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-pink-200"
            value={discountPercentage}
            placeholder="%"
            required
            onChange={(e) => setDiscountPercentage(e.target.value)}
          />
        </div>
        <button
          className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600"
          onClick={calculateDiscount}
        >
          Calculate
        </button>
        <div className="mt-4 font-bold">
          <p className="">Price after discount: <br /> <span className="text-green-700 text-[25px]">$ {priceAfterDiscount}</span></p>
          <p>Saved discount: <br /> <span className="text-red-700 text-[25px]">$ {savedDiscount}</span></p>
        </div>
      </div>
    </div>
  );
}

export default DiscountCalculator;
