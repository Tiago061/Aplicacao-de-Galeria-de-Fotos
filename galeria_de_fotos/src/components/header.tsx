import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

export default function Header(){
    return(
        <nav className='flex  bg-blue'>
            <h1>Galeria de Fotos</h1>

            <div>
                <SearchRoundedIcon/>
                <input type="search" />
            </div>
        </nav>
    );
}