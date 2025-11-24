
export class Cancion {
    id: number;
    nombre: string;
    minutos: number;
    segundos: number;
    loved: boolean;

    constructor(id: number, nombre: string, minutos: number, segundos: number, loved: boolean){
        this.id = id;
        this.nombre = nombre;
        this.minutos = minutos;
        this.segundos = segundos;
        this.loved = loved;
    }

}
