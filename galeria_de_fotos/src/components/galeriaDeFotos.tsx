type Photo = {
  id: number;
  title: string;
  url: string;
};

export default function GaleriaDeFotos({ photos }: {photos: Photo[]}){
    if (photos.length === 0) {
      return (
        <p className="text-center text-white mt-10">
            Nenhuma foto encontrada
        </p>
        );
    }

    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto p-5">
            {photos.map(photo => (
        <div
          key={photo.id}
          className="bg-white rounded shadow hover:scale-105 transition"
        >
          <img src={photo.url} alt={photo.title} className="rounded-t" />
          <p className="text-center font-medium p-2">
            {photo.title}
          </p>
        </div>
      ))}
    </div>
    )
}