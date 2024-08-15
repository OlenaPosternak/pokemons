import { Helmet } from "react-helmet-async";

export const PokemonPage = ({}) => {
  return (
    <>
      <Helmet>
        <title>pokemon name</title>
        <meta name="description" content={`Details of pokemon name`} />
        <meta property="og:type" content="Test contnet" />
        <meta property="og:title" content="Test title" />
        <meta property="og:description" content="desc 1" />
        <meta
          property="og:url"
          content="https://yourpokemons.netlify.app/allpokemons/1"
        />
      </Helmet>
      <p>Cooming Soon</p>
    </>
  );
};
