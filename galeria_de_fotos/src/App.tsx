import { useState } from "react";
import GaleriaDeFotos from "./components/galeriaDeFotos";
import Header from "./components/header"
import SearchInput from "./components/searchInput"

const photos = [
  { id: 1, title: "Montanha", url: "https://picsum.photos/id/1018/400/300" },
  { id: 2, title: "Praia", url: "https://picsum.photos/id/1015/400/300" },
  { id: 3, title: "Floresta", url: "https://picsum.photos/id/1011/400/300" },
  { id: 4, title: "Cidade", url: "https://picsum.photos/id/1012/400/300" },
  { id: 5, title: "Deserto", url: "https://picsum.photos/id/1002/400/300" },
  { id: 6, title: "Neve", url: "https://picsum.photos/id/1003/400/300" },
  { id: 7, title: "Lago", url: "https://picsum.photos/id/1005/400/300" },
  { id: 8, title: "Ponte", url: "https://picsum.photos/id/1006/400/300" },
  { id: 9, title: "Cachoeira", url: "https://picsum.photos/id/1016/400/300" },
  { id: 10, title: "Campos", url: "https://picsum.photos/id/1020/400/300" }
];


function App() {

  const [search, setSearch] = useState("");

  const filteredPhotos = photos.filter(photo =>
    photo.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className=" min-h-screen bg-slate-900 ">
      <Header />
      <SearchInput search={search} setSearch={setSearch}/>
      <GaleriaDeFotos photos={filteredPhotos}/>
    </div>
  )
}

export default App
