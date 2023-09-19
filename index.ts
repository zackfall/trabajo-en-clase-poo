import { Coche } from "./coche";
import { Motor } from "./motor";

const motor = new Motor("A3WB");
const cocheVolkswagen = new Coche(5, "Volkswagen", "34EF", motor);
console.log(cocheVolkswagen.imprimir());

const cocheToyota = new Coche(4, "Toyota", "Yaris", motor);
console.log(cocheToyota.imprimir());
