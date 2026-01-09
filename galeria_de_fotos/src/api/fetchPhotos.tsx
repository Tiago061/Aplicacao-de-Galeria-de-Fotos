export default async function fetchPhotos(search?: string){

    const endpoint = search
    ? `https://api.unsplash.com/search/photos?query=${search}&per_page=10`
    : `https://api.unsplash.com/photos?per_page=10`;

    const response = await fetch(endpoint, {
        headers: {
            Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_KEY}`,
        },
    })
    const data = await response.json()
     return search ? data.results : data;
}