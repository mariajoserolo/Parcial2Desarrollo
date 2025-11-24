import { Album } from "./album";

export class AlbumArtista extends Album{
    album: Album;
    artista: string;

    constructor(album: Album, artista: string){
        super(album.id,
            album.nombre,
            album.anio,
            album.tracks,
            album.imagen
        );
        this.album = album;
        this.artista = artista;
        
    }

}
