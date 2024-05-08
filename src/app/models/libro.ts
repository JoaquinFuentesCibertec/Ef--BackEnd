import { Tema } from "./tema";

export class Libro {

    idlibro: number;
    titulo: string;
    precio: number;
    cantEjemplares: number;
    origen: string;
    idtema: number;
    tema: Tema;

    constructor(idlibro: number, titulo: string, precio: number, cantEjemplares: number, origen: string, idtema: number,
        tema: Tema){

            this.idlibro = idlibro;
            this.titulo = titulo;
            this.precio = precio;
            this.cantEjemplares = cantEjemplares;
            this.origen = origen;
            this.idtema = idtema;
            this.tema = tema;
        }
}
