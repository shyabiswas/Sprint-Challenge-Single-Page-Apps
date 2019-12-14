import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm"


function CharacterList() {
  // TODO: Add useState to track data from useEffect
const [data, setData]= useState([]);
const [search, setSearch]=useState('')
  useEffect(() => {
    Axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then (res => {
      console.log(res);
      const characters= res.data.results;
      setData(characters);
    })
    .catch(err => {
      console.log('No data return', err);
    })
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  const handleChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value)
  }
const handleSubmit = (event) => {
  event.preventDefault();
  alert(`submitting Name: ${search}`)
}
  return (
    <section className="character-list">
      <h2></h2>
      <SearchForm
      placeholder= 'Search characters'
      value={search}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      />
      {data.map(character => (
        <CharacterCard
        key={character.id}
        name={character.name}
        image={character.image}
        species={character.species}
        />
      ))}
    </section>
  );
}

export default CharacterList
