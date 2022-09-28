/* import {Perfume} from "../Perfumes/perfumesObjects.js"; */

/* new Perfume("Colonia de niña", "Ésika", "Comando Force", "6.00", "../Img articulos/imgPerfume/comando force.jpeg").publicar(false); */

import { Joya } from "./ArticuloMolde.js";
/**
 * Crear instancias para crear un nuevo articulo de tipo joya y agregarlo al DOM al iniciar la pagina en la sección Joyería
 * @param {String} tipo 
 * @param {String} marca 
 * @param {String} nombre 
 * @param {String} precio 
 * @param {String} img 
 */
 function crearNuevoProducto(tipo, marca, nombre, precio, img, estaAgotado) {
   new Joya(tipo, marca, nombre, precio, img).publicar(estaAgotado);
}

//creando perfumes- instancias de la clase Perfume 
crearNuevoProducto("Colonia de niña", "Ésika", "Comando Force", "6.00", "../Img articulos/imgPerfume/comando force.jpeg", false);
//set you 
crearNuevoProducto("Perfume unisex", "Ésika", "set you", "15.00", "../Img articulos/imgPerfume/set you.png", false);
