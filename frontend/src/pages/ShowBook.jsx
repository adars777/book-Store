import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4 ">
      <BackButton />
      <h1 className="text-5xl text-center font-semibold my-4">Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (

        <div className="flex justify-center m-10 align-center ">
        <div className="flex flex-col border-2   bg-indigo-700  rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-white font-semibold">Id: </span>
            <span className="text-white">{book._id}</span>
          </div>

          <div className="my-4">
            <span className="text-xl mr-4 text-white font-semibold">Title: </span>
            <span className="text-white">{book.title}</span>
          </div>

          <div className="my-4">
            <span className="text-xl mr-4 text-white font-semibold">Author: </span>
            <span className="text-white">{book.author}</span>
          </div>

          <div className="my-4">
            <span className="text-xl mr-4 text-white font-semibold">Publish Year: </span>
            <span className="text-white" >{book.publishYear}</span>
          </div>

          <div className="my-4">
            <span className="text-xl mr-4 text-white font-semibold">Create Time: </span>
            <span className="text-white">{new Date(book.createdAt).toString()}</span>
          </div>

          <div className="my-4">
            <span className="text-xl mr-4 text-white font-semibold">
              Last Updated Time: 
            </span>
            <span className="text-white">{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
