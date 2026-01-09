const API_URL = "https://api.unsplash.com/photos";
const SEARCH_URL = "https://api.unsplash.com/search/photos";
export default async function fetchPhotos(search?: string){
  const headers = {
    Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_KEY}`,
  };

  const url = search
    ? `${SEARCH_URL}?query=${search}&per_page=10`
    : `${API_URL}?per_page=10`;

  const response = await fetch(url, { headers });
  const data = await response.json();

  return search ? data.results : data;
}