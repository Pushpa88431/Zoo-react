import React from "react";

import { useState } from "react";
import Card from "./Card";
import { birds } from "../animalsList";

import Header from "./Header";
const Birds = () => {
  const [birdList, setBirds] = useState(birds);
  const [search, setSearch] = useState("");

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div>
      <Header></Header>
      <main>
        <h1>Birds</h1>
        <input type="text" onChange={searchHandler} />
        <div className="cards">
          {birdList
            .filter((bird) =>
              bird.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((bird) => (
              <Card key={bird.name} title={bird.name} />
            ))}
        </div>
      </main>
    </div>
  );
};

export default Birds;
