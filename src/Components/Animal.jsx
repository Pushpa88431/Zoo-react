import React from "react";
import { useState } from "react";
import Card from "./Card";
import { animals } from "../animalsList";

import Header from "./Header";

const Animal = () => {
  const [animalsList, setAnimals] = useState(animals);

  const [search, setSearch] = useState("");

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div>
      <Header></Header>
      <main>
        <h1>Animals</h1>
        <input type="text" onChange={searchHandler} />
        <div className="cards">
          {animalsList
            .filter((animal) =>
              animal.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((animal) => (
              <Card key={animal.name} title={animal.name} />
            ))}
        </div>
      </main>
    </div>
  );
};

export default Animal;
