import React, { useState, useEffect } from "react";
import axios from "axios";
export default function PokeAPI() {

  const [name, setname] = useState("");
  const [Find, setFind] = useState("pikachu");
  const [Img, setImg] = useState("");
  const [Type, setType] = useState("");

  useEffect(() => {
    async function getData() {
      let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${Find}`);
      console.log(res);
      setImg(res.data.sprites.front_default);
      setType(res.data.types[0].type.name);
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
     <div className="card">
     <div class="inline-block relative text-gray-600 focus-within:text-gray-400">
        <span class="absolute inset-y-0 left-0 flex items-center pr-2">
            <button onClick={Search} class="p-1 focus:outline-none focus:shadow-outline">
             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
        </span>
        <input type="text"  onChange={Typename} value={name}  class="shadow py-2 text-sm text-black rounded-md pl-10 focus:outline-none " placeholder="Search..."/>
        </div>
        <div className="back">
            <div className="card">
            <img src={`${Img}`} alt="" />
            <div className="name">{Find}</div>
            <div className="type">type: {Type}</div>
            </div>
        </div>
     </div>
    </>
  );
}