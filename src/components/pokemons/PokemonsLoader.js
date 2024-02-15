import axios from "axios";
import queryString from "query-string";

export async function PokemonsLoader({ request }) {
  let pokemonList = [];
  let totalNumberOfPokemons;
  const parsed = queryString.parseUrl(request.url);
  const offset = parsed.query.offset;

  const searchValue = parsed.query.searchValue;

  if (!searchValue) {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}`
      );
      const results = response.data.results;

      const pokemonDataList = await Promise.all(
        results.map(async (pokemon) => {
          const response = await axios.get(pokemon.url);
          return response.data;
        })
      );

      pokemonList = pokemonDataList;
      totalNumberOfPokemons = response.data.count;
    } catch (error) {
      console.error(error);
    }
  } else {
    try {
      const results = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${searchValue.toLocaleLowerCase()}`
      );
      pokemonList = [results.data];
    } catch (error) {
      console.error(error);
    }
  }

  return { pokemonList, totalNumberOfPokemons };
}
