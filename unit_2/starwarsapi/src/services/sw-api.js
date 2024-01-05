

export async function getAllStarships() {

  const res = await fetch(`https://swapi.dev/api/starships/`);
  return await res.json();
};
