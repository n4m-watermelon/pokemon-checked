import React, { useState, useEffect } from "react";
import axios from "axios";
export default function PokeAPI() {
  const [overView, setOverView] = useState({});
  const [name, setname] = useState("");
  const [Find, setFind] = useState("pikachu");
  const [Img, setImg] = useState("");
  const [Type, setType] = useState("");

  useEffect(() => {
    async function getData() {
      let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${Find}`);
      setImg(res.data.sprites.front_default);
      setType(res.data.types[0].type.name);
      setOverView(res.data);
      // console.log(res.data);
    }
    getData();
  }, [Find]);

  const Typename = (event) => {
    setname(event.target.value);
  };

  const Search = () => {
    if (name !== "") setFind(name);
    setname("");
  };

  return (
    <>
      {overView && (
        <div className="card absolute left-[50%] top-[50%] translate-x-[-50%]">
          <div className="inline-block relative text-gray-600 focus-within:text-gray-400">
            <span className="absolute inset-y-0 left-0 flex items-center pr-2">
              <button
                onClick={Search}
                className="p-1 focus:outline-none focus:shadow-outline"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </span>
            <input
              type="text"
              onChange={Typename}
              value={name}
              className="shadow py-2 text-sm text-black rounded-md pl-10 focus:outline-none "
              placeholder="Search..."
            />
          </div>
        </div>
      )}
    </>
  );
}
