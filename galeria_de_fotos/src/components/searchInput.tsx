import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import{ useState } from 'react';

export default function SearchInput(){
    const [search, setSearch] = useState("");

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

      const filteredPhotos = photos.filter(photo =>
        photo.title.toLowerCase().includes(search.toLowerCase())
      );
    
    return(
       <div className="flex-1 p-5 max-w-[1200px] mx-auto">
            <div className="flex justify-center mb-5 gap-2.5">
                <input
                type="text"
                placeholder="Pesquisar fotos..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full max-w-[300px] p-2.5 text-base rounded border border-gray-300 focus:outline-none"
                />

                <button className="px-4 py-2.5 text-base rounded bg-white text-white cursor-pointer">
                    <SearchRoundedIcon className='text-black'/>
                </button>
            </div>
        </div>
    )
    
}