import { type } from "@testing-library/user-event/dist/type";
import { Pokemon } from "../models/pockemon.m";

export async function  getPokemons(): Promise<Pokemon[]>{
    const response = await fetch("https://unpkg.com/pokemons@1.1.0/pokemons.json");
    const datos =  await response.json();
    const pokemons = datos.results.map((pokemon: any) => ({
        id: pokemon.national_number,
        name: pokemon.name,
        imggif: corregirNobmbre(pokemon.sprites["animated"]),
        imglarge: corregirNobmbre(pokemon.sprites["large"]),
        imgnormal: corregirNobmbre(pokemon.sprites["normal"]),
        total: pokemon.total, 
        hp: pokemon.hp,
        attack: pokemon.attack,
        defense: pokemon.defense,
        sp_atk: pokemon.sp_atk,
        sp_def: pokemon.sp_def,
        speed: pokemon.sped,
        type: pokemon.type[0]
    }));

    const pokemonsSinRepeticiones = pokemons.filter(
        (pokemon: any, index: number)=>
        pokemons.findIndex((other: any) => other.id === pokemon.id ) === index
        );

    return pokemonsSinRepeticiones;



}
export function corregirNobmbre(nombre: string ):string{
   return nombre.replace("'","").replace("♂","-f").replace("♀","-m").replace(".-","-");

}