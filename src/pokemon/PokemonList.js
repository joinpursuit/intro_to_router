import React from 'react';
import {PokemonListItem} from './PokemonListItem';
export const PokemonList = (props) => {
  let pokemon = props.pokemon.map(poke => {
    return <PokemonListItem key={poke.name} name={poke.name}/>
  })
  return (
    <>
      <ul>
        {pokemon}
      </ul>
    </>
  )
}
