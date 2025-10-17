import React, { useReducer } from "react";

const UseRed = () => {
  const initialState = {
    productName: "",
    price: "",
    description: "",
    quantity: "",
    isSubmitted: false,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "add-data":
        return { ...state, [action.field]: action.value };
        break;
      case "submit":
        return { ...state, isSubmitted: true };
      case "reset":
        return initialState;
      default:
        return state;
        break;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "submit" });
    console.log("Data Submitted Successfully");
    console.log(state);
  };

  return (
    <div>
      <div className="relative left-[40%]">
        <form
          onSubmit={handleSubmit}
          className=" w-100 p-20 text-center flex flex-col justify-center items-center bg-amber-400"
        >
          <h3 className="text-2xl font-bold pb-2">FORM - useReducer</h3>

          <input
            type="text"
            name="productName"
            placeholder="Product Name"
            value={state.productName}
            onChange={(e) => {
              dispatch({
                type: "add-data",
                field: "productName",
                value: e.target.value,
              });
            }}
            className="bg-white w-80 mb-2 border-gray-200 border-2 px-4 py-5 focus:outline-none focus:border-amber-600"
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={state.price}
            onChange={(e) => {
              dispatch({
                type: "add-data",
                field: "price",
                value: e.target.value,
              });
            }}
            className="bg-white w-80 mb-2 border-gray-200 border-2 px-4 py-5 focus:outline-none focus:border-amber-600"
          />

          <input
            type="text"
            name="description"
            placeholder="Description"
            value={state.description}
            onChange={(e) => {
              dispatch({
                type: "add-data",
                field: "description",
                value: e.target.value,
              });
            }}
            className="bg-white w-80 mb-2 border-gray-200 border-2 px-4 py-5 focus:outline-none focus:border-amber-600"
          />

          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            value={state.quantity}
            onChange={(e) => {
              dispatch({
                type: "add-data",
                field: "quantity",
                value: e.target.value,
              });
            }}
            className="bg-white w-80 mb-2 border-gray-200 border-2 px-4 py-5 focus:outline-none focus:border-amber-600"
          />

          <button
            type="submit"
            className="bg-amber-800 px-7 py-3 mb-2 mt-4 text-xl font-bold text-white rounded-3xl cursor-pointer hover:bg-amber-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UseRed;
