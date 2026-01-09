import { useEffect, useState } from "react";
import GaleriaDeFotos, { type Photo } from "./components/galeriaDeFotos";
import Header from "./components/header"
import SearchInput from "./components/searchInput"
import fetchPhotos from "./api/fetchPhotos";
import Footer from "./components/footer";



function App() {

   const [search, setSearch] = useState("");
   const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    fetchPhotos().then(setPhotos);
  }, []);

  useEffect(() => {
    if (search.trim() === "") return;

    fetchPhotos(search).then(setPhotos);
  }, [search]);

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <SearchInput search={search} setSearch={setSearch} />
      <GaleriaDeFotos photos={photos} />
      <Footer />
    </div>
  )
}

export default App
