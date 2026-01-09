import { useEffect, useState } from "react";
import GaleriaDeFotos, { type Photo } from "./components/galeriaDeFotos";
import Header from "./components/header"
import SearchInput from "./components/searchInput"
import fetchPhotos from "./api/fetchPhotos";
import Footer from "./components/footer";



function App() {

   const [search, setSearch] = useState("");
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchPhotos()
      .then(setPhotos)
      .finally(() => setLoading(false));
  }, []);

  // 🔹 Buscar quando digitar
  useEffect(() => {
    if (!search.trim()) {
      setHasSearched(false);
      return;
    }

    setHasSearched(true);
    setLoading(true);

    fetchPhotos(search)
      .then(setPhotos)
      .finally(() => setLoading(false));
  }, [search]);

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <SearchInput search={search} setSearch={setSearch} />

      {loading && (
        <p className="text-center text-white mt-10">Carregando...</p>
      )}

      {!loading && (
        <GaleriaDeFotos photos={photos} />
      )}
      <Footer />
    </div>
  )
}

export default App
