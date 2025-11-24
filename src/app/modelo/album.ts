export class Album {
    id: number;
    nombre: string;
    anio: number;
    //canCanciones: number;
    tracks: number;
    imagen: string;

    constructor(id: number, nombre: string, anio: number, tracks: number, imagen: string){
        this.id = id;
        this.nombre = nombre;
        this.anio = anio;
        //this.canCanciones = canCanciones;
        this.tracks = tracks; //esto en teoria deberia ser (cantidad de canciones)
        this.imagen = imagen;
    }
}
