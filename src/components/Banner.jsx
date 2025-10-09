import React, { useEffect, useRef, useState } from "react";
import Modal from "./Modal";

const Banner = () => {
  // const [newProduct, setNewProduct] = useState({
  //   title: "",
  //   price: "",
  //   description: "",
  //   categoryId: 1,
  //   images: "https://placehold.co/600x400",
  // });
  const [loading, setLoading] = useState(false);

  const titleRef = useRef();
  const priceRef = useRef();
  const descriptionRef = useRef();
  const categoryIdRef = useRef(1);
  const imagesRef = useRef("https://placehold.co/600x400");

  //   const productRef = useRef({
  //   title: "",
  //   price: "",
  //   description: "",
  //   categoryId: 1,
  //   images: "https://placehold.co/600x400",
  // });

  const arr = [
    { name: "Hussain" },
    { name: "shnzay" },
    { name: "mohsin" },
    { name: "arsalan" },
  ];
  const a = [...arr, { name: "john" }];
  console.log({ a });

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleChange = (e) => {
  //   setNewProduct({
  //     ...newProduct,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // console.log( productRef.current );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    console.log("called");

    try {
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/products/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: titleRef.current.value,
            price: priceRef.current.value,
            description: descriptionRef.current.value,
            categoryId: parseFloat(categoryIdRef.current.value),
            images: ["hussain.png"],
          }),
        }
      );

      const data = await response.json();
      console.log("New data added Successfully", data);

      setNewProduct({
        title: "",
        price: "",
        description: "",
        categoryId: 1,
        images: "https://placehold.co/600x400",
      });
      handleClose();
    } catch (err) {
      console.log("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full h-[48rem] pl-8 bg-[url('/Section01.png')] bg-cover bg-center text-center flex flex-col ">
      <div className="w-[632] h-[208] absolute left-46 top-70 pr-[632] text-white md:w-48rem">
        <h2 className="text-6xl font-normal mb-[14px]">Your Cozy Era</h2>
        <p className="text-2xl font-thin mb-[30px]">
          Get peak comfy-chic <br></br>with new winter essentials.
        </p>
        <button
          onClick={handleOpen}
          className="text-md px-18 py-2 bg-white text-black hover:shadow-lg hover:scale-101"
        >
          SHOP NOW
        </button>
      </div>

      <Modal isOpen={open} onClose={handleClose}>
        <form
          onSubmit={handleSubmit}
          className=" w-100 h-200 text-center flex flex-col justify-center items-center bg-gray-400"
        >
          <input
            ref={titleRef}
            type="text"
            name="title"
            placeholder="Title"
            required
            className="bg-white w-80 mb-2 border-gray-200 border-2 px-4 py-5"
          />

          <input
            ref={priceRef}
            type="number"
            name="price"
            placeholder="Price"
            className="bg-white w-80 mb-2 border-gray-200 border-2 px-4 py-5"
          />

          <input
            ref={descriptionRef}
            type="text"
            name="description"
            placeholder="Description"
            // value={descriptionRef.current.description}
            className="bg-white w-80 mb-2 border-gray-200 border-2 px-4 py-5"
          />

          <input
            ref={categoryIdRef}
            type="number"
            name="categoryId"
            placeholder="Category-Id"
            value={categoryIdRef.current.categoryId}
            className="bg-white w-80 mb-2 border-gray-200 border-2 px-4 py-5"
          />

          <input
            ref={imagesRef}
            type="file"
            name="images"
            placeholder="File"
            // value={newProduct.images}

            className="bg-white w-80 mb-2 border-gray-200 border-2 px-4 py-5"
          />

          <button
            type="submit"
            className="bg-white px-3 py-2 mb-2 text-2xl text-black rounded-2 cursor-pointer hover:bg-gray-300"
          >
            Submit
          </button>
          <button
            onClick={handleClose}
            className="bg-white px-3 py-2 text-2xl text-black rounded-2 cursor-pointer hover:bg-gray-300"
          >
            Close
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Banner;
