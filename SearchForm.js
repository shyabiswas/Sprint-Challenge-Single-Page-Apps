import React, { useState } from "react";


export default function SearchForm( { placeholder, handleChange, handleSubmit }) {
 
  return (
    <section className="search-form">
     <form onSubmit={handleSubmit}>
    <label htmlFor= 'search'>
      Search
    </label>
    <input
    name= "search" 
    type= "search"
    placeholder={placeholder}
    onChange={handleChange}
    value={CharacterData.name}/>
    <button type="submit">Submit Info</button>
     </form>
    </section>
  );
}
