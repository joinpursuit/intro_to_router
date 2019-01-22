import {PokemonListItem} from './PokemonListItem';
import {PokemonList} from './PokemonList';
import React from 'react'
export const Pokemon = (props) => {
  debugger
  return(
    <>
    <button onClick={props.toggleShowing}>{props.showing ? "Hide Pokemon" : "Show Pokemon"}</button>
    {props.showing ? <PokemonList pokemon={props.pokemon}/> : null}
    </>
  )
}
