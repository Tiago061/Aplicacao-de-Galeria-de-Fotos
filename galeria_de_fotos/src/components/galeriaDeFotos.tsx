
export type Photo = {
  id: string;
  alt_description: string | null;
  urls: {
    small: string;
    regular: string;
  };
};

type Props = {
  photos: Photo[];
};
export default function GaleriaDeFotos({ photos }: Props){
    if (photos.length === 0) {
    return (
      <p className="text-center text-white mt-10">
        Nenhuma foto encontrada
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto p-5">
      {photos.map(photo => (
        <div
          key={photo.id}
          className="bg-white rounded shadow hover:scale-105 transition"
        >
          <img
            src={photo.urls.small}
            alt={photo.alt_description || "Foto"}
            className="rounded-t"
          />
          <p className="text-center p-2 font-medium">
            {photo.alt_description || "Sem título"}
          </p>
        </div>
      ))}
    </div>
    )
}