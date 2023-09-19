import { Coche } from "./coche";
import { Motor } from "./motor";

const motor = new Motor("A3WB");
const coche = new Coche(5, "Volkswagen", "34EF", motor);

console.log(coche.imprimir());