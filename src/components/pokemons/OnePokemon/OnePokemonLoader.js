import axios from "axios";
import queryString from "query-string";

export async function OnePokemonLoader({ request }) {
  const parsed = queryString.parseUrl(request.url);
  const searchValue = parsed.query.searchValue;

  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${searchValue.toLocaleLowerCase()}`
    );
    return { pokeData: response.data, isPokemonExist: true };
  } catch (error) {
    console.error(error);
    return { isPokemonExist: false };
  }
}
