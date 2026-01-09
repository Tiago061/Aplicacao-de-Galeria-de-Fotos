import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

type Props = {
  search: string;
  setSearch: (value: string) => void;
}

export default function SearchInput({search, setSearch }: Props){
    
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