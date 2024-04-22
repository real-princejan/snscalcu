import React, { useState } from "react";
import bgJ from "../assets/bg.png";
import { toast } from "react-toastify";

function DiscountCalculator() {
  const [priceBeforeDiscount, setPriceBeforeDiscount] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [priceAfterDiscount, setPriceAfterDiscount] = useState("$ 0.00");
  const [savedDiscount, setSavedDiscount] = useState("$ 0.00");

  const formatInputValue = (value) => {
    return value.toLocaleString("en-US");
  };

  const calculateDiscount = () => {
    const price = parseFloat(priceBeforeDiscount.replace(/,/g, ""));
    const discount = parseFloat(discountPercentage.replace(/,/g, ""));

    if (!isNaN(price) && !isNaN(discount)) {
      const discountAmount = (price * discount) / 100;
      const discountedPrice = price - discountAmount;
      setPriceAfterDiscount(
        formatInputValue(
          discountedPrice.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })
        )
      );
      setSavedDiscount(
        formatInputValue(
          discountAmount.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })
        )
      );
      toast.success("Discounted successfully!");
    } else {
      toast.error("Please input numbers");
    }
  };

  const handlePriceBeforeDiscountChange = (e) => {
    setPriceBeforeDiscount(
      formatInputValue(e.target.value.replace(/[^0-9.]/g, ""))
    );
  };

  const handleDiscountPercentageChange = (e) => {
    setDiscountPercentage(
      formatInputValue(e.target.value.replace(/[^0-9.]/g, ""))
    );
  };

  const resetInputs = () => {
    setPriceBeforeDiscount("");
    setDiscountPercentage("");
    setPriceAfterDiscount("0.00");
    setSavedDiscount("0.00");
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgJ})` }}
    >
      <div
        className=" border-pink-300 p-8 rounded-lg shadow-lg"
        style={{
          background: "rgba( 255, 245, 255, 0.6)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          backdropFilter: "blur(6.5px)",
          WebkitBackdropFilter: "blur(6.5px)",
          borderRadius: "10px",
        }}
      >
        <h2 className="text-2xl mb-4 font-bold text-gray-800">
          Discount Calculator
        </h2>
        <div className="mb-4">
          <label
            htmlFor="priceBeforeDiscount"
            className="block text-sm font-medium text-gray-700"
          >
            Price before discount:
          </label>
          <input
            type="text"
            id="priceBeforeDiscount"
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-pink-300"
            value={priceBeforeDiscount}
            placeholder="$ 0.00"
            required
            onChange={handlePriceBeforeDiscountChange}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="discountPercentage"
            className="block text-sm font-medium text-gray-700"
          >
            Discount percentage:
          </label>
          <input
            type="text"
            id="discountPercentage"
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-pink-200"
            value={discountPercentage}
            placeholder="%"
            required
            onChange={handleDiscountPercentageChange}
          />
        </div>
        <div className="flex space-x-4">
          <button
            className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600"
            onClick={calculateDiscount}
          >
            Calculate
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
            onClick={resetInputs}
          >
            Reset
          </button>
        </div>
        <div className="mt-4 font-bold">
          <p className="">
            Price after discount: <br />{" "}
            <span className="text-green-700 text-[25px]">
              {priceAfterDiscount}
            </span>
          </p>
          <p>
            Saved discount: <br />{" "}
            <span className="text-red-700 text-[25px]"> {savedDiscount}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default DiscountCalculator;
