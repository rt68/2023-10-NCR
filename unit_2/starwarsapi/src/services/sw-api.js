

export async function getAllStarships() {
  try {
    const res = await fetch(`https://swapi.dev/api/starships/`);
    if (!res.ok) { // Check if the response status code is not OK (200-299)
      throw new Error('Failed to fetch starships');
    }
    const data = await res.json();
    // Note: Handle pagination if necessary by checking for and fetching additional pages
    return data;
  } catch (error) {
    console.error("Error fetching starships:", error);
    // Optionally, re-throw the error or handle it accordingly
    throw error;
  }
};
